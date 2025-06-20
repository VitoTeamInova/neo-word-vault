
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
          <CardHeader className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg relative">
            {/* Logo in top left corner */}
            <div className="absolute top-4 left-4">
              <img 
                src="/lovable-uploads/9b659a1c-cbfc-401e-a9d8-8e78ee956a66.png" 
                alt="Carlo D'Alatri Logo" 
                className="w-16 h-16 rounded-lg shadow-lg"
              />
            </div>
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
              
              <p className="mb-6">
                Quando abbiamo creato, ormai moltissimi anni fa, la nostra trasmissione radiofonica "610" 
                non potevamo non ricordarci della creatività demenziale e surreale di Carlo D'Alatri che 
                ormai è una colonna portante del nostro programma.
              </p>

              <p className="mb-6">
                Carlo è il vero "Tuttologo" di 610, mantenendo rigorosamente la stessa voce (cosa 
                che mi diverte tantissimo) ha interpretato e continuerà ad interpretare tantissimi assurdi 
                personaggi per 610, dal cantante che utilizza gli spazi musicali e non cantati delle canzoni per 
                infilarci brevi spot pubblicitari, all'inventore di invenzioni inutili tipo l'ombrello senza stoffa per 
                farsi vedere dall'alto, dal cantautore bipolare che passa da una strofa triste ad una allegra 
                nell'ambito dello stesso brano al compositore di inni su commissione: vuoi un inno al tuo scooter? 
                Lui te lo scrive. Fino ad arrivare a uno dei miei preferiti che è l'inventore di neologismi. Credo 
                che questo sia il primo caso di un'idea completamente fuori di testa che in realtà 
                potrebbe avere una grande utilità sociale.
              </p>

              <p className="mb-6">
                Come chiamare l'atto di seguire una persona con le chiavi in mano nei pressi di un parcheggio 
                nella speranza che esca lasciando il posto libero per la tua auto? Bè, Carlo D'Alatri è in grado di 
                trasformare questa lunga azione non descrivibile se non spiegandola così come l'ho scritta, in un 
                unico e inequivocabile verbo: archifittare!
              </p>

              <p className="mb-0 font-medium">
                Geniale, divertente e… utile!!!!!!!!!!!
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
