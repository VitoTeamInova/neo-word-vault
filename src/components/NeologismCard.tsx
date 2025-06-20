
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Neologism {
  id: number;
  name: string;
  categoria: string;
  definizione: string;
  status: string;
}

interface NeologismCardProps {
  neologism: Neologism;
}

const NeologismCard: React.FC<NeologismCardProps> = ({ neologism }) => {
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
    <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-200 border-slate-200 hover:border-indigo-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-bold text-slate-800 leading-tight">
            {neologism.name}
          </CardTitle>
          <div className="flex flex-col gap-2 items-end">
            <Badge variant="outline" className="text-indigo-600 border-indigo-300 whitespace-nowrap">
              {neologism.categoria}
            </Badge>
            <Badge className={`${getStatusColor(neologism.status)} whitespace-nowrap`}>
              {neologism.status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 leading-relaxed">
          {neologism.definizione.length > 300 
            ? `${neologism.definizione.substring(0, 300)}...` 
            : neologism.definizione
          }
        </p>
      </CardContent>
    </Card>
  );
};

export default NeologismCard;
