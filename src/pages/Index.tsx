
import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      {/* Fixed Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 flex-shrink-0">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                Neologismi di Carlo D'Alatri
              </h1>
              <p className="text-slate-600 text-lg">
                Una collezione di parole per descrivere l'indescrivibile
              </p>
            </div>
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
      </header>

      {/* Fixed Featured Neologism */}
      <div className="bg-white/50 border-b border-slate-200 flex-shrink-0">
        <div className="container mx-auto px-4 py-6">
          {displayedNeologism && (
            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl border-0">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-3xl font-bold mb-2">
                    {displayedNeologism.name}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {displayedNeologism.categoria}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p 
                  className="text-lg leading-relaxed opacity-95 cursor-pointer hover:opacity-100 transition-opacity"
                  onClick={toggleDescription}
                >
                  {getTruncatedDescription(displayedNeologism.definizione)}
                  {displayedNeologism.definizione.length > 150 && (
                    <span className="block mt-2 text-sm opacity-75 hover:opacity-100">
                      {isDescriptionExpanded ? "Clicca per nascondere" : "Clicca per leggere tutto"}
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Scrollable Main Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="container mx-auto px-4 py-8 h-full">
          <div className="grid lg:grid-cols-3 gap-8 h-full">
            {/* Scrollable Neologisms List */}
            <div className="lg:col-span-2 flex flex-col h-full">
              {/* Search and Filter */}
              <div className="mb-6 flex-shrink-0">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Esplora i Neologismi</h2>
                <div className="flex flex-col md:flex-row gap-4">
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
                    <SelectTrigger className="w-full md:w-64 h-12 text-lg border-slate-300">
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

              {/* Scrollable Neologisms */}
              <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-4">
                    {filteredNeologisms.map((neologism) => (
                      <div key={neologism.id} onClick={() => handleNeologismClick(neologism)}>
                        <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-200 border-slate-200 hover:border-indigo-300 cursor-pointer hover:scale-[1.02]">
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start gap-4">
                              <CardTitle className="text-xl font-bold text-slate-800 leading-tight">
                                {neologism.name}
                              </CardTitle>
                              <div className="flex flex-col gap-2 items-end">
                                <Badge variant="outline" className="text-indigo-600 border-indigo-300 whitespace-nowrap">
                                  {neologism.categoria}
                                </Badge>
                                <Badge className="bg-green-100 text-green-800 border-green-300 whitespace-nowrap">
                                  {neologism.status}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-slate-600 leading-relaxed">
                              {getSummaryDescription(neologism.definizione)}
                            </p>
                            <p className="text-sm text-indigo-600 mt-2 opacity-70">
                              Clicca per visualizzare in evidenza
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                    {filteredNeologisms.length === 0 && (
                      <Card className="p-8 text-center">
                        <p className="text-slate-500 text-lg">
                          Nessun neologismo trovato con i criteri di ricerca attuali.
                        </p>
                      </Card>
                    )}
                  </div>
                </ScrollArea>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 flex flex-col h-full overflow-hidden">
              <ScrollArea className="h-full">
                <div className="space-y-6 pr-4">
                  <Card className="bg-white/70 backdrop-blur-sm shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-800">Categorie</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {categories.map((category) => {
                          const count = neologisms.filter(n => n.categoria === category && n.status === "Ready").length;
                          return (
                            <div 
                              key={category}
                              className="flex justify-between items-center p-3 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors"
                              onClick={() => setSelectedCategory(category)}
                            >
                              <span className="text-slate-700 font-medium">{category}</span>
                              <Badge variant="outline" className="text-indigo-600 border-indigo-300">
                                {count}
                              </Badge>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-50 border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-800">Statistiche</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Totale Neologismi:</span>
                          <span className="font-bold text-indigo-600">{neologisms.filter(n => n.status === "Ready").length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Categorie:</span>
                          <span className="font-bold text-indigo-600">{categories.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Bozze:</span>
                          <span className="font-bold text-orange-600">{neologisms.filter(n => n.status === "Draft").length}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
