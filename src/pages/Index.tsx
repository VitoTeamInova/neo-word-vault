
import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Plus } from "lucide-react";
import AddNeologismForm from "@/components/AddNeologismForm";
import NeologismCard from "@/components/NeologismCard";

const sampleNeologisms = [
  {
    id: 1,
    name: "♦ BOFFOLOTTO",
    categoria: "teatrini quotidiani",
    definizione: "regalare un oggetto ricevuto in regalo spacciandolo per nuovo. Ce lo avevano donato a Natale, ma non lo abbiamo mai utilizzato. La casa, già gonfia di cose inservibili, con i suoi pochi spazi residui ne farebbe volentieri a meno. Finisce così solo per dare fastidio, accantonato nel limbo delle inutilerie, insieme a bollitori dell'acqua, spremiagrumi, e porta -incensi, fino a quell'inaspettato giorno che il destino lo promuove a nuova gloria. Spolverato e messo a nuovo, incar tocciato nella nuova disonesta confezione, la meno sospetta possibile, con tanto di fiocchetto, è ora pronto per esser rifilato. come una falsa banconota, al festeggiato di turno. Fare un boffolotto vuol dire liberare spazio nella propria casa, risparmiare tempo e soldi, in nome dell'eco-sostenibilità, del riciclo e di un po' di sana taccagneria.",
    status: "Ready"
  },
  {
    id: 2,
    name: "♦ BUBUFÙ",
    categoria: "teatrini quotidiani",
    definizione: "aspettare ad aprire la porta di casa perché si è sentito aprire quella del dirimpettaio. 28 Il pianerottolo è il teatro più piccolo del mondo e gli attori non hanno sempre voglia di recitare. Capita che dai casalinghi camerini privati, retro - porte, corridoi e occhiolini spia, proprio nel momento di uscire, con la mano sulla maniglia, ci arrivi - rimbombante di echi condominiali - il suono inconfondibile della porta che sta aprendo il nostro dirimpettaio. Che la giornata che ci aspetta sia una commedia più o meno sgradevole da interpretare va bene, ma questo prologo inutile si può rimandare e aspet tare che il vicino abbia compiuto tutti i riti dell'uscitore, fin quando sbattimenti, calpestii e porte di ascensori lascino spazio al silenzio completo. Solo allora si può finalmente uscire in pace, senza incontrare il nostro pur amato (si spera) vicino d irimpettaio: abbiamo eseguito il bubufù, che può anche essere reciproco, a doppia mandata, in perfetta sincronia di tempi e sentimenti, o addirittura a catena, a seconda di quante porte ci sono nel pianerottolo. Anche gli altri del resto hanno diritto a non volerci incontrare.",
    status: "Ready"
  },
  {
    id: 3,
    name: "♦ BUBUSSO",
    categoria: "antropologia del malessere",
    definizione: "spiacevole sensazione a forma di uovo nero che cammina nello stomaco, provocata dalla totale mancanza di voglia di fare una cosa. C'è da fare una telefonata difficile, che sarebbe meglio cavarsi un dente, ma potrebbe essere una 29 ringhiera da verniciare o un cambio di stagione degli armadi, che ci coglie all'improvviso. Le cause del bubusso sono infinite, onnipresenti, l'inevitabilità è la loro caratteristica che ne disegna la perfidia e ne amplifica la portanza. Il bubusso uno dei più temibili nemici della nostra anima - sa gonfiarsi e crescere soprattutto quando rimandiamo il da farsi, fino a trasformarsi in mostro, ancor più enorme e doloroso dello stesso semplice temuto dovere.",
    status: "Ready"
  },
  {
    id: 4,
    name: "♦ BUFACCHIO",
    categoria: "psicologia degli oggetti",
    definizione: "oggetto smarrito e lungamente ricercato che riappare soltanto quando se ne ricompra un altro uguale. Gli oggetti sono vendicativi per natura e fanno esercizio, specialmente contro la razza umana della più spietata crudeltà. Consapevoli dell'abilità che hanno nello scomparire e riapparire quando vogliono, torturano con bizzarre marachelle e diabolici giochi di prestigio. Il bufacchio sa di essere importante, si mimetizza in casa per un certo periodo, provocando con la sua sparizione disagi e tribolazioni tali da costringere a comprare un altro gemello che lo possa sostituire. A questo punto il bufacchio gonfia il suo orgoglio e monta la sua ira, ingelosito tra l'altro dal nuovo 30 rivale appena arrivato, specialmente se di migliore qualità o di più recente costruzione. Detesta infatti sentirsi obsoleto e spesso sa vendicarsi in modo ancor più crudele e imprevedibile. Nel migliore dei casi riappare improvvisamente, raggiungendo con un orgasmo quantistico il suo vero scopo: infastidire e far spendere soldi inutilmente.",
    status: "Ready"
  },
  {
    id: 5,
    name: "♦ CARABOTTO",
    categoria: "teatrini quotidiani",
    definizione: "tosse simulata per mimetizzare rumori indiscreti. Con il vecchio trucco del carabotto l'uomo protegge e custodisce quel piccolo segreto legato alle melodie dell'intestino che solitamente non possono essere eseguite pubblicamente. Non potendo spengere questo impeto creativo, inventa un playback, un doppiaggio cinematografico e sincronizza con il colpo di tosse ad alto volume il si bemolle che viene dal basso. C'è uno strano scarico di responsabilità dall'impianto digerente a quello respiratorio, come se quest'ultimo avesse me no dignità da difendere da poter essere tranquillamente calunniato. La pratica del carabotto consegue sempre i risultati prefissati, ma va usata con cautela e non è comunque consigliabile in ambienti piccoli e chiusi, dove le onde sonore non sono gli unici fenomeni a propagarsi.",
    status: "Ready"
  },
  {
    id: 6,
    name: "♦ CASCOPETROBE",
    categoria: "creature rarissime",
    definizione: "casellante autostradale che ha voglia di chiacchierare. 34",
    status: "Ready"
  },
  {
    id: 7,
    name: "♦ CASTROFENIA",
    categoria: "antropologia del malessere",
    definizione: "acuta noia da messa domenicale. Siamo a messa, per accompagnare qualcuno, per abitudine o per tradizione, siamo in prima fila, genuflessi, fervidi fedeli inzuppati di speranza, siamo vecchi, bambini, neonati innocenti, pregatori per hobby (della domenica) o magari veri e sinceri credenti, ricchi di pro fonda spiritualità. C'è posto per tutti a messa e le braccia aperte di Santa Romana Chiesa avvolgono anche chi non crede o crede pochissimo. Il problema è scappare. La castrofenia non fa certo distinzioni, parla tutte le lingue, specialmente il latino, e a ttacca nel mentre si cambia, da inginocchiati a in piedi a inginocchiati di nuovo. Un'eco da mal di tomba risuona nei ribattuti delle voci sacerdotali dalle pronunce afro -ispano- filippine così sgradevolmente ignote da favorire i miraggi e i piani di evasione dei prigionieri in sala. Le chitarre dei ragazzi della parrocchia sciagattano le corde, si cantano - si fa per dire - le solite immagini zeppe di agnelli, sorgenti e mense del signore. I cori, informi, senza pietà si abbattono mai intonati, penetrando o recchie e mura create dai nuovi architetti moderni apposta per favorire la depressione, come non bastassero già i cuori sbudellati e perforati da frecce, le teste mozzate, 35 gli occhi dei poveri santi cavati e serviti come ostriche. Per quieto vivere si segu e il testo rispondendo tutti insieme, ovviamente fuori tempo. Qualcuno si scambia il segno di pace, tanto per non tirare fuori la pistola. Passano speranzosi i questuanti in cerca di soldi per gli orfanelli e gli habitué dell'ostia, con il numeretto in man o, stanno già in fila per la comunione aspettando che il prete finisca di lucidare meticolosamente l'ultimo pezzo di calice, bere vino, rilucidare e ribere vino. Così tra il puzzo di cera e la fame di mezzogiorno scorrono lentissime le lancette dell'orologio anch'esso azzoppato dalla castrofenia. Qualche gruppetto di sovversivi (vedi pestilofrobi) affetti da attacchi acuti di sofferenza ha coraggiosamente tolto il disturbo e segue da fuori la porta d'entrata il susseguirsi delle parabole, ma da lì a fumarsi una sigaretta e parlare del derby il passo è breve: hanno comunque salvato faccia e coscienza perché non sono fuggiti al bar, da uomini di buona volontà sono rimasti tra il dentro e il fuori, legati da un filo immaginario all'altare e potranno dire a gran voce che erano lì, anche quella domenica.",
    status: "Ready"
  },
  {
    id: 8,
    name: "♦ CATACRIMITOMORFISMO",
    categoria: "frustrazioni digitali",
    definizione: "frequente difficoltà a distinguere lo zero dalla lettera "O" quando si digita una password. 36",
    status: "Ready"
  },
  {
    id: 9,
    name: "♦ CATARACCHIA",
    categoria: "neo-oggettistica",
    definizione: "parte incrostata e bruciacchiata delle patate al forno.",
    status: "Ready"
  },
  {
    id: 10,
    name: "♦ CATENA DI SAN LUIGI",
    categoria: "sorprendenti normalità",
    definizione: "catena sequenziale di azionamenti dello schizzo del tergicristallo. Tipico delle code cittadine o autostradali, più o meno lente: il sole è un po' basso e infastidisce la guida mettendo in evidenza un vetro sporco e impolverato. Niente di più giusto che azionare l'acqua dei tergicristalli per fare pulizia e vederci chiaro, ma complice un po' di vento, il getto vaporizzato finisce per inzuppare il vetro della macchina appena lavata con i vetri pulitissimi che sta immediatamente dietro, la quale trovandosi ora col vetro nuovamente sporco aziona l'acqua dei tergicristalli, che finisce per sporcare l'altra macchina che sta a ncora dietro. La catena di San Luigi è un fenomeno che può coprire distanze inimmaginabili in una processione infinita di inzuppamenti. 37",
    status: "Ready"
  },
  {
    id: 11,
    name: "♦ CEFORO DA CONTRATTEMPO",
    categoria: "sorprendenti normalità",
    definizione: "percezione di positività in una circostanza spiacevole. Quando una negatività si abbatte sui nostri percorsi quotidiani, quando sfuggono, slittano o si frantumano appuntamenti con la vita, spariscono oggetti, persone, speranze, piccole e grandi certezze, dal dolore che arriva - se lo sappiamo guardare bene - filtra sempre un raggio di luce, un'apertura ad uno spazio inaspettato. È il nuovo capitale di energia che il destino ci regala. Sbagliare strada, perdersi, significa toccare nuove possibilità: lo capiamo sempre troppo tardi, ma è sempre co sì, basta aspettare. Da un telefonino smarrito si accende la fantasia che fa pregustare l'acquisto dell'ultimo modello, e con un po' più di saggezza possiamo godere dell'oasi di silenzio e di pace che solo disconnessi si può trovare. Autobus che non passan o, rapporti sentimentali che si chiudono, stop obbligati, lavori o persone perduti, sono finestre: basta aprirle per assaporare il gusto inaspettato del ceforo da contrattempo.",
    status: "Ready"
  }
];

const Index = () => {
  const [neologisms, setNeologisms] = useState(sampleNeologisms);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Get unique categories
  const categories = Array.from(new Set(neologisms.map(n => n.categoria))).sort();

  // Get random neologism for featured display
  const randomNeologism = useMemo(() => {
    const readyNeologisms = neologisms.filter(n => n.status === "Ready");
    return readyNeologisms[Math.floor(Math.random() * readyNeologisms.length)];
  }, [neologisms]);

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
      id: Date.now(),
      status: "Draft"
    };
    setNeologisms([...neologisms, neologismWithId]);
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Neologism */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Neologismo in Evidenza</h2>
            {randomNeologism && (
              <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-3xl font-bold mb-2">
                      {randomNeologism.name}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {randomNeologism.categoria}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed opacity-95">
                    {randomNeologism.definizione}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Search and Filter */}
            <div className="mt-8 mb-6">
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

            {/* Neologisms List */}
            <div className="space-y-4">
              {filteredNeologisms.map((neologism) => (
                <NeologismCard key={neologism.id} neologism={neologism} />
              ))}
              {filteredNeologisms.length === 0 && (
                <Card className="p-8 text-center">
                  <p className="text-slate-500 text-lg">
                    Nessun neologismo trovato con i criteri di ricerca attuali.
                  </p>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
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

            <Card className="mt-6 bg-slate-50 border-slate-200">
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
        </div>
      </div>
    </div>
  );
};

export default Index;
