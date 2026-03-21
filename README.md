Vad du byggt – och hur
Du har skapat en webbapplikation som är publikt tillgänglig på internet. Här är en genomgång av alla delar:

Vad är det egentligen?
En interaktiv webbsite där besökare svarar på 30 frågor om sin organisations AI-mognad, fyller i kontaktuppgifter och får ett visuellt resultat med poäng per kategori. Du som ägare får ett mail med leadets uppgifter varje gång någon genomför checken.

Verktygen och vad de gör
Next.js (React)
Ramverket som bygger själva webbsiten. React är ett JavaScript-bibliotek från Meta för att bygga interaktiva gränssnitt – knapparna, formulären, animationerna. Next.js är ett lager ovanpå React som hanterar routing (olika sidor), API-anrop på servern, och optimerad driftsättning. Inget Python är inblandat – allt är JavaScript/TypeScript.

TypeScript
En variant av JavaScript med typsäkerhet – hjälper till att fånga fel tidigt under utveckling.

Tailwind CSS
Ett CSS-ramverk för styling. Istället för att skriva separat CSS-kod skriver man klasser direkt i HTML-koden (bg-white, rounded-xl osv). Det är det som gör att siten ser ut som den gör – mörkt tema, rundade hörn, spacing.

Recharts
Ett diagram-bibliotek för React. Det är det som ritar radardiagrammet på resultatsidan.

Resend
En e-posttjänst med ett enkelt API. När någon skickar in formuläret anropar applikationen Resend, som i sin tur skickar ett HTML-mail till din Gmail. Resend hanterar allt det tekniska med e-postleverans (SPF, DKIM osv).

GitHub
Där källkoden lagras. Fungerar som ett versionshanteringssystem – varje ändring sparas som en "commit" med historik. Det är också länken mellan din dator och Vercel.

Vercel
Värdtjänsten som gör siten tillgänglig på internet. Varje gång du pushar kod till GitHub märker Vercel det automatiskt, bygger om applikationen och driftsätter den. Du behöver ingen egen server – Vercel kör allt i molnet och skalar automatiskt.

VS Code + Claude Code
Utvecklingsmiljön. VS Code är texteditorn, Claude Code är AI-assistenten som körs direkt i VS Code och kan läsa, skriva och köra kod åt dig.

Flödet i korthet

Du skriver kod lokalt (VS Code)
    → pushar till GitHub
        → Vercel bygger & driftsätter automatiskt
            → Besökare fyller i formulär på siten
                → Resend skickar mail till dig



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
