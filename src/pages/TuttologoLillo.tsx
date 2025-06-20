
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TuttologoLillo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Torna ai Neologismi
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-4xl font-bold mb-2">
              Tuttologo
            </CardTitle>
            <p className="text-xl opacity-90">Lillo</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p className="mb-6">
                Greg ed io conosciamo Carlo dalla metà degli anni 90, ovvero da quando suonavamo come 
                "Latte e i suoi derivati" all'Acquofono, il suo locale di Fiumicino che rifletteva perfettamente la 
                sua personalità, ovvero: amabilmente fuori di testa.
              </p>
              
              <p className="mb-6">
                Carlo ha un talento assoluto per il "demenziale", una corrente umoristica che con 
                Greg abbiamo qua e là frequentato ma che in Carlo raggiunge delle vette molto alte.
              </p>
              
              <p className="mb-6">
                Nelle serate all'Acquofono poteva succedere di tutto: dal lancio degli ortaggi alla band di 
                Carlo, che lui stesso metteva a disposizione, alle assurde rivisitazioni musicali di generi o artisti 
                famosi (Carlo è anche un superbo pianista). Insomma, un locale dove ci trovavamo a nostro 
                agio e dove abbiamo passato delle serate indimenticabili.
              </p>
              
              <p className="mb-0">
                Quando abbiamo creato, ormai moltissimi anni fa, la nostra trasmissione radiofonica "610" 
                non potevamo non ricordarci della creatività demenziale e surreale di Carlo D'Alatri che 
                ormai è una colonna portante del nostro programma.
              </p>
              
              <p className="text-right mt-8 text-xl font-bold text-indigo-600">
                Lillo
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TuttologoLillo;
