
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Neologism {
  id: number;
  name: string;
  categoria: string;
  definizione: string;
  status: string;
}

interface NeologismDetailDialogProps {
  neologism: Neologism | null;
  isOpen: boolean;
  onClose: () => void;
}

const NeologismDetailDialog: React.FC<NeologismDetailDialogProps> = ({
  neologism,
  isOpen,
  onClose
}) => {
  if (!neologism) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex justify-between items-start gap-4">
            <DialogTitle className="text-2xl font-bold text-slate-800 leading-tight">
              {neologism.name}
            </DialogTitle>
            <div className="flex flex-col gap-2 items-end flex-shrink-0">
              <Badge variant="outline" className="text-indigo-600 border-indigo-300 whitespace-nowrap">
                {neologism.categoria}
              </Badge>
              <Badge className={`${getStatusColor(neologism.status)} whitespace-nowrap`}>
                {neologism.status}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed text-lg">
              {neologism.definizione}
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default NeologismDetailDialog;
