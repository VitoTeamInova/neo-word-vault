
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface AddNeologismFormProps {
  onSubmit: (neologism: any) => void;
  existingCategories: string[];
}

const AddNeologismForm: React.FC<AddNeologismFormProps> = ({ onSubmit, existingCategories }) => {
  const [formData, setFormData] = useState({
    name: '',
    categoria: '',
    definizione: '',
    image: '',
    status: 'Draft'
  });
  const [newCategory, setNewCategory] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Errore",
        description: "Il nome del neologismo è obbligatorio",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.categoria.trim()) {
      toast({
        title: "Errore",
        description: "La categoria è obbligatoria",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.definizione.trim()) {
      toast({
        title: "Errore",
        description: "La definizione è obbligatoria",
        variant: "destructive"
      });
      return;
    }

    onSubmit(formData);
    
    toast({
      title: "Successo!",
      description: "Neologismo aggiunto con successo",
    });

    // Reset form
    setFormData({
      name: '',
      categoria: '',
      definizione: '',
      image: '',
      status: 'Draft'
    });
  };

  const handleAddNewCategory = () => {
    if (newCategory.trim() && !existingCategories.includes(newCategory.trim())) {
      setFormData({ ...formData, categoria: newCategory.trim() });
      setNewCategory('');
      setIsAddingCategory(false);
      toast({
        title: "Categoria aggiunta",
        description: `La categoria "${newCategory.trim()}" è stata aggiunta`,
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-green-100 text-green-800 border-green-300";
      case "Draft":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-slate-700">
            Neologismo *
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Inserisci il nome del neologismo"
            className="border-slate-300 focus:border-indigo-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="categoria" className="text-sm font-medium text-slate-700">
            Categoria *
          </Label>
          {!isAddingCategory ? (
            <div className="flex gap-2">
              <Select value={formData.categoria} onValueChange={(value) => {
                if (value === "add-new") {
                  setIsAddingCategory(true);
                } else {
                  setFormData({ ...formData, categoria: value });
                }
              }}>
                <SelectTrigger className="border-slate-300 focus:border-indigo-500">
                  <SelectValue placeholder="Seleziona una categoria" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200">
                  {existingCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                  <SelectItem value="add-new" className="text-indigo-600 font-medium">
                    + Aggiungi nuova categoria
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="flex gap-2">
              <Input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Nome della nuova categoria"
                className="border-slate-300 focus:border-indigo-500"
              />
              <Button
                type="button"
                onClick={handleAddNewCategory}
                variant="outline"
                size="sm"
              >
                Aggiungi
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setIsAddingCategory(false);
                  setNewCategory('');
                }}
                variant="outline"
                size="sm"
              >
                Annulla
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="definizione" className="text-sm font-medium text-slate-700">
          Definizione *
        </Label>
        <Textarea
          id="definizione"
          value={formData.definizione}
          onChange={(e) => setFormData({ ...formData, definizione: e.target.value })}
          placeholder="Descrivi il significato del neologismo..."
          rows={6}
          className="border-slate-300 focus:border-indigo-500 resize-none"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image" className="text-sm font-medium text-slate-700">
          Immagine (opzionale)
        </Label>
        <Input
          id="image"
          type="url"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="URL dell'immagine (opzionale)"
          className="border-slate-300 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status" className="text-sm font-medium text-slate-700">
          Status
        </Label>
        <div className="flex items-center gap-4">
          <Select 
            value={formData.status} 
            onValueChange={(value) => setFormData({ ...formData, status: value })}
          >
            <SelectTrigger className="w-48 border-slate-300 focus:border-indigo-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-slate-200">
              <SelectItem value="Draft">Draft</SelectItem>
              <SelectItem value="Ready">Ready</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Badge className={getStatusColor(formData.status)}>
            {formData.status}
          </Badge>
        </div>
      </div>

      {/* Preview Card */}
      {(formData.name || formData.categoria || formData.definizione) && (
        <Card className="bg-slate-50 border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg text-slate-800">Anteprima</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {formData.name && (
                <h3 className="text-xl font-bold text-slate-800">{formData.name}</h3>
              )}
              {formData.categoria && (
                <Badge variant="outline" className="text-indigo-600 border-indigo-300">
                  {formData.categoria}
                </Badge>
              )}
              {formData.definizione && (
                <p className="text-slate-600 leading-relaxed">{formData.definizione}</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end gap-4 pt-4 border-t border-slate-200">
        <Button type="submit" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Salva Neologismo
        </Button>
      </div>
    </form>
  );
};

export default AddNeologismForm;
