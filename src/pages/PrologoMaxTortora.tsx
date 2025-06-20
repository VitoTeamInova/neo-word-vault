
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrologoMaxTortora = () => {
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
                className="w-24 h-24 rounded-lg shadow-lg"
              />
            </div>
            <CardTitle className="text-4xl font-bold mb-2">
              Prologo
            </CardTitle>
            <p className="text-xl opacity-90">Max Tortora</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p className="mb-6">
                Il mio amico Carlo D'Alatri mi chiede di scrivere una piccola prefazione al suo libro. Lo 
                faccio molto volentieri dopo aver letto questa sua ultima e divertente creazione. Carlo D'Alatri si 
                muove nello spettacolo in maniera trasversale con una semplicità e un disincanto propri di chi 
                agisce nell'arte senza un secondo fine per il gusto di esprimersi e di assecondare il talento che oggi 
                gli chiede di suonare uno strumento e domani di inventare un dizionario di nuove parole.
              </p>
              
              <p className="mb-6">
                Sono stato sempre un grande estimatore di Achille Campanile, e Carlo me lo ricorda molto 
                con le sue invenzioni iperboliche, tanto che mi fa tirar fuori un termine che forse da troppi anni è 
                abbandonato e sottovalutato, quello di "umorista". Si, mi permetto di dire che Carlo è un umorista. Anzi è anche un umorista perché è tante altre cose. È un musicista, uno scrittore, un inventore spiazzante di fatti, situazioni, personaggi, battute, che oggi per esprimersi 
                necessitano di un dizionario, domani di un racconto, e dopodomani di una canzone di cui cura sia il testo che la musica. Io che conosco le molteplici forme in cui Carlo si esprime so che egli possiede il dono di essere depositario di una produzione di idee raffinatissime e velocissime mai scontate, mai banali, mai costruite apposta per ottenere un risultato o una reazione. Insomma idee pure e viscerali scevre del secondo fine di ottenere una qualsivoglia contropartita. Quando 
                parliamo del più e del meno ogni tanto mi tira fuori qualcosa di nuovo ed io dentro di me spero che ne tiri fuori un libro, un racconto, una gag, una canzone.
              </p>
              
              <p className="mb-6">
                Qualche giorno fa gli facevo notare che le sue cose possono essere apprezzate da un pubblico 
                assolutamente eterogeneo esattamente come un piatto di spaghetti col pomodoro. Trovatemi una 
                età adatta ad apprezzare uno spaghetto al pomodoro. Ecco secondo me lui è così. 
                L'osservazione del mondo circostante attraverso la lente dell'ironia e il filtro della leggerezza 
                senza mai tradire la verità denotano uno spirito critico fortissimo sempre vigile che si serve di tutti 
                i mezzi che l'arte della comunicazione gli ha messo a disposizione.
              </p>
              
              <p className="mb-0 font-medium">
                Allora mi resta solo di augurare una buona lettura e sono sicuro come è successo anche a me 
                che avete appena trovato un nuovo amico.
              </p>
              
              <p className="text-right mt-8 text-xl font-bold text-indigo-600">
                Max Tortora
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrologoMaxTortora;
