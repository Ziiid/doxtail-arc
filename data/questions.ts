export type Answer = "ok" | "warning" | "stop" | null;

export interface Question {
  id: string;
  category: string;
  categoryLabel: string;
  question: string;
  help: string;
  options: {
    ok: string;
    warning: string;
    stop: string;
  };
}

export const categories = [
  { id: "A", label: "Strategi & styrning" },
  { id: "B", label: "Data: grundförutsättningar" },
  { id: "C", label: "Masterdata & metadata" },
  { id: "D", label: "Plattform & arkitektur" },
  { id: "E", label: "Governance & policy" },
  { id: "F", label: "Juridik & compliance" },
  { id: "G", label: "Säkerhet" },
  { id: "H", label: "Organisation & arbetssätt" },
  { id: "I", label: "Kompetens" },
  { id: "J", label: "Beslutsberedskap" },
];

export const questions: Question[] = [
  // ARC A – Strategi & styrning
  {
    id: "A1",
    category: "A",
    categoryLabel: "Strategi & styrning",
    question: "Har organisationen ett uttalat syfte med AI – varför vill ni använda det?",
    help: "Inte vad ni ska bygga, utan varför. Vilket problem löser AI för er?",
    options: {
      ok: "Ja, tydligt dokumenterat och förankrat i ledningen",
      warning: "Informellt syfte finns, men inte formaliserat",
      stop: "Nej, eller 'vi vill hänga med i utvecklingen'",
    },
  },
  {
    id: "A4",
    category: "A",
    categoryLabel: "Strategi & styrning",
    question: "Finns det en exekutiv sponsor med mandat att fatta beslut om AI?",
    help: "Någon som kan säga ja, säga nej och ta ansvar när det blir svårt.",
    options: {
      ok: "Ja, namngiven person med tydligt mandat",
      warning: "Delat ansvar eller symbolisk sponsor",
      stop: "Nej, ingen har det ansvaret",
    },
  },
  {
    id: "A5",
    category: "A",
    categoryLabel: "Strategi & styrning",
    question: "Har ni beslutat vad AI INTE får göra i er organisation?",
    help: "Mognad = förmågan att sätta gränser. Finns förbjudna use cases dokumenterade?",
    options: {
      ok: "Ja, tydliga begränsningar är beslutade och dokumenterade",
      warning: "'Vi får se' – diskussionen pågår",
      stop: "Nej, allt är möjligt eller frågan har inte ställts",
    },
  },

  // ARC B – Data: grundförutsättningar
  {
    id: "B11",
    category: "B",
    categoryLabel: "Data: grundförutsättningar",
    question: "Vet organisationen vilka datakällor som är affärskritiska?",
    help: "Vilka 5–10 system skulle skada verksamheten mest om datan var fel?",
    options: {
      ok: "Ja, dokumenterad lista med ägare per system",
      warning: "Delvis känt, men oenighet eller saknade ägare",
      stop: "Nej, eller 'det beror på vem du frågar'",
    },
  },
  {
    id: "B14",
    category: "B",
    categoryLabel: "Data: grundförutsättningar",
    question: "Är kända datakvalitetsproblem identifierade och dokumenterade?",
    help: "Vet verksamheten var datan är opålitlig, ofullständig eller inaktuell?",
    options: {
      ok: "Ja, kartlagda och hanterade med kända workarounds",
      warning: "Problemen är kända men inte dokumenterade",
      stop: "Nej, eller 'vår data är bra' utan underlag",
    },
  },
  {
    id: "B20",
    category: "B",
    categoryLabel: "Data: grundförutsättningar",
    question: "Är känslig och personrelaterad data identifierad i era system?",
    help: "Vet ni var personuppgifter och känslig affärsdata finns – och vem som äger den?",
    options: {
      ok: "Ja, kartlagd med klassificering och ägarskap",
      warning: "Delvis känt, men luckor finns",
      stop: "Nej, eller ingen har haft uppdraget att ta reda på det",
    },
  },

  // ARC C – Masterdata & metadata
  {
    id: "C24",
    category: "C",
    categoryLabel: "Masterdata & metadata",
    question: "Finns det utsedda dataägare per domän (kund, produkt, ekonomi etc.)?",
    help: "Någon som är ansvarig för att datan är korrekt och används rätt.",
    options: {
      ok: "Ja, formellt utsedda med definierat ansvar",
      warning: "Informellt – 'alla vet' vem det är",
      stop: "Nej, ingen äger datan formellt",
    },
  },
  {
    id: "C25",
    category: "C",
    categoryLabel: "Masterdata & metadata",
    question: "Finns det metadata som beskriver er data (miniminivå)?",
    help: "Kan en ny person förstå vad ett datafält innehåller och var det kommer ifrån?",
    options: {
      ok: "Ja, metadata finns och underhålls",
      warning: "Sporadiskt – beror på system eller person",
      stop: "Nej, datan är självförklarande 'för den som känner systemet'",
    },
  },
  {
    id: "C30",
    category: "C",
    categoryLabel: "Masterdata & metadata",
    question: "Finns det ett tydligt ansvar för datakvalitet i organisationen?",
    help: "Vem rapporterar när data är fel? Vem åtgärdar det?",
    options: {
      ok: "Ja, definierade roller och processer",
      warning: "Ad hoc – hanteras när problem uppstår",
      stop: "Nej, datakvalitet är IT:s problem",
    },
  },

  // ARC D – Plattform & arkitektur
  {
    id: "D31",
    category: "D",
    categoryLabel: "Plattform & arkitektur",
    question: "Vet organisationen var data lagras – on-prem, moln eller hybrid?",
    help: "Grundläggande för att kunna fatta beslut om AI-leverantörer och datadelning.",
    options: {
      ok: "Ja, dokumenterad och känd i organisationen",
      warning: "Delvis känt, men inte fullständigt kartlagt",
      stop: "Nej, eller spridd kunskap hos enskilda individer",
    },
  },
  {
    id: "D36",
    category: "D",
    categoryLabel: "Plattform & arkitektur",
    question: "Är test- och produktionsmiljöer separerade?",
    help: "AI-experiment ska inte kunna påverka produktionsdata.",
    options: {
      ok: "Ja, tydlig separation med kontrollerad åtkomst",
      warning: "Delvis – separerat för vissa system",
      stop: "Nej, eller 'vi är försiktiga'",
    },
  },
  {
    id: "D39",
    category: "D",
    categoryLabel: "Plattform & arkitektur",
    question: "Används rollbaserad åtkomst konsekvent i era system?",
    help: "Kan ni begränsa vem som ser och använder vilken data – tekniskt, inte bara policymässigt?",
    options: {
      ok: "Ja, implementerat och aktivt underhållet",
      warning: "Delvis – varierar mellan system",
      stop: "Nej, eller åtkomst styrs av tillit snarare än teknik",
    },
  },

  // ARC E – Governance & policy
  {
    id: "E43",
    category: "E",
    categoryLabel: "Governance & policy",
    question: "Är persondata identifierad och hanterad enligt GDPR?",
    help: "Vet ni var personuppgifter finns, vem som är personuppgiftsansvarig och vad ni får göra med dem?",
    options: {
      ok: "Ja, dokumenterat och aktivt hanterat",
      warning: "Delvis – GDPR-arbete pågår men inte klart",
      stop: "Nej, eller 'vi hanterar inga personuppgifter'",
    },
  },
  {
    id: "E48",
    category: "E",
    categoryLabel: "Governance & policy",
    question: "Är ansvaret definierat om ett AI-system fattar ett felaktigt beslut?",
    help: "Vem äger konsekvensen? Vem informeras? Vem åtgärdar?",
    options: {
      ok: "Ja, tydlig RACI och incidentprocess",
      warning: "Diskuterat men inte formaliserat",
      stop: "Nej, frågan har inte ställts",
    },
  },
  {
    id: "E50",
    category: "E",
    categoryLabel: "Governance & policy",
    question: "Finns det en stop-mekanism – kan ni stänga av ett AI-system snabbt?",
    help: "Om ett AI-system beter sig fel: kan ni stoppa det inom timmar, inte veckor?",
    options: {
      ok: "Ja, definierad process och teknisk möjlighet",
      warning: "Teoretiskt möjligt men inte testat",
      stop: "Nej, eller 'det har aldrig hänt'",
    },
  },

  // ARC F – Juridik & compliance
  {
    id: "F51",
    category: "F",
    categoryLabel: "Juridik & compliance",
    question: "Är GDPR-ansvaret tydligt definierat för AI-relaterad databehandling?",
    help: "Vem är personuppgiftsansvarig när AI behandlar persondata? Finns biträdesavtal med leverantörer?",
    options: {
      ok: "Ja, definierat med avtal och dokumentation",
      warning: "Delvis – GDPR hanteras men AI-specifika frågor är oklara",
      stop: "Nej, eller juridik är inte involverad i AI-frågor",
    },
  },
  {
    id: "F55",
    category: "F",
    categoryLabel: "Juridik & compliance",
    question: "Är det beslutat vilken publik AI (ChatGPT, Copilot etc.) anställda får använda?",
    help: "Används publik AI i vardagen? Vet anställda vad de får och inte får göra?",
    options: {
      ok: "Ja, tydlig policy med godkända verktyg",
      warning: "Informell praxis – 'sunt förnuft gäller'",
      stop: "Nej, eller ingen vet vad som faktiskt används",
    },
  },
  {
    id: "F57",
    category: "F",
    categoryLabel: "Juridik & compliance",
    question: "Har ni gjort riskbedömning för automatiserade beslut som påverkar individer?",
    help: "EU AI Act kräver detta för högrisk-AI. Rekrytering, kreditbedömning, övervakning = högrisk.",
    options: {
      ok: "Ja, genomförd och dokumenterad",
      warning: "Pågår eller planerad",
      stop: "Nej, eller vi vet inte om vi behöver",
    },
  },

  // ARC G – Säkerhet
  {
    id: "G62",
    category: "G",
    categoryLabel: "Säkerhet",
    question: "Används stark autentisering (MFA) konsekvent i organisationen?",
    help: "Gäller för system som hanterar data som AI ska använda eller producera.",
    options: {
      ok: "Ja, MFA används i alla kritiska system",
      warning: "Delvis – MFA finns men inte konsekvent",
      stop: "Nej, eller bara för IT-personal",
    },
  },
  {
    id: "G67",
    category: "G",
    categoryLabel: "Säkerhet",
    question: "Finns ett beslut om vilken data som aldrig får användas för AI-träning?",
    help: "Patientdata, affärshemligheter, personuppgifter – är gränserna satta?",
    options: {
      ok: "Ja, dokumenterat beslut med tekniska kontroller",
      warning: "Informell förståelse men inte formaliserat",
      stop: "Nej, frågan är inte ställd",
    },
  },
  {
    id: "G70",
    category: "G",
    categoryLabel: "Säkerhet",
    question: "Har organisationen genomfört incidentövningar som inkluderar AI-relaterade scenarier?",
    help: "T.ex. dataläckage via AI-verktyg, felaktiga AI-beslut i drift, prompt injection.",
    options: {
      ok: "Ja, övningar genomförda och dokumenterade",
      warning: "Generella incidentövningar finns men inte AI-specifika",
      stop: "Nej, inga övningar genomförda",
    },
  },

  // ARC H – Organisation & arbetssätt
  {
    id: "H71",
    category: "H",
    categoryLabel: "Organisation & arbetssätt",
    question: "Finns ett tydligt produktägarskap för data och AI-initiativ?",
    help: "Någon som äger prioritering, backlog och leverans – inte bara tekniken.",
    options: {
      ok: "Ja, namngiven produktägare med mandat",
      warning: "Delat ägarskap eller otydliga roller",
      stop: "Nej, IT äger allt eller ingen äger något",
    },
  },
  {
    id: "H73",
    category: "H",
    categoryLabel: "Organisation & arbetssätt",
    question: "Finns en godkännandeprocess för nya AI-use cases?",
    help: "Vem beslutar att ett nytt AI-initiativ får startas? Vilka kriterier gäller?",
    options: {
      ok: "Ja, definierad process med tydliga kriterier",
      warning: "Informell – beslut tas ad hoc",
      stop: "Nej, vem som helst kan starta AI-projekt",
    },
  },
  {
    id: "H80",
    category: "H",
    categoryLabel: "Organisation & arbetssätt",
    question: "Har organisationen mandat och kultur att säga nej till AI-initiativ?",
    help: "Kan verksamheten stoppa ett AI-projekt utan att det ses som motstånd mot förändring?",
    options: {
      ok: "Ja, nej är ett legitimt och respekterat svar",
      warning: "Svårt i praktiken – press att hänga med",
      stop: "Nej, alla AI-idéer ska realiseras",
    },
  },

  // ARC I – Kompetens
  {
    id: "I81",
    category: "I",
    categoryLabel: "Kompetens",
    question: "Har ledningen grundläggande förståelse för vad AI kan och inte kan göra?",
    help: "Kan ledningen ställa rätt frågor och förstå riskerna – utan att vara tekniker?",
    options: {
      ok: "Ja, ledningen är orienterad och aktivt engagerad",
      warning: "Viss förståelse, men ojämn eller ytlig",
      stop: "Nej, AI är 'IT:s grej'",
    },
  },
  {
    id: "I84",
    category: "I",
    categoryLabel: "Kompetens",
    question: "Finns förståelse för bias, fel och osäkerhet i AI-system?",
    help: "Vet organisationen att AI kan ha systematiska fel och hur man hanterar det?",
    options: {
      ok: "Ja, aktivt hanterat med kontroller",
      warning: "Teoretisk förståelse men inga kontroller",
      stop: "Nej, eller 'AI är objektiv'",
    },
  },
  {
    id: "I90",
    category: "I",
    categoryLabel: "Kompetens",
    question: "Vågar organisationen stoppa AI-initiativ av kompetensskäl?",
    help: "Kan ni säga 'vi har inte kompetensen för detta just nu'?",
    options: {
      ok: "Ja, det har hänt och det accepteras",
      warning: "Svårt – externt tryck gör det politiskt känsligt",
      stop: "Nej, att stoppa = att misslyckas",
    },
  },

  // ARC J – Beslutsberedskap
  {
    id: "J91",
    category: "J",
    categoryLabel: "Beslutsberedskap",
    question: "Kan organisationen säga nej till AI idag – med gott samvete?",
    help: "Finns det en gemensam förståelse för att 'inte nu' är ett legitimt strategiskt beslut?",
    options: {
      ok: "Ja, vi kan motivera ett nej utan att det ifrågasätts",
      warning: "Möjligt men politiskt svårt",
      stop: "Nej, vi måste använda AI",
    },
  },
  {
    id: "J97",
    category: "J",
    categoryLabel: "Beslutsberedskap",
    question: "Mäts och följs faktisk nytta av AI-initiativ upp?",
    help: "Vet ni om era AI-satsningar faktiskt levererar värde – i siffror, inte känsla?",
    options: {
      ok: "Ja, definierade mätpunkter och uppföljningsprocess",
      warning: "Kvalitativt – 'det verkar fungera bra'",
      stop: "Nej, vi mäter inte nyttan",
    },
  },
  {
    id: "J100",
    category: "J",
    categoryLabel: "Beslutsberedskap",
    question: "Har organisationen mod att vänta med AI tills förutsättningarna är rätt?",
    help: "Mognad är att veta när man inte är redo. Finns den kulturen?",
    options: {
      ok: "Ja, vi väntar hellre än att göra det fel",
      warning: "Vi vet att vi borde men hinner inte",
      stop: "Nej, vi måste agera nu oavsett",
    },
  },
];
