
export interface Neologism {
  id: number;
  name: string;
  categoria: string;
  definizione: string;
  status: string;
}

// Raw data transformation function
const transformNeologismData = (rawData: any[]): Neologism[] => {
  return rawData.map((item, index) => ({
    id: index + 1,
    name: item.name,
    categoria: item.categoria ? item.categoria.replace(/\.$/, '') : 'varie',
    definizione: item.definizione,
    status: "Ready"
  }));
};

// Combined raw data from both batches
const rawNeologismsData = [
  {
    "name": "♦ BOFFOLOTTO",
    "categoria": "teatrini quotidiani.",
    "definizione": "regalare un oggetto ricevuto in regalo spacciandolo per nuovo. Ce lo avevamo donato a Natale, ma non lo abbiamo mai utilizzato. La casa, già gonfia di cose inservibili, con i suoi pochi spazi residui ne farebbe volentieri a meno. Finisce così solo per dare fastidio, accantonato nel limbo delle inutilerie, insieme a bollitori dell'acqua, spremiagrumi, e porta -incensi, fino a quell'inaspettato giorno che il destino lo promuove a nuova gloria. Spolverato e messo a nuovo, incar tocciato nella nuova disonesta confezione, la meno sospetta possibile, con tanto di fiocchetto, è ora pronto per esser rifilato. come una falsa banconota, al festeggiato di turno. Fare un boffolotto vuol dire liberare spazio nella propria casa, risparmiare tempo e soldi, in nome dell'eco-sostenibilità, del riciclo e di un po' di sana taccagneria."
  },
  {
    "name": "♦ BUBUFÙ",
    "categoria": "teatrini quotidiani.",
    "definizione": "aspettare ad aprire la porta di casa perché si è sentito aprire quella del dirimpettaio. 28 Il pianerottolo è il teatro più piccolo del mondo e gli attori non hanno sempre voglia di recitare. Capita che dai casalinghi camerini privati, retro - porte, corridoi e occhiolini spia, proprio nel momento di uscire, con la mano sulla maniglia, ci arrivi - rimbombante di echi condominiali - il suono inconfondibile della porta che sta aprendo il nostro dirimpettaio. Che la giornata che ci aspetta sia una commedia più o meno sgradevole da interpretare va bene, ma questo prologo inutile si può rimandare e aspet tare che il vicino abbia compiuto tutti i riti dell'uscitore, fin quando sbattimenti, calpestii e porte di ascensori lascino spazio al silenzio completo. Solo allora si può finalmente uscire in pace, senza incontrare il nostro pur amato (si spera) vicino d irimpettaio: abbiamo eseguito il bubufù, che può anche essere reciproco, a doppia mandata, in perfetta sincronia di tempi e sentimenti, o addirittura a catena, a seconda di quante porte ci sono nel pianerottolo. Anche gli altri del resto hanno diritto a non volerci incontrare."
  },
  {
    "name": "♦ BUBUSSO",
    "categoria": "antropologia del malessere.",
    "definizione": "spiacevole sensazione a forma di uovo nero che cammina nello stomaco, provocata dalla totale mancanza di voglia di fare una cosa. C'è da fare una telefonata difficile, che sarebbe meglio cavarsi un dente, ma potrebbe essere una 29 ringhiera da verniciare o un cambio di stagione degli armadi, che ci coglie all'improvviso. Le cause del bubusso sono infinite, onnipresenti, l'inevitabilità è la loro caratteristica che ne disegna la perfidia e ne amplifica la portanza. Il bubusso uno dei più temibili nemici della nostra anima - sa gonfiarsi e crescere soprattutto quando rimandiamo il da farsi, fino a trasformarsi in mostro, ancor più enorme e doloroso dello stesso semplice temuto dovere."
  },
  {
    "name": "♦ BUFACCHIO",
    "categoria": "psicologia degli oggetti.",
    "definizione": "oggetto smarrito e lungamente ricercato che riappare soltanto quando se ne ricompra un altro uguale. Gli oggetti sono vendicativi per natura e fanno esercizio, specialmente contro la razza umana della più spietata crudeltà. Consapevoli dell'abilità che hanno nello scomparire e riapparire quando vogliono, torturano con bizzarre marachelle e diabolici giochi di prestigio. Il bufacchio sa di essere importante, si mimetizza in casa per un certo periodo, provocando con la sua sparizione disagi e tribolazioni tali da costringere a comprare un altro gemello che lo possa sostituire. A questo punto il bufacchio gonfia il suo orgoglio e monta la sua ira, ingelosito tra l'altro dal nuovo 30 rivale appena arrivato, specialmente se di migliore qualità o di più recente costruzione. Detesta infatti sentirsi obsoleto e spesso sa vendicarsi in modo ancor più crudele e imprevedibile. Nel migliore dei casi riappare improvvisamente, raggiungendo con un orgasmo quantistico il suo vero scopo: infastidire e far spendere soldi inutilmente."
  },
  {
    "name": "♦ CARABOTTO",
    "categoria": "teatrini quotidiani.",
    "definizione": "tosse simulata per mimetizzare rumori indiscreti. Con il vecchio trucco del carabotto l'uomo protegge e custodisce quel piccolo segreto legato alle melodie dell'intestino che solitamente non possono essere eseguite pubblicamente. Non potendo spengere questo impeto creativo, inventa un playback, un doppiaggio cinematografico e sincronizza con il colpo di tosse ad alto volume il si bemolle che viene dal basso. C'è uno strano scarico di responsabilità dall'impianto digerente a quello respiratorio, come se quest'ultimo avesse me no dignità da difendere da poter essere tranquillamente calunniato. La pratica del carabotto consegue sempre i risultati prefissati, ma va usata con cautela e non è comunque consigliabile in ambienti piccoli e chiusi, dove le onde sonore non sono gli unici fenomeni a propagarsi."
  },
  {
    "name": "♦ CASCOPETROBE",
    "categoria": "creature rarissime.",
    "definizione": "casellante autostradale che ha voglia di chiacchierare. 34"
  },
  {
    "name": "♦ CASTROFENIA",
    "categoria": "antropologia del malessere.",
    "definizione": "acuta noia da messa domenicale. Siamo a messa, per accompagnare qualcuno, per abitudine o per tradizione, siamo in prima fila, genuflessi, fervidi fedeli inzuppati di speranza, siamo vecchi, bambini, neonati innocenti, pregatori per hobby (della domenica) o magari veri e sinceri credenti, ricchi di pro fonda spiritualità. C'è posto per tutti a messa e le braccia aperte di Santa Romana Chiesa avvolgono anche chi non crede o crede pochissimo. Il problema è scappare. La castrofenia non fa certo distinzioni, parla tutte le lingue, specialmente il latino, e a ttacca nel mentre si cambia, da inginocchiati a in piedi a inginocchiati di nuovo. Un'eco da mal di tomba risuona nei ribattuti delle voci sacerdotali dalle pronunce afro -ispano- filippine così sgradevolmente ignote da favorire i miraggi e i piani di evasione dei prigionieri in sala. Le chitarre dei ragazzi della parrocchia sciagattano le corde, si cantano - si fa per dire - le solite immagini zeppe di agnelli, sorgenti e mense del signore. I cori, informi, senza pietà si abbattono mai intonati, penetrando o recchie e mura create dai nuovi architetti moderni apposta per favorire la depressione, come non bastassero già i cuori sbudellati e perforati da frecce, le teste mozzate, 35 gli occhi dei poveri santi cavati e serviti come ostriche. Per quieto vivere si segu e il testo rispondendo tutti insieme, ovviamente fuori tempo. Qualcuno si scambia il segno di pace, tanto per non tirare fuori la pistola. Passano speranzosi i questuanti in cerca di soldi per gli orfanelli e gli habitué dell'ostia, con il numeretto in man o, stanno già in fila per la comunione aspettando che il prete finisca di lucidare meticolosamente l'ultimo pezzo di calice, bere vino, rilucidare e ribere vino. Così tra il puzzo di cera e la fame di mezzogiorno scorrono lentissime le lancette dell'orologio anch'esso azzoppato dalla castrofenia. Qualche gruppetto di sovversivi (vedi pestilofrobi) affetti da attacchi acuti di sofferenza ha coraggiosamente tolto il disturbo e segue da fuori la porta d'entrata il susseguirsi delle parabole, ma da lì a fumarsi una sigaretta e parlare del derby il passo è breve: hanno comunque salvato faccia e coscienza perché non sono fuggiti al bar, da uomini di buona volontà sono rimasti tra il dentro e il fuori, legati da un filo immaginario all'altare e potranno dire a gran voce che erano lì, anche quella domenica."
  },
  {
    "name": "♦ CATACRIMITOMORFISMO",
    "categoria": "frustrazioni digitali.",
    "definizione": "frequente difficoltà a distinguere lo zero dalla lettera "O" quando si digita una password. 36"
  },
  {
    "name": "♦ CATARACCHIA",
    "categoria": "neo-oggettistica.",
    "definizione": "parte incrostata e bruciacchiata delle patate al forno."
  },
  {
    "name": "♦ CATENA DI SAN LUIGI",
    "categoria": "sorprendenti normalità.",
    "definizione": "catena sequenziale di azionamenti dello schizzo del tergicristallo. Tipico delle code cittadine o autostradali, più o meno lente: il sole è un po' basso e infastidisce la guida mettendo in evidenza un vetro sporco e impolverato. Niente di più giusto che azionare l'acqua dei tergicristalli per fare pulizia e vederci chiaro, ma complice un po' di vento, il getto vaporizzato finisce per inzuppare il vetro della macchina appena lavata con i vetri pulitissimi che sta immediatamente dietro, la quale trovandosi ora col vetro nuovamente sporco aziona l'acqua dei tergicristalli, che finisce per sporcare l'altra macchina che sta a ncora dietro. La catena di San Luigi è un fenomeno che può coprire distanze inimmaginabili in una processione infinita di inzuppamenti. 37"
  },
  {
    "name": "♦ CEFORO DA CONTRATTEMPO",
    "categoria": "sorprendenti normalità.",
    "definizione": "percezione di positività in una circostanza spiacevole. Quando una negatività si abbatte sui nostri percorsi quotidiani, quando sfuggono, slittano o si frantumano appuntamenti con la vita, spariscono oggetti, persone, speranze, piccole e grandi certezze, dal dolore che arriva - se lo sappiamo guardare bene - filtra sempre un raggio di luce, un'apertura ad uno spazio inaspettato. È il nuovo capitale di energia che il destino ci regala. Sbagliare strada, perdersi, significa toccare nuove possibilità: lo capiamo sempre troppo tardi, ma è sempre co sì, basta aspettare. Da un telefonino smarrito si accende la fantasia che fa pregustare l'acquisto dell'ultimo modello, e con un po' più di saggezza possiamo godere dell'oasi di silenzio e di pace che solo disconnessi si può trovare. Autobus che non passan o, rapporti sentimentali che si chiudono, stop obbligati, lavori o persone perduti, sono finestre: basta aprirle per assaporare il gusto inaspettato del ceforo da contrattempo."
  },
  {
    "name": "♦ CEFORO LIBRANTE MASCHILE",
    "categoria": "sorprendenti normalità.",
    "definizione": "sensazione di piacevolezza procurata da un breve periodo di assenza del proprio partner. 38 La nostra dolce metà parte per qualche giorno, il distacco è doloroso, pungente, ma non appena ufficializzata la solitudine, passata la piccola tempesta di valigie, abbra cci e raccomandazioni, spunta inaspettato dal salotto un arcobaleno di buonumore che illumina tutta la casa, inaugurando una breve era di mutande libere, briciole sul letto e un'eccitazione primitiva, selvaggia, consumata tra birre e rutti anarchici. È lo stato di ceforo librante. Qualche volta partono distrattamente, come colpi a salve, innocue telefonate a ancor vagheggiate figure a forma di donna, presunte o aspiranti -ex e iniziano le frequenti scorribande in siti poco raccomandabili. Ma attenzione a non confondere: il ceforo librante non è indicazione di una crisi di coppia, la linfa vitale che lo trasporta insieme all'amore ha semplicemente il sapore del comune umano istinto di sopravvivenza."
  },
  {
    "name": "♦ CHIMÙ",
    "categoria": "parcheggiologia.",
    "definizione": "parcheggio a inserimento trasversale e sufficientemente incivile, con ruote sul marciapiede, ricavato tra piccoli spazi rimasti tra due auto parcheggiate in orizzontale. 39"
  },
  {
    "name": "♦ CIRONIA",
    "categoria": "teatrini quotidiani.",
    "definizione": "espressione inebetita del volto umano che finge di aver capito. Non afferrare un concetto, magari per l'ennesima volta, forse semplicissimo, a quanto pare dalle facce degli altri che lo hanno capito al volo, è una pessima immagine di noi stessi che non possiamo rendere pubblica. Quando succede la reazione è immediata: dopo il colpo fulmineo che trafigge l'autostima, parte automatica un'espressione di finta intelligenza, con un mezzo sorriso e gli occhi nel vuoto un po' smarriti, che rivela soltanto l'amara verità di quello che non ha capito niente."
  },
  {
    "name": "♦ CLOCCONE",
    "categoria": "psicologia degli oggetti.",
    "definizione": "bipolarismo delle caldaie a gas. Le infinite beatitudini della doccia bollente si arrestano, improvvisamente cade tagliente ghiaccio liquido sulle spalle e la nebbia fredda invade il bagno. È come svegliarsi da un sonno piacevole e precipitare nella realtà di una caldaia nemica. Come se non bastasse siamo in pieno inverno, completamente zuppi e insaponati . Lanciamo un SOS a qualche familiare scocciato, o forse siamo soli e dobbiamo comunque risolvere il problema. È il passaggio dal paradiso agli inferi; la caldaia anaffettiva, indifferente ai nostri 40 godimenti, fa i capricci: come schizofrenica, o più esattamente bipolare, singhiozza, balbetta, smette di funzionare, poi riprende, ma solo per un attimo, per illuderci; forse vuole fermarsi per sempre. E allora bisognerà farsene una ragione, uscire sconfitti e umidi, cercando di citare il minor numero possibile di santi e divinità."
  },
  {
    "name": "♦ COLPO OSSESSIATICO MASCHILE",
    "categoria": "antropologia del malessere.",
    "definizione": "terrore paralizzante a seguito di una richiesta di chiarimento della propria partner. Nelle problematiche del rapporto di coppia l'uomo secerne una sostanza semplificatrice che la donna non assorbe. Ne conseguono inquietudini tali da indurla a richiedere a gran voce periodiche convocazioni di assemblee straordinarie, con ordine del giorno Dobbiamo parlare . Brividi, nausee, miasmi e paure, anche non giustificate, spezzano quell'era di pace sonnolenta sulla quale l'uomo si cullava. Giunto è il momento, dopo anni di rinvii e scuse, di salire sul ring ed affrontare la realtà: è il colpo ossessiatico maschile, un vortice torturatore che annuncia quella temutissima catastrofe che prima o poi doveva arrivare."
  },
  {
    "name": "♦ DEJASÙ",
    "categoria": "sorprendenti normalità.",
    "definizione": "esatto contrario del déjà -vu, consiste nel vivere un'esperienza nuova avendo la sensazione di non averla mai vissuta. Durante un'esperienza nuova, di qualsiasi tipo, può insorgere il dejasù; potremo trovarci in un luogo per la prima volta e avere improvvisamente la nitida consapevole sensazione di non esserci mai stati, può succedere conoscendo una persona o leggendo un libro, questo libro in particolare, e in questo preciso istante: è un po' come vivere il nuovo con occhi nuovi. Esclamazione tipica del dejasù è: "Ho la netta sensazione di non essere mai stato in questo posto"."
  },
  {
    "name": "♦ DIMINUNGRANDITIVO",
    "categoria": "grammatica italiana.",
    "definizione": "aggettivo ridimensionante. Può succedere di accorgersi di aver esagerato in un complimento e volerlo quindi alleggerire, senza però farne a meno. Con un piccolo tocco al ribasso, possiamo usare il diminungranditivo, sostituendo ad esempio l'aggettivo "bellissimo" con "bellissimino", "magnifico" con "magnifichello", "grandiosa" con "grandiosetta". 44"
  },
  {
    "name": "♦ DONDOGILIO",
    "categoria": "teatrini quotidiani.",
    "definizione": "piccole contorsioni della parte bassa del corpo che si difende dall'urgente bisogno di urinare. Sinuosi accartocciamenti delle gambe, imploranti sguardi, e gentili danze come leggere torture, sono la mimica, la manifestazione corporea dell'impossibilità di liberare una vescica gonfia che vuole essere svuotata. Potrà essere colpa del logorroico che non ci lascia andare e chiude ogn i fessura del discorso in cui poter inserire il nostro congedo; o di un bagno introvabile, potremmo essere in auto in mezzo al traffico bloccato. Non è difficile certo immaginare quante possibili circostanze possono essere causa del dondogilio."
  },
  {
    "name": "♦ EPIFURGO",
    "categoria": "sorprendenti normalità.",
    "definizione": "starnuto abortito. Arriva uno starnuto all'improvviso, probabilmente non siamo soli, con garbo ci allontaniamo da tutti, prendiamo aria nei polmoni, arricciamo il naso che frigge effervescente, ancora non pronti per l'esplosione riprendiamo un altro poco d'aria. La bocca anomala, semiaperta, una piccola concentrazione in apnea per riorganizzare tutte le nostre energie propulsive, siamo pronti per la botta finale, ma il colpo non parte, lo starnuto rimane appeso per aria: era solo un falso allarme un'illusione, un miraggio, come un progetto fallito sul finale, una vittoria che sfuma al traguardo, un epifurgo."
  },
  {
    "name": "♦ EPIFUSCO",
    "categoria": "antropologia del malessere.",
    "definizione": "nevrastenia acuta provocata dall'impossibilità di sorpassare un autoveicolo che va a 30 km orari. Un crampo represso sul piede dell'acceleratore associato a contorsioni gastrico -mentali pre - epilettiche descriv ono la sintomatologia di un epifusco. Questo malessere cresce esponenzialmente con il suo protrarsi nel tempo e peggiora quando non è possibile sorpassare 48 l'autoveicolo che ci sta davanti (vedi bofanto) a causa del traffico o della strada con troppe curve."
  },
  {
    "name": "♦ EPISFORANTE",
    "categoria": "personologia.",
    "definizione": "persona eccessivamente esaltata dalla sua musica preferita. Il tranello in cui ti coinvolge questo tipo di individui è quello di ascoltare insieme un po' di buona musica, scambiare due chiacchere per confrontare gusti, idee e punti di vista. Ma non è possibile. L'episforante si impossessa di ogni tipo di dispositivo audio, monopolizza YouTube e alza a tutto volume solo quando va in play il suo brano. Fa commenti e ansima eccitato, sa a memoria il testo della canzone e lo canta in anticipo per farti vedere quanto lo conosce, esaltandolo con voce da capra malata. Manda in stop e più volte torna indietro per meglio assaporare quel passaggio che trova così sublime. Timidamente fai le tue proposte di ascolto , ma per l'episforante la sua canzone, come la sua musica, è sempre la migliore. Il periodo storico, i suoi ricordi, tutto gli rievoca un'epoca d'oro che tu neanche sogni. Poi si commuove e al ritornello fa versi da sodomizzato in estasi. Purtroppo per lui, quello che ottiene da questa cieca eccitazione è esattamente l'effetto opposto: il nostro odio per quel brano che - sarà anche bello - ma non ne vogliamo più sapere. 49"
  },
  {
    "name": "♦ EPIVALVO",
    "categoria": "creature rarissime.",
    "definizione": "persona che sa aprire un formaggino seguendo le linguette rosse del suo involucro di stagnola."
  },
  {
    "name": "♦ ERGUSTIO",
    "categoria": "antropologia del malessere.",
    "definizione": "stato di malessere e nervosismo tipico, provocato dalla mancata coincidenza tra riduttori e prese di corrente. Quante volte capita di riuscire al primo tentativo ad inserire una spina elettrica in una presa? Può capitare di azzeccare subito il verso giusto di una pennetta usb? Quanto possono minare il nostro buonumore prolunghe, ciabatte, riduttori giapponesi, turchi, mai coincidenti, come puzzle falliti? Invece di accendersi, con entusiasmo, l'elettrodomestico appena uscito dal suo cartone è costretto ad aspettare . C'è sempre un motivo: i riduttori non coincidono, le prese inutilizzabili dietro la cassapanca (vedi erzibufolo) e il nos tro sangue gela alla prospettiva di dover prendere la cassetta degli attrezzi, cercare nuovi riduttori, tentare nuove combinazioni, nuovi collegamenti e fare nuovi danni con annessi probabili incidenti domestici. Proliferano così funesti presagi di 50 terrificanti lavori polverosi, cumuli di calcinacci, sottotracce e muratori dell'Est, che spicconano e fumano in casa alle sette del mattino. È reale tutto questo, non sono solo allucinazioni, per dirla meglio siamo in pieno ergustio."
  },
  {
    "name": "♦ EZIBURFOLO",
    "categoria": "neo-oggettistica.",
    "definizione": "presa di corrente inutilizzabile nascosta da un armadio o in un punto inaccessibile della casa."
  },
  {
    "name": "♦ FALSELLA",
    "categoria": "teatrini quotidiani.",
    "definizione": "finta esclamazione di sorpresa collettiva quando giunge la notizia che un commensale ha già pagato il conto per tutti al ristorante. Il caffè e l'amaro lo hanno preso tutti, le chiacchiere sono finite, sarebbe il momento di chiedere il conto al cameriere, ma uno del gruppo - il più simpatico il p iù generoso o il più qualcos'altro - si alza dalla sedia e con eleganza si dilegua silenzioso verso un punto non ben identificato del ristorante. Sparisce solo per pochi minuti. Tutti hanno capito che è questa la mossa del pagatore, anzi tutti lo speravano , se ne era addirittura vociferato. Il momento, dunque, è delicato e cala un silenzio nel gruppo utile a raccogliere le energie che la recita richiede. Quando il buonuomo ritorna con lo stesso elegante passo con il quale se ne era andato, il Giuda di turno scaglia la prima freccia esclamando: "Allora ragazzi chiediamo il conto!". La banda di complici annuisce, qualcuno sventola un portafoglio che sa di non dover aprire, qualcuno finge di cercare un cameriere (la creatività non manca mai in questi casi) ma è il nostro eroe che chiude la questione con voce rassicurante: "Già fatto… è tutto a posto, ci ho pensato io!". Eccolo allora che si leva il coro - minestrone della finzione di massa, un cocktail di 54 "Non dovevi…" e versacci inebriati di stupore, frasi inutil i di gratitudine, disapprovazioni, mugolii e genuflessioni, tutto rigorosamente finto, tutto sintetizzato in una sola parola: la falsella."
  },
  {
    "name": "♦ FANFASSA",
    "categoria": "inciviliberi.",
    "definizione": "bagno estivo fatto in mutande in spiaggia pubblica. Il fatto di ave r dimenticato il costume, o di non averlo comunque a disposizione, non rappresenta un grande problema per il praticante di fanfassa. Convintissimo che gli sforzi fatti per arrivare al mare, tra il traffico, il caldo e i tempi di attesa a volte lunghissimi, vadano comunque ricompensati, indifferente agli occhi degli altri bagnanti, decide di entrare comunque in acqua. Di tornare a casa a recuperare un costume non se ne parla proprio, tantomeno acquistarlo al volo facendo anche contento qualche povero venditore ambulante. Il fanfassante si spoglia in tutta fretta e corre verso le onde immergendosi con il suo bel paio di mutandoni a pallini. Spesso i praticanti di fanfassa non sono soli: gruppi di ragazzotti un po' rumorosi ma allegri, che non hanno portato il costume e non si prendono troppo sul serio sguazzando felici, giocando magari a racchettoni sul bagnasciuga con la spavalderia dei più impavidi, si godono la vita e non fanno male a nessuno. 55"
  },
  {
    "name": "♦ FOTOGRAFUME",
    "categoria": "frustrazioni digitali.",
    "definizione": "inquinamento da fotografie. Il limite massimo dei valori consentiti dal buon senso nello scattare guardare e condividere fotografie è stato superato. Come le isole di plastica minacciano drammaticamente gli oceani con i suoi i pesci acquatici, il fotografume mette a serio rischio la salute mentale degli umani terrestri. Sono miriadi di foto destinate alla discarica del tempo, sono vacanze, spettacoli, frittelle al miele, attimi di vita distrutti con un click. I viaggi sono un generatore automatico di fotografume, ed è legittimo pensare che la capacità umana di sopportare la visione dei scatti vacanzieri di un amico che rientra dalle ferie si aggiri intorno a numeri da vecchi rullini (18, 24, al massimo 36 foto). Esisteva un tempo questa sorta di limitazione, ma anche di discrezione, esisteva un periodo di distacco tra la vacanza il rientro e i ricordi della vacanza. Era l'attesa piccantina dello sviluppo. Ora abbiamo paura degli amici reduci dalle ferie, ancora abbronzatissimi e già pieni zeppi di foto, che cercano disperati, vittime di guardatori pronti a subire i loro milioni di gigabyte. Non c'è più un tramonto, un concerto, un bel momento senza un fotografatore, i suoi molteplici perversi scopi sono immortalare, commentare, postare, pubblicare… tutti tranne quello di godersi la vita. Guardare e 56 fotografare è come ascoltare e non capire: ci si accorge che c'è uno splendido sole che muore all'orizzonte e, forse proprio perché non si è pronti a godere di questa bellezza, la si neutralizza nel tentativo di ruba rla. E, come non bastasse, si firma il furto affrancandoci un inebetito volto da selfie. Chi guarderà mai queste foto, e per quanti secondi ancora vivranno prima di disperdersi nel nulla digitale?"
  },
  {
    "name": "♦ FRIGULINO",
    "categoria": "parcheggiologia.",
    "definizione": "parcheggio ricercatissimo in posizione promiscua non a pagamento né in divieto di sosta. Il parcheggio detto frigulino è quel parcheggio che non si capisce se è permesso o vietato. Generalmente è posto in una zona che ben si presta all'interpretazione libera dell'automobilista, il quale pur accettando una certa dose di rischio si convince a lasciare con discreta tranquillità la macchina, facendo i debiti scongiuri. Il frigulino non intimorisce il portafoglio, normalmente allergico alle strisce blu, né garantisc e il paradiso della gratuità di quelle bianche, che del resto sono una chimera. È così in assoluto il più ambito e ricercato, la sua posizione è strategica: adiacente a transenne di lavori in corso forse già finiti da tempo; aggrappato in salitelle misteri ose che conducono 57 al nulla; quasi appiccicato a serrande silenziose sprovviste di cartelli o avvisi… Insomma, pur non assicurando la legalità del codice della strada, il frigulino ci trasferisce nel mondo del non - controllato e alimenta la speranza che - se tutto andrà bene - con il minimo di rischio avremo parcheggiato senza pagare nulla."
  },
  {
    "name": "♦ GARGAGLIA",
    "categoria": "teatrini quotidiani.",
    "definizione": "falsa ris ata per barzelletta fallita. Barzellette troppo vecchie, risapute; barzellette che non abbiamo capito o che abbiamo fatto finta di ascoltare distratti dai nostri pensieri; barzellette troppo stupide o poco comiche che lasciano tutti indifferenti. Sono le barzellette fallite. In queste occasioni nessuno ha il coraggio di non ridere, nessuno osa far piombare il gruppo in un gelido silenzio. La gargaglia, pertanto, è la soluzione perfetta: una pietosa simulazione di risata da sfoderare più o meno credibilmente in questi momenti. Una gargaglia può essere stimolata dal senso di compassione che non ci lascia infierire un colpo così pesante al cuore del narratore, magari anche simpatico, può fare forza sulla falsità e l'ipocrisia specie se ad esibirsi è un nostro superiore, una persona che vo gliamo adulare alla quale magari stiamo per chiedere un favore. Sfoggiamo gargaglie anche quando ci coglie inaspettato il finale della storiella mentre annoiati non seguivamo più, a volte gargagliamo perché non l'abbiamo proprio capita questa barzelletta, e non vogliamo far capire agli altri quanto siamo poco svegli. E poi c'è sempre comunque nelle comitive qualche stravagante rivoluzionario avulso alla gargaglia, di solito è un eroe solitario che con coraggio urla: è vecchia!! 62 Ma sono soltanto casi isolati : lo zoccolo duro degli ascoltatori normalmente si piega al comune senso del conformismo che ci vede tutti uniti con la gargaglia in un coro belante di finto divertimento."
  },
  {
    "name": "♦ GARZUBBO",
    "categoria": "personologia.",
    "definizione": "incapacità di un individuo a prendere la parola durante una conversazione di gruppo. C'è un momento, uno solo, per prendere la parola in una conversazione e non per tutti è facile trovarlo: è come scovare un passaggio, una porta che ci apre agli altri. Ci sono individui che non ci riescono, perché soffrono di garzubbo. Sono persone sensibili, poco invadenti e delicate, qualità sconosciute alla prepotenza e all'alto volume delle bocche spalancate dei nostri tempi."
  },
  {
    "name": "♦ GASFASSA",
    "categoria": "",
    "definizione": "serata tra amici passata a guardare video su YouTube. Sembra non ci sia proprio nulla di meglio da fare. Sono finiti i tempi in cui una luna piena faceva spettacolo, si viaggiava dentro gli occhi dell'altro, si ballava senza musica e si usava ancora parlare. 63 C'è sempre qualcuno, in questi anni socialfobici, che propone il suo YouTube da far vedere e c'è sempre qualcuno che risponde con un altro video e poi tutti gli altri che propongono i loro video, piccoli, di pochi secondi perché lunghi annoiano. Finalmente si trova un senso alla serata e parte la caccia al tesoro, ognuno sul suo dispositivo, alla ricerca di altre video-merde per assicurarsi l'unico merito di averle proposte per primo. Gasfassa è il tempo degli occhi bassi, ognuno per sé con il suo schermo, e un grande vuoto in testa per tutti."
  },
  {
    "name": "♦ GIACHECISTÒ",
    "categoria": "antropologia del malessere.",
    "definizione": "rimandare una priorità sostituendola con altre priorità."
  },
  {
    "name": "♦ GIAMMARIONE",
    "categoria": "psicologia degli oggetti.",
    "definizione": "fenomeno per il quale un dispositivo guasto riprende a funzionare davanti al tecnico riparatore. Davanti al meccanico il motore smette di fare il suo rumorino, tornando a casa riprende a farlo peggio di prima. Lo riporti di nuovo, e di nuovo è perfetto. Lo stesso fanno gli elettrodomestici in assistenza, e tutti i macchinari in generale. Gli oggetti hanno un loro carattere. Quelli più complessi, organizzati in elaborati sistemi meccanici, evoluti automatismi, sono ancora più difficili da capire. Alcuni hanno un orgoglio così pronunciato che li induce a da dare il meglio di sé di fronte al tecnico esperto che li conosce nel loro intimo. Non hanno nessuna voglia di farsi toccare, svitare, smontare, non si fidano , non vogliono scocciature e non amano sentir si inquisiti. Pigri, negligenti, nascondono qualsiasi magagna, proprio come talvolta fanno gli umani sul posto di lavoro quando si sentono controllati. Del resto come potrebbero gl i oggetti non essere simili ai loro creatori? 68"
  },
  {
    "name": "♦ GIRIGAZZO",
    "categoria": "parcheggiologia.",
    "definizione": "lenta andatura girovagante in automobile, in fiduciosa attesa che si liberi un posto."
  },
  {
    "name": "♦ GIROCOZZO",
    "categoria": "creature rarissime.",
    "definizione": "persona che ha fatto 123 volte il giro del mondo. Non abbiamo informazioni precise relative al girocozzo. Non esistono riscontri o testimonianze, ma di certo non possiamo escludere la possibilità che un essere umano abbia compiuto per 123 volte il giro del mondo: non è impossibile farlo. E così, come l'ipotesi mai provata che esistano civiltà intelligenti al di fuori del sistema solare ci ha portato a coniare il termine di uso comunissimo "extraterrestri", è ancor più logico poter identificare con un nome preciso q uesto tipo di viaggiatore ipotetico."
  },
  {
    "name": "♦ GOBBASSA",
    "categoria": "",
    "definizione": "giornata grigia e depr imente trascorsa a girovagare su Facebook. 69 Raschiando nei barattoli della noia, ad un certo punto si arriva al fondo, e quella che un tempo chiamavamo giornata grigia oggi diventa gobbassa. Indipendentemente dalla scelta del social più adatto ad ogni depressione, ancor oggi Facebook sembra rapprese ntare il miglior veicolo per sprofondare nel nulla . In questo oscuramento dell'anima qualcuno aggiunge qualche variante impastando e fotografando frittelle al miele, altri vestiti da sacchetto per l'umido si riempiono di televisione spazzatura per poi, una volta pieni, tornare sul proprio profilo e fare considerazioni sul tempo meteorologico, su altre inutilerie, contando sempre i mi piace incassati."
  },
  {
    "name": "♦ GRACAUCO",
    "categoria": "psicologia degli oggetti.",
    "definizione": "ingorgo stradale che si sblocca solo quando l'automobilista spegne il motore. Bloccati nel traffico, la coda è più lunga del previsto. Quando le ultime speranze di ripartire svaniscono e l'impazienza dilaga, appesi ad un'irrequietezza fetida di smog, ci rassegniamo sconfitti a girare la chiave nel cruscotto e spegnere il motore. Non si sa perché, ma solo allora la coda si rimuove: sembra un miracolo, in realtà è il fenomeno del gracauco che si manifesta. È la vendetta del mondo inanimato che si fa più crudele; le code ripartono, i semafori rossi 70 scattano al verde, i passaggi a livello si alzano soltanto quando spegniamo il motore: non è casualità, è la guerra delle cose alla nostra umana ostinazione a vivere in città."
  },
  {
    "name": "♦ GRIFFONE",
    "categoria": "neo-oggettistica.",
    "definizione": "capo di abbigliamento vagante per la casa, non catalogabile come sporco né come pulito. Il griffone non ha una destinazione: non si indossa, perché potrebbe essere sporco, e non si mette nella cesta dei panni sporchi, perché potrebbe essere pulito. Suscita, con questa sua identità da o rfanello, una sorta di tenerezza per tutti i componenti della famiglia. Cosicché l'unica sua attività, l'unico senso della sua esistenza, è quello di essere spostato continuamente da una sedia all'altra."
  },
  {
    "name": "♦ GRIPPO",
    "categoria": "parcheggiologia.",
    "definizione": "parcheggio illusorio, solo apparentemente libero, perché occupato da una Smart. Il grippo è un miraggio nel purgatorio dei ricercatori di parcheggio che girellano e sospirano 71 ormai da parecchio tempo alla ricerca di uno straccio di posto dove fermare la propria auto. Il perfido grippo illude la vittima, che si lancia a spron battuto e va per infilarsi in quel buco di asfalto apparentemente disponibile. Ma, come prova ad entrare, la rivelazione cruda della realtà gli si spiattella davanti: sembrava libero ma c'è una Smart che, così piccola, si era ben mimetizzata tra le auto più grandi. Non c'è altro da fare che continuare a cercare. (vedi girigazzo)"
  },
  {
    "name": "♦ GULLO",
    "categoria": "neo-oggettistica.",
    "definizione": "cilindro cartonato posto al centro del rotolo di carta igienica."
  },
  {
    "name": "♦ GURGUGLIO",
    "categoria": "teatrini quotidiani.",
    "definizione": "dialogare con un gruppo di persone seguendo contemporaneam ente il discorso che fanno altre persone poco distanti. Si parla si risponde ci si agita e si alza anche la voce. È una spassionata chiacchierata tra amici, ma la coda dell'orecchio capta altri nelle vicinanze che pure dicono cose, più o meno come noi… Al tri argomenti, altre problematiche, ma siamo incantati, non possiamo smettere di seguire in segreto queste estranee vicende e, per nulla 72 confusi, continuiamo a parlare con i nostri amici ascoltando contemporaneamente i vicini, come se niente fosse. Il gurguglio è una specie di ubiquità, una furbizia delle orecchie non certo solo nostra, perché è chiaro che i vicini gurgugliati potrebbero essere i nostri gurgugliatori anche da prima che noi li iniziassimo a gurgugliare, e nessuno saprà mai chi ha iniziato per primo."
  },
  {
    "name": "♦ GUSCHIO",
    "categoria": "antropologia del malessere.",
    "definizione": "colpo strozzante improvviso che percorre l'esofago provocato dall'ingurgitare sostanze liquide troppo in fretta. Il guschio è un colpo repentino, come uno sparo nella gola, un improvviso malessere che si irradia dall'esofago fino allo sterno, come un blocco che sembra non risolversi, del quale non abbiamo nessun controllo. Succede bevendo quantità troppo abbondanti di acqua o altri liquidi, spesso freddi e bevuti in fretta per la sete eccessiva."
  },
  {
    "name": "♦ IGNUFILIO",
    "categoria": "creature rarissime.",
    "definizione": "persona che ammette di aver trovato lavoro con una raccomandazione. Chiacchiere da salotto, confidenziali, amicali, discorsi moralistici, borborigmi di politica da quattro soldi o illuminanti tesi da esperti della vita, intellettuali, cafoni, artisti o giardinieri: in qualsiasi oceano della mondanità si navighi, non si rie sce a pescare un ignufilio. Forse è stato inventato, come il calamaro gigante di Giulio Verne, o è rarissimo, come le stelle alpine, come il quadrifoglio. C'è chi sostiene che l'ignufilio esista realmente, di certo nessuno lo ha visto mai."
  },
  {
    "name": "♦ INFICCHIO",
    "categoria": "teatrini quotidiani.",
    "definizione": "far finta di non capire al solo scopo di sfiancare la pazienza altrui. L'inficchio è una strategia adatta ad inquinare l'armonia tra le persone, il suo buon uso facilita il proliferare di equivoci, fa crescere e ramificare malintesi e può distruggere completamente le possibilità di dialogo e comprensione, garantendo il deterioramento dei rapporti umani."
  },
  {
    "name": "♦ INFIGDOLO",
    "categoria": "creature rarissime.",
    "definizione": "individuo che ammette di aver visto in TV il Festival di Sanremo."
  },
  {
    "name": "♦ INIZZELLO",
    "categoria": "neo-oggettistica.",
    "definizione": "gabbietta metallica che assicura il tappo di sughero al collo della bottiglia. 77 Usato principalmente nell'imbottigliamento di vini spumanti e bevande alcoliche, è formato da tre parti: 1) inizzello madre: sede per l'alloggiamento e imprigionamento del tappo. 2) inizzello figlio: prolungamento finale a torciglione che termina in un cappietto, allentando il quale si libera l'intero meccanismo di stappamento. 3) inizzello nipote: posto all'estremità superiore, all'interno della gabbietta, è un piccolo disco indipendente, spesso colorato, che aderisce al tappo coprendone la testa, utilizzato in genere come spazio pubblicitario per la casa vinicola produttrice."
  },
  {
    "name": "♦ INOBULO",
    "categoria": "creature rarissime.",
    "definizione": "individuo divorziato che non accusi il proprio partner di essere impazzito."
  },
  {
    "name": "♦ IPERISTROFO",
    "categoria": "creature rarissime.",
    "definizione": "politico che dichiara di aver perso le elezioni. 78"
  },
  {
    "name": "♦ IRTIZZO",
    "categoria": "neo-oggettistica.",
    "definizione": "intreccio caotico inestricabile tra vecchi fili, scarti di prodotti tecnologici in disuso e componenti elettrici in decomposizione. Vecchi alimentatori di telefonini altrettanto vecchi, che si avvinghiano a centinaia, insieme a ex-modem con prese obsolete, cavi, telecomandi, prese scart, residui antennofici pluriannodati a condensatori e cornette telefoniche con fili a molla. Una popol azione perduta e ammassata, ingorghi irrisolvibili al punto di rimanere tali per intere ere geologiche. Quando il malcapitato si avvicina, perché è in cerca di qualcosa, dopo pochi attimi si rende conto che questo ammasso enigmatico va rispettato e lasciat o intatto nell'angolo più remoto del garage o della cantina, o dove altro volete. L'importante è non toccarlo, perché ormai è soltanto un'installazione, da tenere al buio o alla Biennale di Venezia."
  },
  {
    "name": "♦ ISCOBOFISMO",
    "categoria": "sorprendenti normalità.",
    "definizione": "fenomeno per cui, dopo aver comprato un'automobile, se ne trovano dello stesso modello piene le strade."
  },
  {
    "name": "♦ LAMPO BROCHIODOCARDO",
    "categoria": "antropologia del malessere",
    "definizione": "colpo fulminante di consapevolezza che trafigge dolorosamente chi di sua spontanea volontà intraprende un lunghissimo e noioso lavoro. Perché mai, invece di onorare e godersi il sole di una splendida giornata di maggio, dovremo fare il cambio di stagione dei vestiti? Perché mai i tre giorni di ferie ben edetti dovrebbero essere destinati a nefasti progetti come verniciare la ringhiera del balcone, mettere in ordine le ricevute del condominio o rassettare la cantina? La mente umana non sopporta troppa felicità. Libertà e benessere abbondanti inducono spess o ad elaborare i pensieri e le intenzioni più devastanti. C'è un momento però, un secondo, un attimo improvviso, non appena abbiamo svuotato tutti i cassetti, accatastati i libri sul letto, messo casa a soqquadro, quando i ragni ci stanno per assalire e il polverone si addensa che eccola: una luce di coscienza illumina - anche se ormai troppo tardi - la nostra mente annebbiata. Completamente sotto shock, vediamo allora la cruda realtà: una rapida carrellata sulla catastrofe. E da soli e disperati ci chiediamo: "Chi me l'ha fatto fare? In quale incubo mai mi sono cacciato?". È il lampo brochidocardo, un flash di buon senso che scatta troppo tardi. 82"
  },
  {
    "name": "♦ LASCIONE",
    "categoria": "sorprendenti normalità.",
    "definizione": "ritardo provocato da un anticipo eccessivo. La regola per arrivare in tempo è partire in orario, ma la prudenza ci suggerisce di anticipare ancora un po', considerando la possibilità di un eventuale imprevisto. Partiamo quindi molto prima, perché più rilassati, meno stressati e, vista la tranquillit à e il tempo a disposizione, infiliamo nel programma del giorno altre cosette da fare, piccolissime faccende che, messe insieme, si trasformano proprio in quell'imprevisto che tanto temevamo. Siamo entrati in pieno lascione e, in un frammento di secondo, ci accorgiamo di essere in ritardo, perché ci eravamo anticipati troppo."
  },
  {
    "name": "♦ LISCISIA",
    "categoria": "personologia.",
    "definizione": "individuo che si rifiuta di fare la scarpetta nel suo piatto."
  },
  {
    "name": "♦ LUNDICANTE",
    "categoria": "personologia.",
    "definizione": "individuo che da anni dice di volersene andare via dall'Italia, ma sta sempre qui. 83"
  },
  {
    "name": "♦ LUMIACHIA",
    "categoria": "sorprendenti normalità.",
    "definizione": "fenomeno per il quale lo stesso problema ci appare insormontabile o di facilissima soluzione, a seconda dell'orario nel quale lo stiamo pensando. È incredibile come un pensiero nella nostra mente possa crescere a dismisura o rimpicciolirsi fino a sparire per poi tornare gigantesco o dissolversi completamente, a seconda del momento nel quale lo si pensa, proprio come un palloncino che si gonfia e si sgonfia. Ma quanto è bello sapere che siamo noi ad azionare la pompa?"
  },
  {
    "name": "♦ MANGIUCHISMO",
    "categoria": "psicologia degli oggetti.",
    "definizione": "innata propensione al nomadismo del telecomando TV. "È più facile che un cammello passi per la cruna di un ago", che il telecomando si trovi dove lo abbiamo lasciato. La possibilità remota di trovare rapidamente un telecomando TV è il sogno comune di milioni di esseri umani che, una volta atterrati sul divano, annaspano, palpano, tastan o ovunque con pochissime possibilità di su ccesso. Ma il fenomeno del mangiuchismo non è imputabile al carattere disordinato e sbadato degli uomini. È inutile e dannoso cadere in diatribe casalinghe e accuse reciproche, perché il telecomando è un oggetto dal carattere nomade e, se ne apprezziamo l'utilità, dobbiamo anche rispettare il suo carattere."
  },
  {
    "name": "♦ MESTAZZONA",
    "categoria": "personologia.",
    "definizione": "donna che, chiunque incontri, si lamenta del marito (ma non lo lascerà mai). 88"
  },
  {
    "name": "♦ METOUDETICA",
    "categoria": "antropologia del malessere.",
    "definizione": "girare e sagomare continuamente il cuscino alla ricerca di una posizione ottimale per la nostra testa. Basterebbe accettare che la perfezione non esiste per evitare di cadere nella metoudetica. In questa vana ricerc a della posizione e della temperatura ideale del cuscino si infrangono le speranze di dormire, che cedono così il comando all'insonnia."
  },
  {
    "name": "♦ MICCAFOSSO",
    "categoria": "personologia.",
    "definizione": "persona mediocre di grande successo. L'invasione dei miccafossi in questo periodo non ha precedenti nella storia dell'umanità. Non che siano mancati in tempi passati, ma oggi le nuovissime tecnologie ne sfornano a miliardi, forgiati, moltiplicati, diffusi e spruzzati nell'aria. E diventano vapori, nuvole, si ammassano in perturbazioni che precipitano e concimano il terreno, producendo un limo di mediocrità germogliante, un sottobosco di altri miccafossi, con altri look, altre canzoncine e altre idee, sempre più stupide e vecchie. Il miccafosso vince, perché ben visibile, e non perché è bravo. E per 89 farsi vedere bene non deve e non può andare troppo in alto. Forse, dopo milioni di anni, dopo l'era dei Neanderthal e quella dei Sapiens, siamo entrati nell'era dei miccafossi."
  },
  {
    "name": "♦ MICCHIETTO",
    "categoria": "personologia.",
    "definizione": "individuo che è solito tenere in mano tazze e tazzine, impugnando il manico con pollice indice e medio, portando il mignolo verso l'alto."
  },
  {
    "name": "♦ MICCHIONE",
    "categoria": "personologia.",
    "definizione": "individuo al quale, al ristorante, arriva per ultimo o non arriva affatto il piatto che ha ordinato. Essere sventurati non è mai bello, ma esserlo proprio al ristorante, in quegli spassosi momenti dedicati agli amici, apparecchiati in allegre lunghe tavolate, è doppiamente doloroso. Il micchione ordina come tutti gli altri la sua pizza, ma a lui non arriva. E mentre gli altri mangiano e gliene offrono con misericordia pezzi vaganti, lui rimugina, si guarda intorno e si contorce in silenzio, cercando di minimizzare e mantenere la calma. Fantastica poi, secerne ndo ipotesi sulle possibili cause di questo disguido, 90 sull'inefficienza della cucina o su un errore del caso, ma in fondo il micchione ama autocommiserarsi e, solo con se stesso, riconosce la consuetudine di questa iattura che tocca sempre a lui. O perlomeno così gli sembra."
  },
  {
    "name": "♦ MOFFONGONE",
    "categoria": "antropologia del malessere.",
    "definizione": "intossicazione interiore da vaffanculo inesploso. Ci sono mille motivi per cui non si manda affanculo qualcuno. Forse siamo un po' codardi o freddi strateghi, che attendono di farlo al momento giusto; potremmo essere animati da un apparente senso civico, da servilismo meschino o più semplicemente dall'abi tudine a sopportare. Stiamo comunque mettendo un tappo ad un'energia pericolosa che cresce, si addensa, aumenta la sua carica, va in putrefazione e si decompone. Eccolo il moffongone: come un piombo non digerito, spinge tra mente e stomaco alla ricerca della bocca, unica via d'uscita che ne decreterà la fine, liberando nel suo sfogo quel sincero vaffanculo che lo imprigionava. 91"
  },
  {
    "name": "♦ MOLLICCHIA",
    "categoria": "neo-oggettistica.",
    "definizione": "base bruciacchiata del panettone rimasta appiccicata alla carta da scavare con le mani e mangiare preferibilmente da soli o con pochi intimi della famiglia."
  },
  {
    "name": "♦ NIBICONDIA",
    "categoria": "sorprendenti normalità.",
    "definizione": "tipica espressione di felicità raggiante di individuo che esce dal centro commerciale con un gigantesco scatolone, fiero del suo televisore da 100" appena acquistato."
  },
  {
    "name": "♦ NICCHIOLICCHIO",
    "categoria": "sorprendenti normalità.",
    "definizione": "gioco ossessivo -solitario da marciapiede, consistente nell'evitare sistematicamente il calpestio delle linee di separazione del pavimento."
  },
  {
    "name": "♦ NIMIPPO",
    "categoria": "neo-oggettistica.",
    "definizione": "ultimo spaghetto che rimane attaccato sul fondo della pentola dopo aver scolato la pasta."
  },
  {
    "name": "♦ NIPPEMIA",
    "categoria": "parcheggiologia.",
    "definizione": "sensazione di sgomento che pervade colui che ha dimenticato dove ha parcheggiato la propria auto. 96"
  },
  {
    "name": "♦ NISCUZZO",
    "categoria": "teatrini quotidiani.",
    "definizione": "invito a guardare qualcuno facendo bene attenzione a non farsene scoprire."
  },
  {
    "name": "♦ NITTICCHIA",
    "categoria": "teatrini quotidiani.",
    "definizione": "telefonata interessata a scadenza periodica all'amico che possiede una casa per le vacanze."
  },
  {
    "name": "♦ OLIVISSA",
    "categoria": "teatrini quotidiani.",
    "definizione": "l'ultima oliva che nessuno prende per educazione. Come una zitella solitaria l'ultima oliva, o meglio l'olivissa, resta in tavola lucida e intatta. Sembra quasi soffrire di solitudine, fa gola, ma nessuno la tocca, nessuno si prende la responsabilità di lasciare quel piattino vuoto, come a far capire: "Sono io il maiale!". Si studiano le mo sse dell'altro, cercando di individuare chi farà il grande passo, ma l'educazione, o chi per lei, hanno represso e intimorito tutti. L'olivissa continuerà ad esistere soltanto nei sogni mai realizzati e nelle occasioni perdute di questa cena, probabilmente un po' noiosa."
  },
  {
    "name": "♦ ONOSTOLFO",
    "categoria": "creature rarissime.",
    "definizione": "idraulico-o più in generale libero professionista - che non parla male del lavoro fatto dai suoi precedenti colleghi. 100"
  },
  {
    "name": "♦ ORUCÙ",
    "categoria": "psicologia degli oggetti.",
    "definizione": "comportamento fastidioso e vendicativo di un oggetto casalingo non ben identificato, apparentemente di poca importanza, che si ripresenta ostinatamente in ogni angolo della casa, rivelandosi utilissimo soltanto dopo essere stato gettato via nel secchio dell'indifferenziata. L'orucù predilige angoli e anfratti casalinghi frequentati quotidianamente: può apparire dentro la scatola dei bottoni, dietro al frigorifero, tra gli intrecci di vecchi carica -cellulari, tra i ricambi dell'aspirapolvere. Ma ha la sfacci ataggine di presentarsi anche in posti ancor più familiari, come le nostre tasche, la scrivania o addirittura tra gli indumenti intimi. In buona sostanza è onnipresente! Nessuno sa cos'è, a chi appartiene, da dove proviene e soprattutto se si può buttare. L'orucù è esibizionista e ostinato, per anni ed anni gira per la nostra casa e malignamente ci fa sprofondare nel dilemma se continuare a sopportarlo per chissà quanto ancora o gettarlo via senza rimorsi. Sfiancati da questa lacerazione interiore, scegliamo la seconda opzione e ce ne liberiamo. È solo allora che l'orucù compie il suo atto finale: dopo averlo buttato, scopriamo che era un pezzo fondamentale per il funzionamento di un altro oggetto fondamentale; era una parte indispensabile, non più ritrovabi le in commercio 101 né in nessun altro luogo, senza la quale sarà difficile continuare a vivere."
  },
  {
    "name": "♦ PALOCCHIO",
    "categoria": "parcheggiologia.",
    "definizione": "passeggero di fiducia usato come ferma -posto da parcheggio, in attesa che torni il guidatore per parcheggiare."
  },
  {
    "name": "♦ PANFIRISMO",
    "categoria": "psicologia degli oggetti.",
    "definizione": "l'innata propensione della pantofola sinistra a scomparire misteriosamente. Andare in bagno con un piede scalzo e la sola pantofola destra infilata malamente è una esperienza comunissima, che provoca disagio e irritazione, specie se ci siamo prodigati per lungo tempo a cercare invano la pantofola sinistra: siamo in presenza del pa nfirismo o pantofola panfirica. Il fenomeno è stato identificato con chiarezza per la pantofola sinistra, ma allo stato attuale delle ricerche non possiamo parlare di panfirismo per quanto riguarda la sparizione di quella destra."
  },
  {
    "name": "♦ PERIZOSTO",
    "categoria": "neo-oggettistica.",
    "definizione": "area del pavimento dove il musicista batte il piede. 106"
  },
  {
    "name": "♦ PESTILOFROBI",
    "categoria": "personologia.",
    "definizione": "persone che vanno alla messa rimanendo in prossimità del portone d'entrata. Pronti per il pranzo domenicale, ben stirati, in piedi e sempre a gruppetti, chiacchierano sopratutto di calcio o di altre futilerie senza approfondire nulla, un po' perché è la loro natura, un po' perché l'ubicazione così effimera non favorisce certo le conversazioni intelligenti. Sono gli inconfondibili pestilofrobi, che occupano lo spazio antistante all'entrata della chiesa, mantengono la posizione tra la soglia e il grande portone, ove giunge una eco delle lontane litanie alle quali non sono molto interessati, ma non se la sentono comunque di opporre resistenza. Qualche volta si avventurano in incursioni lampo oltre il sagrato, dietro ai cespugli di oleandri ornamentali, alla ricerca di non si sa cosa, ma tornano subito al loro posto. Qualcuno fuma. Il p estilofrobo non evade del tutto la funzione religiosa, non ha il coraggio di andarsene al bar. Lui rimane lì impalato, al confine si, ma pur sempre in area sacra, pronto per ogni eventuale accusa di assenteismo a dimostrare la sua fervida presenza all'evento. I pestilofrobi tendono per loro natura a fare gruppo, non è possibile infatti trovarne uno solitario, poiché solo insieme realizzano la loro vera essenza: non sono in realtà grandi testimoni 107 di fede, spesso sono persone che accompagnano qualcuno, che v anno per abitudine o per non litigare con la moglie. Sono partiti da casa con tutte le migliori intenzioni, ci hanno messo tutta la buona volontà, ma sorpresi e travolti dalla noia acuta da messa (vedi castrofenia) hanno scelto questo ruolo che tanto carat terizza domeniche mattina, feste comandate, matrimoni, comunioni e funerali dell'Italia cattolica."
  },
  {
    "name": "♦ PREPESCOFIA",
    "categoria": "personologia.",
    "definizione": "seguire principalmente i propri pensieri mentre qualcuno ci sta parlando. Siamo egocentrati e distratti dalle nostre stesse chiacchiere mentali e se mai qualcosa di ciò che l'altro dice riesce a filtrare nelle nostre orecchie, ci preoccupiamo subito di elaborare una risposta, di sentenziare ciò che è giusto o sbagliato, se siamo o non siamo d'ac cordo. La prepescofia, vizio e piaga della mente umana, ci rende sordi e ciechi agli altri e degenera spesso in una inutile guerra (vedi ascarazzo). 108"
  },
  {
    "name": "♦ PRITOMORFISMO",
    "categoria": "neo-oggettistica.",
    "definizione": "stato degli oggetti o indumenti destinati a rimanere in automobile per lunghi periodi senza alcun motivo. Un oggetto in stato di pritomorfismo è vittima della nostra più radicata pigrizia che ci impedisce, anche quando ci sarebbe possibile, di tirarlo fuori dalla macchina e portarlo a casa. Ci sono sempre altre cose, altri pacchi, altre buste che hanno precedenza di rientro. Per l'esattezza possiamo parlare di pritomorfismo soltanto dopo quaranta giorni di permanenza all'interno del veicolo: solo allora si può dichiarare l'oggetto in questo stato. Una popolazione eterogenea di oggetti imprigionati: indumenti maschili, vecchi quotidiani, scatole di mentine incollate, sono solo alcuni esempi. È solo un'ipotesi, ma molto probabile, che l'oggetto pritomorfico sentendosi abbandonato possa cadere in una profonda crisi da isolamento e preda di gelosie verso i suoi oggetti compagni, che sono riusciti a venir fuori dall'automobile."
  },
  {
    "name": "♦ PROTOMOSCARZOFONE",
    "categoria": "creature rarissime.",
    "definizione": "individuo che legge contratti e licenze delle applicazioni prima di dare "Ok" per installarle."
  },
  {
    "name": "♦ QUISQUIRAGLIO",
    "categoria": "sorprendenti normalità.",
    "definizione": "motivetto musicale che rimane in testa tutto il giorno. Come fa la nostra mente ad essere così debole da non riuscire a scacciare un quisquiraglio? Come speriamo di gestire la nostra vita, coltivare speranze per il nostro futuro, per il futuro del mondo, se non siamo in grado di gestire un'inezia come questa? C'è da dire che il quisquiraglio ha una forza particolare: è così insistente c he non teme paragoni neanche con altri piccoli rivali del suo genere. Un sassolino nella scarpa, ad esempio, è un piccolo fastidio, ma fermandosi un momento si può togliere. Il quisquiraglio no, è una mini - ossessione, un incubino da quattro soldi, che ci invade e la sua forza sta tutta nella sua stupidità che rivela però, come in una cartina tornasole, tutta la debolezza della nostra mente."
  },
  {
    "name": "♦ RAMANGONE",
    "categoria": "antropologia del malessere.",
    "definizione": "sensazione di piccola scossa elettrica sul braccio che si avverte sbattendo il gomito su un corpo spigoloso."
  },
  {
    "name": "♦ RAMUFFO",
    "categoria": "teatrini quotidiani.",
    "definizione": "dialogare normalmente con una persona pur non ricordando chi sia. Siamo fuori casa, all'improvviso una persona ci riconosce e con grande affettuosità ci saluta e ci domanda cose e cose sulla nostra vita. Con tutti gli sforzi di memoria possibili non sappiamo proprio chi sia, non possiamo collocarla tra i nostri conoscenti, ma questo ci appare irrispettoso nei suoi con fronti e allora continuiamo a parlare fingendo lo stesso stupore e lo stesso entusiasmo amichevole con cui siamo stati accolti. L'importante è rimanere nel vago e non inoltrarsi in argomenti troppo personali. Se l'operazione va in porto abbiamo fatto un ramuffo. Non si tratta di falsità o ipocrisia, il ramuffo fa leva su una strana forma di eccessiva delicatezza, che ci spinge ad improvvisare innocui (speriamo) teatrini metropolitani. 116"
  },
  {
    "name": "♦ RASACCHIO",
    "categoria": "frustrazioni digitali.",
    "definizione": "sbagliare una correzione su un file di testo. Molto spesso scrivendo al computer si fanno errori di digitazione. Sono piccolissimi errori, lettere di troppo o mancanti, doppie che diventano triple, segni al posto di altri segni, insomma piccoli sbagli che non richie dono certo di riscrivere tutta la parola, basta correggerla. Questa operazione però - non se ne capisce il motivo - comporta altri misteriosi, ulteriori incidenti di digitazione. Sembra quasi che correggere sia molto più difficile che rifare da capo: le le ttere si moltiplicano follemente, alcune spariscono, altre si spostano. E, solo dopo vari tentativi falliti, si cancella, e si riscrive di nuovo la parola da capo."
  },
  {
    "name": "♦ RAVULEN",
    "categoria": "creature rarissime.",
    "definizione": "architetto che non propone di fare un open-space."
  },
  {
    "name": "♦ RIBBECCONE",
    "categoria": "antropologia del malessere.",
    "definizione": "non sapere mai dove va la lettera "h" nelle parole inglesi. 117 John o Jhon? Christian o Crhistian? Non lo sappiamo mai. Quando ci sono questi dubbi siamo preda del ribbeccone, uno dei piccoli insidiosi fastidi della lingua inglese."
  },
  {
    "name": "♦ RICACCHIO",
    "categoria": "sorprendenti normalità.",
    "definizione": "cercare per ore un oggetto fino a dimenticare cosa si sta cercando."
  },
  {
    "name": "♦ RIGILLA",
    "categoria": "psicologia degli oggetti.",
    "definizione": "pagina del libro che si richiude da sola. Alcune pagine dei libri, specialmente quelli nuovi, non vogliono essere girate e si richiudono da sole. Potremmo spiegare il fenomeno attribuendo la responsabilità alla rilegatura fresca e poco usata, ma la verità è che certe pagine hanno un carattere indomabile, rivoluzionario e ribelle. Le rigille rifiutano di essere piegate per la nostra lettura e, anche dopo ripetuti tentativi di spianare e appiattire l'intero volume, sbattuto sul tavolo e pressato a pugno deciso, noteremo che, dotate di energia pensante, forse possedute da un'entità misteriosa, torneranno sempre a voltarsi e chiudersi contrariamente ai nostri desideri. 118"
  },
  {
    "name": "♦ RINGULZO",
    "categoria": "frustrazioni digitali.",
    "definizione": "fotografia digitale che si posiziona sul nostr o smartphone verticalmente quando tentiamo di vederla orizzontalmente e viceversa."
  },
  {
    "name": "♦ RISMIELONE",
    "categoria": "sorprendenti normalità.",
    "definizione": "ritrovare una cosa che avevi dimenticato di aver perso. Gli oggetti, vuoi per loro volontà vuoi per altri motivi, si possono smarrire. Per un po', invano li cerchiamo, ma col tempo, abituati alla loro assenza, dimentichiamo perfino di averli persi. Poi un giorno - un normalissimo insignificante giorno – ritorneranno. E noi, colti di sorpresa, come destati da un sogno, avremo un rismielone. Quel giorno la nostra vita, anche se di poco, prenderà una piega diversa."
  },
  {
    "name": "♦ SARZARA",
    "categoria": "neo-oggettistica.",
    "definizione": "la zona del piatto destinata ad accantonare rimasugli alimentari, come ossi del pollo, spine di pesce, gusci di vongole, ecc."
  },
  {
    "name": "♦ SBEDEO",
    "categoria": "teatrini quotidiani.",
    "definizione": "acrobazie e contorsioni del volto umano atte a nascondere uno sbadiglio. Plateale e inconfondibile quella dello sbadiglio: sfacciata, animalesca postura del volto umano che spalanca le fauci abnormemente, ingurgitando quantità spropositate di ossigeno in modo per lo più involontario. È l'inconfondibile messaggio che segnala a tutti, noi compresi, che ci stiamo annoiando. Conversazione polverose, serate senza emozioni, o semplice stanchezza possono provocare lo sbadiglio. E allora noi - vuoi per educazione, vuoi per non rivelarci - chiamiamo a soccorso tutto l'esercito di muscoli facciali per intrecciare una pirotecnica contrazione del viso e simulare l'apparente normalità che ben si adatta al mozzicone di serata rimasta da fare. Abbiamo fatto uno sbedeo, ma non c'è nulla di più riconoscibile: come un fratello della banda bassotti travestito da dottore, tutti lo riconoscono 122 tutti sanno, ma fortunatamente tutti fanno finta di niente."
  },
  {
    "name": "♦ SCARAZZO",
    "categoria": "teatrini quotidiani.",
    "definizione": "ultima persona disponibile dopo che tutte le altre hanno rifiutato. Smartphone: contatti in rubrica, cerca… Il percorso dalla A alla Z è brevissimo e siamo già alla fine. Nessuno è interessato alla nostra proposta: chi ha già da fare, chi non risponde, chi mette scuse. Ci sarebbe rimasta una persona, quella meno convincent e, ma è l'ultima ipotesi, l'unica rimasta ancora da chiamare. Del resto a tutto ci si adatta quando si è affamati. Scarazzo è l'ultima donna da invitare a cena tanto per non star solo, il più maldestro giocatore di calcetto per fare conto pari sul campo, l 'ultimo idraulico disponibile di sabato pomeriggio, l'incognito compagno di barca senza il quale salta la vacanza… Ma scarazzo non si nasce, si diventa. E per quanto penoso ci possa apparire questo ruolo, mai sapremo nella vita se anche noi lo abbiamo interpretato. 123"
  },
  {
    "name": "♦ SCATARAFFA",
    "categoria": "sorprendenti normalità.",
    "definizione": "gioia percepita dal fallimento di un progetto sviluppato con persone che non hanno dato ascolto al nostro parere. Perdersi nel percorso del viaggio con persone che si ostinano a seguire la rotta sbagliata nonostante i nostri avvertimenti può lasciare un retrogusto piacevole, profumato di orgoglio e disappunto. Ci sentiamo, alla luce dell'errore conclamato, autorizzati ad alzare la voce e abbaiare il classico: "Ve l'avevo detto!", con tanto di risatina sarcastica e inutile godimento, essendo tutti dentro la stessa barca. Una scataraffa in fase acuta può solleticare persino l'irrazionale voglia di remare segretamente in senso contrario e favorire così il destino comune al disastro incombente: Lo scataraffatore non si dichiara tale, rimane diabolicamente zitto nell'anonimato del suo ruolo, godendosi il suo orgasmo nel più completo silenzio."
  },
  {
    "name": "♦ SCHICCHIO FOCOSO",
    "categoria": "teatrini quotidiani.",
    "definizione": "fastidio avvertito sulle mani che applaudono per molto tempo. È finita! I bis possibili sono stati consumati, goduti, osannati. Gli attori esausti, i musici, i ballerini, in bilico tra la voglia di tornare a casa e 124 quella di continuare a stare immersi in questa doccia calda di applausi che il pubblico in piedi continua a scrosciare e non accenna a smettere. Anche sipario e siparista sono stanchi di aprire e chiudere, intrappolati in questo loop di "Bubu… settete!" per adulti. In sala non ci sono distinzioni tra chi ha gradito lo spettacolo e chi è rimasto indifferente. Qualcuno ha dormito addirittura. Ma questo è il momento della festosa omologazione con tutte queste mani primitive da australopitechi che continuano a sbattere. E solo loro - le mani - non sono d'accordo. Concepite per altre mansioni, indifferenti a quello che sta succedendo, urlano il loro disappunto. Rosse infuocate, stanche di sbattimenti, ci implorano di fermarci: è l'urlo inconfondibile, dolorante dello schicchio focoso."
  },
  {
    "name": "♦ SCHIRFIO",
    "categoria": "antropologia del malessere.",
    "definizione": "il primo graffio alla macchina nuova. L'automobile appena comprata deve obbligatoriamente pagare un debito col destino: l'incontro con il suo primo graffio. Il fatto avviene sempre molto prima di quanto si possa prevedere, mai troppo lontano da quel momento di frizzante giubilo, in cui si esce fieri e prudenti dall'autosalone, inebriati da odori di nuove plastiche, estasiati dalle fulgide cromature. L'imprevisto imprevistissimo è in agguato e con 125 un colpo traditore infierisce sulla carrozzeria ignara, che in meno di un attimo perde la sua verginità. È il peccato originale che forse si ripropone, in forma non umana. Umano però è il dolore acuto, che conosciamo bene, provato dal neo proprietario nel vedere questo sfregio sfacciato sul sogno di tutta una vita."
  },
  {
    "name": "♦ SCIALOGLIO",
    "categoria": "antropologia del malessere.",
    "definizione": "calore umano rimasto sulla sedia di una persona che si è appena alzata, percepito da un'altra che prende il suo posto. Il caldo ascende con le sue molecole agitate, emanazioni silenziose di sospette flatulenze. Lo si avverte imprevisto, mentre passa dal culo sconosciuto che lo ha covato e trasmigra nel nostro corpo. Eredità del tizio che si è appena alzato, lo scialoglio si infila al centro dell'anima attraversando tutte le intimità, approfittando di una sedia che gli fa da tramite. "Non è giusto!" viene allora da pensare, ma è troppo tardi: per induzione il trasloco di calore è istantaneo, ci destabilizza p er qualche attimo e poi, accomodanti e rassegnati, accettiamo la ripugnanza in cambio di un posto a sedere. Metropolitane, sale d'aspetto, aeroporti, cinema, ovunque esistano spazi comuni per sedere, lo scialoglio è sempre in agguato, come un parassita riscaldatore che ci umilia nel profondo. 126"
  },
  {
    "name": "♦ SCIVULENZA",
    "categoria": "frustrazioni digitali.",
    "definizione": "caos inestricabile e totale nella gestione delle proprie password. 127 Se al momento di fare un login la risposta più frequente che vi viene data è: "Password errata" o "Account errato", siete affetti da scivulenza. Un problema frequentissimo che affligge molte persone, un popolo che non tollera l'informatica: poeti, sognatori e molte donne in stato di esistenza in vita. La scivulenza è uno dei principali responsabili della produzione umana di asmio (vedi definizione)."
  },
  {
    "name": "♦ SCROCCELLO",
    "categoria": "inciviliberi.",
    "definizione": "vezzo generalmente maschile di infilare e sbattere il dit o mignolo all'interno dell'orecchio per lenire un prurito."
  },
  {
    "name": "♦ SCUCCIFIO",
    "categoria": "inciviliberi.",
    "definizione": "togliersi le scarpe al cinema durante il film. Ci sono gesti talmente semplici e rilassanti avvolti da un velo di inutili pudori, ma così benefici da essere irrinunciabili. Fare scuccifio significa vivere bene la vita e concedere una vacanza inaspettata ai piedi; non c'è nessuna ragione logica per non farlo, rispettando - si spera - i principi fondamentali della pulizia e del buio in sala. 128"
  },
  {
    "name": "♦ SFASIO-AUFRASIO",
    "categoria": "antropologia del malessere.",
    "definizione": "tormentoso viaggio in auto con persone dalle diverse esigenze. Viaggiare in auto con altri passeggeri in modalità sfasio-aufrasio è come partecipare al festival dell'insofferenza. All'interno dell'abitacolo, che a tutti sembra sempre più stretto e soffocante, nascono nuovi complicati algoritmi di malessere e si moltiplicano all'infinito, scaturiti dall'intrigo delle diverse condizio ni fisiche e psicologiche. Sono esigenze incompatibili e policrome intolleranze, che si scontrano in una guerra dove perdono tutti. Un lamento internazionale: finestrini aperti, finestrini chiusi, forse chiusi lasciando un filo d'aria per respirare; fumatori contro non fumatori; il climatizzatore fa male e chi invece non viaggia senza; chi vomita se non sta davanti; chi vomita comunque; chi non ha problemi ma ha capito di stare in un gruppo di matti. Qualcuno si caga sotto e urla ad ogni sorpasso, perché il pilota va troppo veloce; qualcuno incita il sorpassatore che ancora non sorpassa; chi per paura di peggiorare la situazione prega ammutolito (vedi sfusio ); chi si lamenta che di questo passo, così lento, non si arriva mai; i navigatori individuali propongono ad ognuno percorsi diversi; c'è poi chi non si fida dei navigatori; e poi ci sono gli interpreti del linguaggio degli autovelox; gli sceglitori di parcheggi. Se aggiungiamo eventuali soste per 129 sgranchirsi le gambe, autogrill, bambini iperattivi e cani che devono pisciare, comprendiamo il perché viaggiare in stato di sfasio -aufrasio possa essere un supplizio più tormentoso di cadere nudi su una pianta di fichi d'india."
  },
  {
    "name": "♦ SFRACCA",
    "categoria": "psicologia degli oggetti.",
    "definizione": "l'ultima infingarda vite che serve a ricomporre un oggetto smontato. Tutti gli oggetti - che siano elettrodomestici, motori, sedie a sdraio, computer o sottomarini - amano a volte essere smontati. Probabilmente vivono nel momento della riparazione il piacere di ricevere quelle attenzioni che da perfetti funzionanti non avrebbero mai ricevuto. Sono finalmente così importanti da attrarre più persone intorno a loro: tecnici specializzati, membri della famiglia, vicini di casa che discutono, si consigliano sul da farsi. E quando vengono smontati e manipolati lo percepiscono come una sorta di massaggio piacevole. Alla fine del lavoro, risolto il problema, l'oggetto viene ricomposto, ma l 'ultima vite, quella indispensabile alla chiusura perfetta di tutto l'apparato, fa i capricci, non chiude e si oppone con grande tenacia. Potremmo stringere malamente e spaccare qualcosa di importante. Potremmo farla saltare per terra, perderla vedendola r otolare per l'ultima volta sotto 130 l'armadio. Potremmo infilarci il cacciavite sul palmo della mano procurandoci una laica stimmate o farci prendere da una crisi isterica invocando divinità e oggetti di culto. In ogni caso non è colpa nostra, è la sfracca che agisce: è nella sua natura e dobbiamo accettarla così."
  },
  {
    "name": "♦ SFRESIO",
    "categoria": "inciviliberi.",
    "definizione": "frenata brusca e imprevista causata da improvviso avvistamento di autovelox. Sul più bello del viaggio, veloci e liberi, l'automobile divora chilometri ma lui appare all'improvviso, spunta tra alberi, pali e paletti che corrono e fuggono come immagini di un film al contrario che scorre al bordo della strada. È antipatico, arcigno, è uno stupido poliziotto metallico con la testa da robot, è il t errificante autovelox! In una frazione di secondo il piede decide per istinto di frenare bruscamente per ritornare alla velocità consentita, almeno fino a quando si è fuori dalla portata di questo occhio malefico. Lo sfresio è una reazione istintiva ma può essere causa di incidenti stradali, consumo eccessivo di pneumatici e ripetute diatribe coniugali. 131"
  },
  {
    "name": "♦ SFURIA",
    "categoria": "antropologia del malessere.",
    "definizione": "sensazione mista a desiderio di aver bisogno di un po' più di soldi."
  },
  {
    "name": "♦ SFUSIO",
    "categoria": "antropologia del malessere.",
    "definizione": "paura che, implorando lo spericolato guidatore ad andare più piano, questi possa distrarsi e infastidirsi, peggiorando ulteriormente la situazione."
  },
  {
    "name": "♦ SGUBBIO",
    "categoria": "antropologia del malessere.",
    "definizione": "malumore provocato dal non trovare nel proprio guardaroba nessun vestito che ci sta bene. Forse siamo ingrassati, forse siamo depressi o più semplicemente abbiamo bisogno di qualcosa di nuovo, fatto sta che dopo aver scombussolato armadi, cabine e cassapan che non abbiamo trovato niente che ci doni, o che almeno non ci faccia schifo. Prede dello sgubbio, per placare l'angustia, montiamo sul cavallo squilibrato dell'insoddisfazione puntando dritto verso i centri commerciali, ben consapevoli che al più presto, il quadrupede, tornerà a scalciare. 132"
  },
  {
    "name": "♦ SINCROLEK",
    "categoria": "psicologia degli oggetti.",
    "definizione": "fenomeno per il quale il telefono squilla quando facciamo la doccia. Telefoni e smartphone, miracoli tecnologici preposti alla comunicazione: la loro natura è quella di collegare, mettere in contatto persone e cose. Sono talmente evoluti nella scienza del parlare che, anche tra loro, a nostra insaputa spettegolano e progettano malignerie alle nostre spalle. Non sappiamo se è prima il telefono ad avvisare la do ccia o viceversa ma è certo che sanno del nostro arrivo e che, beffardi vigliacchi, si consultano. Non ci è permesso purtroppo dimostrare con prove l'imbroglio e denunciarlo al mondo. Il fenomeno non è riproducibile volontariamente: non funziona entrare appositamente in doccia per far squillare il telefono. Niente di più evidente che i bastardi non cadono in certi trabocchetti e non si lasciano smascherare. Per lavarci in santa pace non rimane altro che spegnere il telefono, fin quando ci sarà data ancora questa possibilità."
  },
  {
    "name": "♦ SLIFFIARE",
    "categoria": "inciviliberi.",
    "definizione": "consumare i residui alimentari rimasti attaccati alla loro confezione. 133 Lo yogurt rimasto sul coperchio di carta stagnola è un boccone imperdibile per chi ama sliffiare . Il principio è sempre lo stesso: vale per succhiare il tubetto della maionese, leccare i rimasugli di mozzarella calda nell'incarto della pizza al taglio, ruspare con le unghie l'attaccaticcio bruciacchiato del panettone (vedi mollicchia) rimasto sulla carta oleata per portarselo appallottolato in bocca."
  },
  {
    "name": "♦ SMINUZZURIA",
    "categoria": "neo-oggettistica.",
    "definizione": "quantità di soldi che finisce realmente laddove la solidarietà si prefigge."
  },
  {
    "name": "♦ SOVENCHIO",
    "categoria": "sorprendenti normalità.",
    "definizione": "piacevole inaspettata sorpresa nel ritrovare soldi nella tasca di un abito da molto tempo non utilizzato."
  },
  {
    "name": "♦ SPERNACCIO",
    "categoria": "psicologia degli oggetti.",
    "definizione": "dispettoso, imprevedibile e irrazionale comportamento del tubo dell'acqua in giardino. Il tubo del giardino che fa lo spernaccio non è un animale, non è un robot, non è umano né divino, è 134 un apparente inanimato, una molla che scatta volteggiando come un cobra impazzito verso una meta inesistente, non appena si apre il rubinetto dell'acqua. B agna tutto quello che non deve, fa danni ovunque con il suo roteare serpeggiante, si alza nel cielo, vorrebbe disegnare chissà quali arabeschi nell'aria, vorrebbe sembrare un danzatore diabolico e ci guarda, ci mira bene e poi ci sputa addosso tutta l'acqua che contiene la sua cattiveria."
  },
  {
    "name": "♦ SORBIPANTE",
    "categoria": "creature rarissime.",
    "definizione": "individuo che capisce quello che dicono i cantanti lirici quando cantano."
  },
  {
    "name": "♦ SPINULFO",
    "categoria": "neo-oggettistica.",
    "definizione": "l'ultimo piolo della scala."
  },
  {
    "name": "♦ SPIRICCIO",
    "categoria": "teatrini quotidiani.",
    "definizione": "piccola diatriba tra persone che competono per pagare il caffè al bar. Avidi, egoisti, falsi, cinici, perfidi, disonesti nella vita, i gruppi umani al bar sono soliti accendere 135 particolarissime spettacolari competizioni per chi paga il caffè. Sono gli shows danzanti delle generosità ostentate, gare di atletica gesticolazione, dove il pagatore smarca tutti i tentativi di placcaggio, forza le barriere di gomiti e avambracci, arriva per primo alla cassa e paga urlando: "Ho fatto io!!" È questa l'occasione che non poteva lasciarsi scappare: con pochissimi euro può sfoggiare grande generosità e simpatia per tornare subito dopo a sbranarsi con gli tutti altri come al solito."
  },
  {
    "name": "♦ SPIRINDELLO",
    "categoria": "antropologia del malessere.",
    "definizione": "prurito non gestibile. Quando abbiamo entrambe le mani occupate, consapevole che nulla possiamo contro di lui, lo spirindello pungicchia senza pietà, formicola in corpi ben infagottati, si aggira dentro le tute da sci, ama le gabbie di gesso dei fratturati, le mute subacquee. È il diavoletto che mordicchia quando trabocchiamo di buste della spesa, quando siamo arrampicati sull'ultimo piolo della scala (vedi spinulfo) per avvitare una lampadina e morde come un viperotto al centro della pianta del piede, quando non possiamo togliere le scarpe e scalciamo a terra come astronauti impazziti. 136"
  },
  {
    "name": "♦ STROFICCHIONE",
    "categoria": "teatrini quotidiani.",
    "definizione": "lieve ondeggiamento e piccola pressione del bacino sulla sedia per lenire e al contempo mimetizzare un prurito anale."
  },
  {
    "name": "♦ STURONE",
    "categoria": "sorprendenti normalità.",
    "definizione": "disostruzione dell' esofago intasato da un boccone troppo abbondant e mediante l'assunzione tempestiva di un bicchiere d'acqua. Un morso dato avidamente ad un panino troppo asciutto può renderci la vita difficile: il boccone sospeso non va né su e né giù, il senso di strozzamento si fa preoccupante. Ingurgitiamo allora un abbondante sorso d'acqua , o di altri liquidi a piacere: dalla botta in gola, improvvisa e un po' brutale, si capisce che abbiano fatto uno sturone."
  },
  {
    "name": "♦ SURZUFUCCHI",
    "categoria": "personologia.",
    "definizione": "silenziatori di sale cinematografiche. Preferiscono, non si sa perché, esprimersi con il fonema "Scccc" (quello di sci, o scimmia, tanto 137 per intendersi) e lo esibiscono come fosse il loro strumento preferito nel bel mezzo del buio in sala, a proiezione iniziata. Quelli più radicali addirittura lo suonano nel le pubblicità prima del film. Odiano i bisbigli della gente che si sta sistemando in poltrona, dei ritardatari che fanno ri-alzare tutta la fila, degli scartatori di plastiche rumorose, insomma si ritengono i garanti dell'ordine e difendono il silenzio per fetto. Sono certamente nel giusto, hanno tutte le ragioni del mondo. Ma sono antipatici."
  },
  {
    "name": "♦ TARAMBULLA",
    "categoria": "teatrini quotidiani.",
    "definizione": "frenetica e disordinata agitazione che si impossessa dei commensali al ristorante nella smania di condividere l'assaggio delle pietanze ordinate. Non certi di aver scelto il piatto giusto i commensali al ristorante si mettono al sicuro da ogni rischio scegliendo di condividere le portate in una confusa orgia di assaggi reciproci. Divampa furibondo un traffico di piatti volanti da una parte all'altra del tavolo che sembra quello di una portaerei americana in guerra davanti al Golfo Persico. All'inizio c'è sempre chi dà il via alla tarambulla ed esordisce chiedendo se qualcuno vuole assaggiare dalla sua scodella. Quello che approfitta dell'offerta si trova subito : allunga la forchetta, passa davanti a tutti e ne decurta dal piatto in questione circa il trenta per cento (nel migliore dei casi). È iniziata la guerra o, meglio, la danza. I capitavola si alzano per andare a prelevare da piatti lontani, a qualcuno sparisce misteriosamente tutta la pietanza, il tavolo intanto vacilla, traballa e qualche bottiglia di chianti si rovescia sulla tovaglia. Volendo, si frantuma nello scontro anche qualche bicchiere, mentre tutti mangiano tutto dal piatto di tutti nella confusione generale dei sapori, dove il sugo all'amatriciana finisce dentro agli spaghetti alle vongole. 142 Alla fine della cena si è mangiato di tutto, ma nessuno sa più dire che cosa."
  },
  {
    "name": "♦ TARTAGNASSA",
    "categoria": "frustrazioni digitali.",
    "definizione": "protrarre una conversazione telefonica nonostante la linea molto disturbata. Gli interlocutori non si convincono che sarebbe meglio chiudere e richiamare, anzi continuano ostinati a parlare usando solo alcune inconfondibili frasi tipiche della tartagnassa: "Mi senti?" "No! ti sento a tratti…" "Io ti sento bene". "Ora ti sento… Pronto… Pronto?" "Ma io ti sento!" "No… non sento niente…""
  },
  {
    "name": "♦ TORCIMONIO",
    "categoria": "antropologia del malessere.",
    "definizione": "il riemergere inutile e fuori tempo di parole e concetti che dovevano essere proferiti durante un litigio. Passata la tempesta, esplosi tutti i colpi a disposizione, da soli, nel frastornante silenzio, il cuore nelle tempie batte forte. Il respiro è ancora difficile, una sommossa interiore cresce, 143 lampeggiano un groviglio di echi, voci, immagini: sembrano organ izzarsi da soli per ricostruire e proiettare il film dei fatti appena trascorsi. Emergono solo ora da diverse angolazioni, nuove vedute, possibili repliche alternative e impensate solo pochi minuti prima, quando sarebbero state veramente utili da srotolare con nuove frasi, nuove frecciate… È il torcimonio, un ammasso contorci-animo che, a scoppio ritardato, rimugina le nostre tesi così selvaggiamente difese, aggiungendo come tortura finale il rammarico di aver lasciato inutilizzato tanto materiale bellico."
  },
  {
    "name": "♦ TRAMOSCHIO",
    "categoria": "teatrini quotidiani.",
    "definizione": "litigare con qualcuno qualche giorno prima del suo compleanno per evitare di fargli il regalo. Cercare un regalo per qualcuno è una delle incombenze più terrificanti della vita. Eccoci dunque sconf itti e obbedienti dal conformismo, ectoplasmi erranti tra una vetrina e l'altra, tra centri commerciali e labirinti di offerte su Amazon, con l'angoscioso dubbio se stiamo scegliendo l'articolo giusto, se il festeggiato non lo possiede già, se lo potrà cambiare e soprattutto se azzecchiamo l'equilibrio tra fare una bella figura e soldi spesi. Di certo sarebbe meglio un eczema pruriginoso o qualsiasi disagio generico. 144 Ma c'è una via di fuga, una sofisticata strategia che ci tira fuori da questo pozzo buio: troviamo un disaccordo, un dissapore col festeggiato, un alterco che non sarà gravissimo ma garantirà il perdurare del malumore quanto meno fino al giorno successivo al suo compleanno. Poi, se proprio necessario, potremo anche rappacificarsi! Tramoschio è un'azione diabolica, è pura maligna creatività, è l'arte di inventare un litigio anche se non ce n'è bisogno. E non è difficile fantasticare sulle innumerevoli occasioni in cui usarlo facendo emergere la parte più bassa di noi. Con un bel tramoschio al momento giusto possiamo far fuori un socio, un amico, un partner. Si può utilizzare come accessorio prezioso nella pratica del mobbing o come arma per destabilizzare intere comunità, nazioni, fino a far scoppiare vere e proprie guerre mondiali."
  },
  {
    "name": "♦ TRANVASSO",
    "categoria": "parcheggiologia.",
    "definizione": "parcheggio sufficientemente incivile, davanti o tra i bidoni della spazzatura"
  },
  {
    "name": "♦ TRIFÙ",
    "categoria": "neo-oggettistica.",
    "definizione": "piccolo piedistallo metallico e arrugginito, generalmente introvabile, dello zampirone antizanzare. 145"
  },
  {
    "name": "♦ TRIFUSCHIO",
    "categoria": "psicologia degli oggetti.",
    "definizione": "starnuto che arriva allo scattare del semaforo verde. Fermi al semaforo, il trifuschio è lo starnuto che arriva proprio allo scattare del verde: fulmina gli acceleratori selvaggi, brucia le ripartenze da Formula Uno e manda in tilt ogni coordinazione tra leva del cambio, frizione e fazzolettini da scartare, mentre i clacson assordanti ci umiliano e ci strombazzano dietro. Qualche volta starnuto e semaforo verde coincidono con lo squ illo del telefono, che perfidamente ama associarsi per peggiorare la situazione. La casistica annovera anche esempi di trifuschio con spegnimento del motore e, in casi particolarmente infausti, include addirittura un bel tamponamento finale."
  },
  {
    "name": "♦ TROLLINO",
    "categoria": "neo-oggettistica.",
    "definizione": "cerchietto di plastica rigida che sta dentro i rotolini dello scotch. 146"
  },
  {
    "name": "♦ TURBIMONIO",
    "categoria": "antropologia del malessere.",
    "definizione": "tempesta emotiva che precede un litigio. Il big bang si prepara furioso, i pensieri vorticano, consolidano e gonfiano il senso di giustizia per il quale stiamo per batterci. Sono cannonate tuonanti che riaprono continuamente storia e controstoria della diatriba , incontrollabili frammenti di real tà e immagina zione, dove rumina senza sosta la mente . La faccia è calda e arrossata. E poi l'ennesimo ripasso generale di tutte le argomentazioni e tesi da sostenere. Qualche volta ci si aiuta con foglietto e penna, numerando i capitoli della guerra, non di rado si cancella e si straccia tutto, e soli in macc hina, si fanno le prove generali da recitare, proprio come in teatro. Ma il nemico è vicino, è giunta l'ora di batterci, siamo finalmente pronti e preparati all'attacco, così stremati dal turbimonio da rischiare di perdere la partita."
  },
  {
    "name": "♦ UBANA MARRA",
    "categoria": "teatrini quotidiani.",
    "definizione": "reciproco e volontario fingere di non essersi visti. Non tutti quelli che non si salutano hanno litigato e non tutti quelli che hanno litigato non si salutano. Camminando scorgiamo distrattamente una persona conosciuta che fa lo stesso nostro percorso in senso contrario, sembra proprio venirci incontro: ci ha visto? e soprattutto, sa che lo abbiamo visto? Parimenti non abbiamo né tempo né voglia di fermarci a parlare. Nulla di male è successo tra noi, probabilmente neanche nulla di troppo bene. Fatto sta che è tanto che non ci si incontrava e bisognerebbe manifestare un certo entusiasmo nell'esserci ritrovati così, casualmente. Ma ora, in perfetta sintonia di sentimenti, siamo due specchi che riflettono la stessa realtà: non abbiamo voglia di fermarci e non abbiamo voglia di far capire all'altro di essere così asociali da non avere voglia di fermarci. Non c'è altro da fare che abbassare gli occhi e avanzare con la fretta e l'indifferenza degli uomini che corrono con la vita. Nessuno potrà mai sapere cosa l'altro abbia detto o pensato. Come fantasmi metropolitani ci dissolviamo in una nebbia che non sa più di niente. 150"
  },
  {
    "name": "♦ URFIO",
    "categoria": "neo-oggettistica.",
    "definizione": "rifiuto domestico non identificato, che non si capisce a quale categoria di indifferenziata appartenga."
  },
  {
    "name": "♦ VESPASIONE",
    "categoria": "personologia.",
    "definizione": "persona che prova superbo godimento nello sfoggiare il proprio inglese in luoghi pubblici. Le sette meraviglie dell'universo confluiscono in un fiume travolgente di orgasmo senza fine. Sussultano le labbra con fremiti e brividi di gioia, la bocca e tutto l'apparato linguale segue e adatta all'occasione una postura plastica angloamericana. La voc e è alta perché tutti, ma proprio tutti, possano ammirare la disinvoltura del vespasione nel parlare in inglese. Purtroppo da solo a casa non può godere appieno dei risultati, sudato frutto di centinaia di corsi tra Toefl, Academic, Trinity, First, Pet, Cambridge, General training, e dei continui viaggi nelle terre dell'estremo nord. Estasiato da se stesso, sfodera come uno sciabolone il suo parlare così straniero. Ogni luogo pubblico è un'occasione d'oro per eccitarsi con questi affascinanti fonemi per i q uali sbava, soprattutto quando vede le pubblicità dei profumi e dice lockdown. Il vespasione non ama la solitudine ed è sempre in cerca, oltre che di un pubblico, di altri vespasioni, così da poter sbandierare meglio queste conferenze, fare pratica di angl o-conversazione (che è sempre utile), sbalordire nonne, zie e nipoti che non capiscono ma guardando sbigottiti. Al 154 parco i vespasioni raggiungono l'apoteosi nel tentativo di essere scambiati per degli autentici non-italiani. C'è addirittura chi finge di av er dimenticato l'italiano dopo un soggiorno a Londra. Si danno appuntamento la domenica mattina per praticare questo sport, continuando poi a casa a guardare film in lingua originale, imparare testi di canzoni idiote, condannando anche i loro figli a diven tare piccoli vespasioni con la scusa che fa bene al loro futuro."
  },
  {
    "name": "♦ VICOVAZZI",
    "categoria": "neo-oggettistica.",
    "definizione": "posti della casa normalmente sporchi e impolverati (sopra l'armadio, dietro il frigorifero dietro i quadri, ecc.)."
  },
  {
    "name": "♦ VIRZULGO",
    "categoria": "psicologia degli oggetti.",
    "definizione": "attrazione del vino rosso verso le tovaglie bianche."
  },
  {
    "name": "♦ ZANZURIO",
    "categoria": "teatrini quotidiani.",
    "definizione": "reciproci rapidi e continui cambi di direzione nel tentativo di evitare di ritrovarsi faccia a faccia con persone che si intersecano sul nostro cammino. Siamo al supermercato, alla posta, su un marciapiede o dove vi pare. L'unica cosa certa è che un essere umano proveniente dall'altro senso di marcia ci sta piombando addosso con tutta la sua fretta quotidiana, ostruendo il passaggio e minacciando uno scontro frontale tra pedoni. Ma anche noi per lui siamo lo stesso essere sconosciuto dalla rotta impazzita e, come gemelli idioti in uno specchio, cominciamo con passetti laterali ad invertire il passo per ritrovarci sempre uno di fronte all'altro. Il numero di questi equivoci può essere molto alto e la fine dello zanzurio avviene solo quando, tra sorrisetti stupidi e imbarazzati, entrambi ci si accorge di aver iniziato un nuovo balletto folklori stico che sarà meglio concludere per andare ognuno per la sua strada."
  },
  {
    "name": "♦ ZEPPINELLI",
    "categoria": "neo-oggettistica.",
    "definizione": "insieme di materiali di scarto spezzettati per coprire i numeri estratti sulle cartelle della tombola. 158 Bucce di mandarino, di noce , fagioli secchi, lenticchie o pezzetti di carta; ognuno si ingegna come può per coprire i numeri estratti sulle cartelle della tombola. Per chiamarli di solito ci si capisce a gesti o con termini non esaustivi, ma gli zeppinelli sono preziosi: destinati s ì, ai secchi dell'umido o della carta, ma per qualche ora nei giorni di festa sono così importanti che hanno pieno diritto di avere un nome."
  },
  {
    "name": "♦ ZIGNO",
    "categoria": "neo-oggettistica.",
    "definizione": "capo dello scotch trasparente da cercare nel suo rotolino."
  }
];

// Transform and export the neologisms data
export const neologisms: Neologism[] = transformNeologismData(rawNeologismsData);

// Export utility functions
export const getNeologismById = (id: number): Neologism | undefined => {
  return neologisms.find(n => n.id === id);
};

export const getNeologismsByCategory = (categoria: string): Neologism[] => {
  return neologisms.filter(n => n.categoria === categoria);
};

export const getCategories = (): string[] => {
  return Array.from(new Set(neologisms.map(n => n.categoria))).sort();
};

export const searchNeologisms = (query: string): Neologism[] => {
  const lowercaseQuery = query.toLowerCase();
  return neologisms.filter(n => 
    n.name.toLowerCase().includes(lowercaseQuery) ||
    n.definizione.toLowerCase().includes(lowercaseQuery) ||
    n.categoria.toLowerCase().includes(lowercaseQuery)
  );
};
