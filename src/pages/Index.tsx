
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
import { neologisms as importedNeologisms, getCategories } from "@/data/neologisms";

const Index = () => {
  const [neologisms, setNeologisms] = useState(importedNeologisms);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [featuredNeologism, setFeaturedNeologism] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Get unique categories
  const categories = getCategories();

  // Get random neologism for initial featured display
  const randomNeologism = useMemo(() => {
    const readyNeologisms = neologisms.filter(n => n.status === "Ready");
    return readyNeologisms[Math.floor(Math.random() * readyNeologisms.length)];
  }, [neologisms]);

  // Use featured neologism if selected, otherwise show random
  const displayedNeologism = featuredNeologism || randomNeologism;

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
    setFeaturedNeologism(neologism);
    setIsDescriptionExpanded(false);
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const getTruncatedDescription = (description: string) => {
    if (isDescriptionExpanded || description.length <= 150) {
      return description;
    }
    return description.substring(0, 150) + "...";
  };

  const getSummaryDescription = (description: string) => {
    return description.length > 15 ? description.substring(0, 15) + "..." : description;
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* TOP FRAME - Fixed Header with Featured Content and Controls */}
      <div className="flex-none bg-white/80 backdrop-blur-sm border-b-2 border-slate-300 max-h-[60vh] md:max-h-none overflow-hidden">
        {/* Header */}
        <div className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-3 md:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
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
                  {/* Navigation Links */}
                  <nav className="mt-2 md:mt-4">
                    <div className="flex gap-3 md:gap-6 text-xs md:text-base">
                      <Link 
                        to="/prologo-max-tortora" 
                        className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors whitespace-nowrap"
                      >
                        Prologo - Max Tortora
                      </Link>
                      <Link 
                        to="/tuttologo-lillo" 
                        className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors whitespace-nowrap"
                      >
                        Tuttologo - Lillo
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="sm" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all duration-200 hover:shadow-xl md:size-lg whitespace-nowrap"
                  >
                    <Plus className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">Aggiungi Neologismo</span>
                    <span className="sm:hidden">Aggiungi</span>
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
        </div>

        {/* Featured Neologism - Hidden on small mobile, compact on medium mobile */}
        <div className="container mx-auto px-4 py-3 md:py-6 hidden sm:block">
          {displayedNeologism && (
            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl border-0">
              <CardHeader className="pb-2 md:pb-6">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
                    {displayedNeologism.name}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-white/20 text-white text-xs md:text-sm">
                    {displayedNeologism.categoria}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p 
                  className="text-sm md:text-lg leading-relaxed opacity-95 cursor-pointer hover:opacity-100 transition-opacity"
                  onClick={toggleDescription}
                >
                  {getTruncatedDescription(displayedNeologism.definizione)}
                  {displayedNeologism.definizione.length > 150 && (
                    <span className="block mt-2 text-xs md:text-sm opacity-75 hover:opacity-100">
                      {isDescriptionExpanded ? "Clicca per nascondere" : "Clicca per leggere tutto"}
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Search and Filter Controls */}
        <div className="container mx-auto px-4 py-3 md:py-6">
          <h2 className="text-lg md:text-2xl font-bold text-slate-800 mb-2 md:mb-4">Esplora i Neologismi</h2>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Cerca neologismi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-10 md:h-12 text-sm md:text-lg border-slate-300 focus:border-indigo-500"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-64 h-10 md:h-12 text-sm md:text-lg border-slate-300">
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
                        Clicca per visualizzare in evidenza
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
    </div>
  );
};

export default Index;
