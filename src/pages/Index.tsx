
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import MobileMenu from "@/components/MobileMenu";
import NeologismDetailDialog from "@/components/NeologismDetailDialog";
import Footer from "@/components/Footer";
import { neologisms as importedNeologisms, getCategories } from "@/data/neologisms";

const Index = () => {
  const [neologisms, setNeologisms] = useState(importedNeologisms);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedNeologism, setSelectedNeologism] = useState(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);

  // Get unique categories
  const categories = getCategories();

  // Filter neologisms based on category only
  const filteredNeologisms = useMemo(() => {
    return neologisms.filter(neologism => {
      const matchesCategory = selectedCategory === "all" || neologism.categoria === selectedCategory;
      return matchesCategory && neologism.status === "Ready";
    });
  }, [neologisms, selectedCategory]);

  const handleAddNeologism = (newNeologism: any) => {
    const neologismWithId = {
      ...newNeologism,
      id: Math.max(...neologisms.map(n => n.id)) + 1,
      status: "Draft"
    };
    setNeologisms([...neologisms, neologismWithId]);
  };

  const handleNeologismClick = (neologism: any) => {
    setSelectedNeologism(neologism);
    setIsDetailDialogOpen(true);
  };

  const handleRandomNeologism = () => {
    const readyNeologisms = neologisms.filter(n => n.status === "Ready");
    if (readyNeologisms.length > 0) {
      const randomIndex = Math.floor(Math.random() * readyNeologisms.length);
      const randomNeologism = readyNeologisms[randomIndex];
      setSelectedNeologism(randomNeologism);
      setIsDetailDialogOpen(true);
    }
  };

  const getSummaryDescription = (description: string) => {
    return description.length > 15 ? description.substring(0, 15) + "..." : description;
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* HEADER - Fixed Header with Logo and Controls */}
      <div className="flex-none bg-white/80 backdrop-blur-sm border-b-2 border-slate-300">
        <div className="container mx-auto px-4 py-3 md:py-6">
          <div className="flex flex-col gap-4">
            {/* Top Row: Logo, Title, and Mobile Menu */}
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-4 min-w-0 flex-1">
                {/* Logo */}
                <img 
                  src="/lovable-uploads/9b659a1c-cbfc-401e-a9d8-8e78ee956a66.png" 
                  alt="Carlo D'Alatri Logo" 
                  className="w-16 h-16 md:w-24 md:h-24 rounded-lg shadow-lg flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-1 md:mb-2 leading-tight">
                    Neologismi di Carlo D'Alatri
                  </h1>
                  <p className="text-slate-600 text-sm md:text-lg hidden sm:block">
                    Una collezione di parole per descrivere l'indescrivibile
                  </p>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <MobileMenu
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  categories={categories}
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:block">
              <div className="flex gap-6">
                <Link 
                  to="/prologo-max-tortora" 
                  className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                >
                  Prologo - Max Tortora
                </Link>
                <Link 
                  to="/tuttologo-lillo" 
                  className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                >
                  Tuttologo - Lillo
                </Link>
                <button
                  onClick={handleRandomNeologism}
                  className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                >
                  Uno a Caso
                </button>
              </div>
            </nav>

            {/* Section Title with Category Filter */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-lg md:text-2xl font-bold text-slate-800">Esplora i Neologismi</h2>
                <div className="w-full sm:w-64">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-10 md:h-12 text-sm md:text-lg border-slate-300">
                      <SelectValue placeholder="Seleziona categoria" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-200">
                      <SelectItem value="all">Tutte le categorie</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FRAME - Scrollable Neologisms List */}
      <div className="flex-1 min-h-0 bg-white/50 backdrop-blur-sm">
        <ScrollArea className="h-full w-full">
          <div className="container mx-auto px-4 py-3 md:py-6">
            <div className="space-y-3 md:space-y-4">
              {filteredNeologisms.map((neologism) => (
                <div key={neologism.id} onClick={() => handleNeologismClick(neologism)}>
                  <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-200 border-slate-200 hover:border-indigo-300 cursor-pointer hover:scale-[1.02]">
                    <CardHeader className="pb-2 md:pb-3">
                      <div className="flex justify-between items-start gap-2 md:gap-4">
                        <CardTitle className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
                          {neologism.name}
                        </CardTitle>
                        <div className="flex flex-col gap-1 md:gap-2 items-end flex-shrink-0">
                          <Badge variant="outline" className="text-indigo-600 border-indigo-300 whitespace-nowrap text-xs md:text-sm">
                            {neologism.categoria}
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 border-green-300 whitespace-nowrap text-xs md:text-sm">
                            {neologism.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {getSummaryDescription(neologism.definizione)}
                      </p>
                      <p className="text-xs md:text-sm text-indigo-600 mt-1 md:mt-2 opacity-70">
                        Clicca per visualizzare dettagli completi
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
              {filteredNeologisms.length === 0 && (
                <Card className="p-6 md:p-8 text-center">
                  <p className="text-slate-500 text-base md:text-lg">
                    Nessun neologismo trovato con i criteri di ricerca attuali.
                  </p>
                </Card>
              )}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Footer */}
      <Footer onAddNeologism={handleAddNeologism} categories={categories} />

      {/* Neologism Detail Dialog */}
      <NeologismDetailDialog
        neologism={selectedNeologism}
        isOpen={isDetailDialogOpen}
        onClose={() => setIsDetailDialogOpen(false)}
      />
    </div>
  );
};

export default Index;
