
import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import AddNeologismForm from "@/components/AddNeologismForm";
import NeologismCard from "@/components/NeologismCard";
import MobileMenu from "@/components/MobileMenu";
import NeologismDetailDialog from "@/components/NeologismDetailDialog";
import { neologisms as importedNeologisms, getCategories } from "@/data/neologisms";

const Index = () => {
  const [neologisms, setNeologisms] = useState(importedNeologisms);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedNeologism, setSelectedNeologism] = useState(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);

  // Get unique categories
  const categories = getCategories();

  // Filter neologisms based on search and category
  const filteredNeologisms = useMemo(() => {
    return neologisms.filter(neologism => {
      const matchesSearch = neologism.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           neologism.definizione.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || neologism.categoria === selectedCategory;
      return matchesSearch && matchesCategory && neologism.status === "Ready";
    });
  }, [neologisms, searchTerm, selectedCategory]);

  const handleAddNeologism = (newNeologism: any) => {
    const neologismWithId = {
      ...newNeologism,
      id: Math.max(...neologisms.map(n => n.id)) + 1,
      status: "Draft"
    };
    setNeologisms([...neologisms, neologismWithId]);
    setIsDialogOpen(false);
  };

  const handleNeologismClick = (neologism: any) => {
    setSelectedNeologism(neologism);
    setIsDetailDialogOpen(true);
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
            {/* Top Row: Logo, Title, and Add Button */}
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-4 min-w-0 flex-1">
                {/* Logo */}
                <img 
                  src="/lovable-uploads/9b659a1c-cbfc-401e-a9d8-8e78ee956a66.png" 
                  alt="Carlo D'Alatri Logo" 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg flex-shrink-0"
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
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  categories={categories}
                  onAddNeologism={() => setIsDialogOpen(true)}
                />
              </div>

              {/* Desktop Add Button */}
              <div className="hidden md:block">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all duration-200 hover:shadow-xl"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Aggiungi Neologismo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-slate-800">
                        Nuovo Neologismo
                      </DialogTitle>
                    </DialogHeader>
                    <AddNeologismForm 
                      onSubmit={handleAddNeologism}
                      existingCategories={categories}
                    />
                  </DialogContent>
                </Dialog>
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
              </div>
            </nav>

            {/* Desktop Search and Filter Controls */}
            <div className="hidden md:block">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Esplora i Neologismi</h2>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Cerca neologismi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-lg border-slate-300 focus:border-indigo-500"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-64 h-12 text-lg border-slate-300">
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

            {/* Mobile Search Title */}
            <div className="md:hidden">
              <h2 className="text-lg font-bold text-slate-800">Esplora i Neologismi</h2>
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
