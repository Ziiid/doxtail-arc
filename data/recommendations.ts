export type ScoreLevel = "low" | "medium" | "high";

export function scoreLevel(pct: number): ScoreLevel {
  if (pct >= 67) return "high";
  if (pct >= 34) return "medium";
  return "low";
}

type CategoryRec = {
  low: string;
  medium: string;
  high: string;
};

export const categoryRecommendations: Record<string, CategoryRec> = {
  A: {
    low: "Kritiskt: Er organisation saknar grundläggande strategisk styrning för AI. AI-initiativ utan tydligt affärsmål, exekutiv sponsor och definierad riskaptit riskerar att bli fragmenterade och svåra att följa upp. Prioritera: formulera ett verksamhetsägt AI-syfte, utse en sponsor med faktiskt mandat och besluta vilka use cases som ska prioriteras.",
    medium: "Delvis på plats: Det finns strategiska ambitioner men luckor i styrningen. Säkerställ att AI-initiativ är kopplade till mätbara affärsmål (inte teknik), att det finns en tydlig sponsor som kan fatta beslut, och att ni har beslutat vad AI INTE ska användas till.",
    high: "God strategisk grund: Ni har etablerat tydlig AI-styrning med verksamhetsförankrade mål, exekutivt ägarskap och prioriterade use cases. Fortsätt bevaka riskaptit och säkerställ att ansvar för konsekvenser är tydliggjort när AI-initiativ skalas upp.",
  },
  B: {
    low: "Kritiskt: Datagrunden är otillräcklig för säker AI-användning. Om organisationen inte vet vilka datakällor som är affärskritiska, saknar dokumentation eller har låg tillit till datan, riskerar AI att förstärka befintliga fel och skapa falsk precision. Börja med att kartlägga de 5–10 system som driver affären mest.",
    medium: "Delvis på plats: Det finns viss datakontroll men kvalitetsproblem och dokumentationsluckor kvarstår. Säkerställ att affärskritiska datakällor är dokumenterade, att kända datakvalitetsproblem är identifierade, och att verksamheten faktiskt litar på datan som beslutsunderlag.",
    high: "God datagrund: Ni har tillräcklig förståelse, kontroll och tillit till er data för att möjliggöra AI-användning. Se till att denna grund är levande – datakvalitet försämras utan aktiv förvaltning.",
  },
  C: {
    low: "Kritiskt: Avsaknad av gemensamma definitioner av kund, produkt och nyckeltal, kombinerat med otydligt dataägarskap, leder till parallella sanningar. AI som byggs på en sådan grund är svår att förklara, försvara och lita på. Utse dataägare per domän och etablera en gemensam definition av era viktigaste affärsbegrepp.",
    medium: "Delvis på plats: Definitioner och ägarskap börjar ta form men är inte tillräckligt styrda eller dokumenterade. Fokusera på att formalisera ägarskapet, säkerställa att begrepp är enhetliga över system och att dokumentationen hålls aktuell.",
    high: "God masterdata-mognad: Ni har gemensamma definitioner, tydliga dataägare och spårbarhet. Detta är en stark förutsättning för transparenta och försvarbara AI-beslut i linje med EU AI Act.",
  },
  D: {
    low: "Kritiskt: Oklar arkitektur och svag teknisk kontroll gör AI-initiativ svåra att styra, säkra och skala. Om ni inte vet var data lagras, saknar separerade miljöer eller konsekvent rollbaserad åtkomst, ökar risken för säkerhetsincidenter och NIS2-bristande efterlevnad markant.",
    medium: "Delvis på plats: Plattformen finns men kontroll och styrbarhet är inte fullt ut på plats. Prioritera separation av test- och produktionsmiljöer, konsekvent rollbaserad åtkomst och en tydlig (om än grov) målarkitektur.",
    high: "God teknisk plattform: Ni har kontroll över var data lagras, kan begränsa åtkomst och har en styrd plattform med loggning och spårbarhet. Se till att målarkitekturen hålls levande i takt med att AI-användningen växer.",
  },
  E: {
    low: "Kritiskt: Utan tydlig governance riskerar AI-användning att ske utan ansvarskedja – något som kan få allvarliga konsekvenser vid tillsyn eller incident. Utse formella dataägare, inför informationsklassning och skapa stop-mekanismer för att kunna pausa AI-beslut vid behov.",
    medium: "Delvis på plats: Governance-strukturen börjar ta form men är inte konsekvent tillämpad. Säkerställ spårbarhet från AI-beslut till underliggande data, att ansvar vid felaktiga beslut är definierat och att det finns ett aktivt governance-forum.",
    high: "God governance: Ni har etablerade ramar för hur data och AI får användas, med tydliga beslutsvägar och stop-mekanismer. Detta minskar risk vid tillsyn och skapar förtroende internt och externt.",
  },
  F: {
    low: "Kritiskt: Bristande juridisk beredskap för AI innebär inte bara ökad risk – det kan innebära faktiska regelbrott mot GDPR och EU AI Act. Prioritera: klargör GDPR-ansvar, upprätta eller uppdatera ROPA, säkerställ att avtal med AI-leverantörer reglerar datanvändning och ta beslut om publik AI får användas.",
    medium: "Delvis på plats: Grundläggande juridisk beredskap finns men luckor kvarstår. Se till att riktlinjer för anställdas AI-användning är på plats, att riskbedömning för automatiserade beslut är genomförd och att incidentrapporteringsrutiner finns.",
    high: "God juridisk beredskap: Ni har kontroll över GDPR, leverantörsavtal och automatiserade beslut. Bevaka EU AI Act-krav löpande då regelverket fortsätter att konkretiseras.",
  },
  G: {
    low: "Kritiskt: Otillräcklig säkerhetsmognad gör AI till en ny attackyta. Utan konsekvent åtkomststyrning, loggning och skydd mot dataläckage riskerar ni allvarliga incidenter och brister mot NIS2-krav. Prioritera MFA, rollbaserad åtkomst på datanivå och loggning som kan granskas.",
    medium: "Delvis på plats: Grundläggande säkerhet finns men är inte konsekvent implementerad. Fokusera på skydd mot dataläckage (DLP), beslut om vilken data som aldrig får användas för träning av AI, och genomför incidentövningar.",
    high: "God säkerhetsmognad: Ni har åtkomststyrning, loggning och incidentberedskap på plats. Säkerställ att externa AI-modeller granskas regelbundet och att skydd mot prompt-läckage är aktivt.",
  },
  H: {
    low: "Kritiskt: Utan organisatorisk förankring stannar AI vid piloter. Om det saknas tydligt produktägarskap, rollfördelning och förändringsledning riskerar AI-initiativ att kringgå styrning eller skapa motstånd. Utse en tydlig ägare för data och AI, klargör gränsen mellan IT och verksamhet, och avsätt tid i linjeorganisationen.",
    medium: "Delvis på plats: Ägarskap och roller börjar ta form men förändringsledning och realistiska förväntningar behöver stärkas. Säkerställ att intern kommunikation kring AI är aktiv och att det finns mandat att säga nej till AI-initiativ som inte håller måttet.",
    high: "God organisatorisk mognad: Ni har tydligt ägarskap, rollfördelning och förmåga att bära AI i linjeverksamheten. Detta är en förutsättning för att EU AI Acts krav på mänsklig kontroll ska kunna uppfyllas i praktiken.",
  },
  I: {
    low: "Kritiskt: Om ledningen inte förstår AI:s möjligheter och begränsningar, och verksamheten saknar grundläggande dataförståelse, kan organisationen inte fatta informerade eller försvarbara AI-beslut. Det handlar inte om att alla ska vara experter – men ledningen måste kunna ställa rätt frågor och förstå svaren.",
    medium: "Delvis på plats: Grundläggande förståelse finns men kompetensutveckling är inte strukturerad. Säkerställ att det finns en plan för kompetensutveckling, tydligt ansvar för lärande och att organisationen har realistisk syn på sin AI-mognad.",
    high: "God kompetensbas: Ni har AI-förståelse i ledningen, dataförståelse i verksamheten och tydlig partnerstrategi. Fortsätt investera i lärande – AI-kompetensbehovet förändras i takt med att tekniken och regelverken utvecklas.",
  },
  J: {
    low: "Kritiskt: Låg beslutsberedskap innebär att AI-beslut fattas utan tillräcklig struktur, uppföljning eller ansvarskedja. Om organisationen inte kan säga nej, saknar beslutsordning eller inte följer upp AI i drift, agerar man reaktivt snarare än kontrollerat. Definiera förbjudna use cases, dokumentera beslutsordningen och säkerställ att AI-beslut följs upp.",
    medium: "Delvis på plats: Ni kan fatta beslut men strukturen för uppföljning och ansvarsutkrävande behöver stärkas. Säkerställ att faktisk nytta mäts, att ansvar är tydligt om AI gör fel, och att det finns en exit-strategi.",
    high: "Hög beslutsberedskap: Ni agerar med kontroll och långsiktighet i AI-frågor. Förmågan att säga nej, följa upp AI i drift och planera för avveckling är det tydligaste tecknet på verklig AI-mognad – och det har ni.",
  },
};

export const overallInsight: Record<ScoreLevel, { title: string; text: string }> = {
  low: {
    title: "Tidigt stadie – viktiga grunder saknas",
    text: "Er organisation har ännu inte de grundläggande förutsättningarna på plats för ansvarsfull AI-användning. Det handlar inte om teknik – det handlar om styrning, data och ansvar. Utan dessa grunder riskerar AI-initiativ att skapa mer problem än värde. En strukturerad genomgång med externa experter är ett naturligt nästa steg.",
  },
  medium: {
    title: "På väg – rätt ambition, men luckor kvarstår",
    text: "Er organisation har kommit en bra bit på vägen och har rätt ambitioner, men det finns tydliga luckor i styrning, datahantering eller juridisk beredskap som behöver åtgärdas innan AI kan användas i full skala. Fokusera på de röda och gula områdena – de utgör er faktiska risknivå idag.",
  },
  high: {
    title: "God AI-mognad – redo att agera kontrollerat",
    text: "Er organisation har en stark grund för ansvarsfull AI-användning. Styrning, data och kompetens är tillräckligt mogna för att ta nästa steg med kontroll. Använd resultatet för att prioritera de kvarvarande förbättringsområdena och säkerställ att mognadsnivån hålls levande i takt med att AI-användningen växer.",
  },
};
