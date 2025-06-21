
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Search, Menu, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  onAddNeologism: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  onAddNeologism
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="p-2">
          <Menu className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          {/* Navigation Links */}
          <div className="space-y-2">
            <Link 
              to="/prologo-max-tortora" 
              className="block text-indigo-600 hover:text-indigo-800 hover:underline transition-colors py-2"
            >
              Prologo - Max Tortora
            </Link>
            <Link 
              to="/tuttologo-lillo" 
              className="block text-indigo-600 hover:text-indigo-800 hover:underline transition-colors py-2"
            >
              Tuttologo - Lillo
            </Link>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Cerca neologismi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full">
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
          
          {/* Add Button */}
          <Button 
            onClick={onAddNeologism}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Aggiungi Neologismo
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
