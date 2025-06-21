
import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  onRandomNeologism?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  selectedCategory,
  setSelectedCategory,
  categories,
  onRandomNeologism
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
            {onRandomNeologism && (
              <button
                onClick={onRandomNeologism}
                className="block text-indigo-600 hover:text-indigo-800 hover:underline transition-colors py-2 text-left"
              >
                Uno a Caso
              </button>
            )}
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
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
