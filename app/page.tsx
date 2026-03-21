import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-3">
          <Image src="/doxtail_logo.png" alt="Doxtail" width={72} height={72} className="mx-auto" />
          <h1 className="text-5xl font-bold tracking-tight text-white">
            AI Readiness Check
          </h1>
          <p className="text-lg text-neutral-400 mt-4 leading-relaxed">
            30 frågor. 10 kategorier. En ärlig bild av hur redo din organisation är för AI – utan kostnad.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "~15 min", desc: "att genomföra" },
            { label: "10 områden", desc: "utvärderas" },
            { label: "Gratis", desc: "ingen inloggning" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">{item.label}</div>
              <div className="text-sm text-neutral-400 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="text-left bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
            Checken täcker
          </p>
          {[
            "Strategi & styrning",
            "Data: grundförutsättningar",
            "Masterdata & metadata",
            "Plattform & arkitektur",
            "Governance & policy",
            "Juridik & compliance (EU AI Act, NIS2, GDPR)",
            "Säkerhet",
            "Organisation & arbetssätt",
            "Kompetens",
            "Beslutsberedskap",
          ].map((area) => (
            <div key={area} className="flex items-center gap-3 text-sm text-neutral-300">
              <span className="text-emerald-400 text-xs">✓</span>
              {area}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Link
            href="/check"
            className="block w-full bg-white text-black font-semibold py-4 px-8 rounded-xl text-lg hover:bg-neutral-100 transition-colors"
          >
            Starta checken →
          </Link>
          <p className="text-xs text-neutral-500">
            Du får se ditt resultat direkt. Ingen betalning krävs.
          </p>
          {process.env.NODE_ENV === "development" && (
            <Link
              href="/results?A1=ok&A4=warning&A5=stop&B11=ok&B14=warning&B20=ok&C24=stop&C25=warning&C30=ok&D31=ok&D36=ok&D39=warning&E43=warning&E48=ok&E50=stop&F51=warning&F55=ok&F57=warning&G62=ok&G67=warning&G70=ok&H71=ok&H73=warning&H80=stop&I81=warning&I84=ok&I90=ok&J91=ok&J97=warning&J100=ok&company=Test+AB&contactName=Anna+Testsson&title=CTO&email=test@test.se&phone=0701234567"
              className="block w-full text-center py-2 rounded-xl border border-dashed border-white/20 text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              [DEV] Hoppa till resultat →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
