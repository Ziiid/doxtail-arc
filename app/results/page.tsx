"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { questions, categories, type Answer } from "@/data/questions";
import { categoryRecommendations, overallInsight, scoreLevel } from "@/data/recommendations";
import Link from "next/link";

const SCORE_MAP: Record<NonNullable<Answer>, number> = { ok: 2, warning: 1, stop: 0 };

function scoreLabel(pct: number) {
  if (pct >= 75) return { label: "AI-redo", color: "text-emerald-400", bg: "bg-emerald-400" };
  if (pct >= 50) return { label: "På väg", color: "text-amber-400", bg: "bg-amber-400" };
  if (pct >= 25) return { label: "Tidigt stadie", color: "text-orange-400", bg: "bg-orange-400" };
  return { label: "Inte redo", color: "text-red-400", bg: "bg-red-400" };
}

function categoryScore(catId: string, answers: Record<string, string>) {
  const qs = questions.filter(q => q.category === catId);
  const total = qs.reduce((sum, q) => {
    const a = answers[q.id] as Answer;
    return sum + (a ? SCORE_MAP[a] : 0);
  }, 0);
  const max = qs.length * 2;
  return Math.round((total / max) * 100);
}

function ResultsContent() {
  const params = useSearchParams();
  const [booked, setBooked] = useState(false);

  const answers: Record<string, string> = {};
  questions.forEach(q => {
    const v = params.get(q.id);
    if (v) answers[q.id] = v;
  });

  const company = params.get("company") || "";
  const contactName = params.get("contactName") || "";

  const totalScore = Object.values(answers).reduce((sum, a) => {
    return sum + (a in SCORE_MAP ? SCORE_MAP[a as NonNullable<Answer>] : 0);
  }, 0);
  const maxScore = questions.length * 2;
  const totalPct = Math.round((totalScore / maxScore) * 100);
  const { label, color } = scoreLabel(totalPct);

  const radarData = categories.map(cat => ({
    category: cat.id,
    fullLabel: cat.label,
    score: categoryScore(cat.id, answers),
  }));

  const stopPoints = questions.filter(q => answers[q.id] === "stop");
  const warningPoints = questions.filter(q => answers[q.id] === "warning");

  return (
    <main className="min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase">
            CAG Arete · AI Readiness Check
          </p>
          {company && (
            <p className="text-neutral-400 text-sm">{company}</p>
          )}
          <h1 className="text-4xl font-bold text-white">
            {contactName ? `${contactName.split(" ")[0]}s resultat` : "Ditt resultat"}
          </h1>
        </div>

        {/* Total score */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke={totalPct >= 75 ? "#34d399" : totalPct >= 50 ? "#fbbf24" : totalPct >= 25 ? "#fb923c" : "#f87171"}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - totalPct / 100)}`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-white">{totalPct}%</div>
            </div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${color}`}>{label}</div>
            <p className="text-neutral-400 text-sm mt-1 max-w-sm">
              Baserat på {Object.keys(answers).length} besvarade frågor inom 10 kategorier
            </p>
          </div>
        </div>

        {/* Radar chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-4">
            Score per område
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: "#9ca3af", fontSize: 13, fontWeight: 600 }}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#ffffff"
                fill="#ffffff"
                fillOpacity={0.08}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>

          {/* Category bars */}
          <div className="space-y-3 mt-4">
            {categories.map(cat => {
              const score = categoryScore(cat.id, answers);
              const { color: c, bg: b } = scoreLabel(score);
              return (
                <div key={cat.id} className="flex items-center gap-3">
                  <div className="w-6 text-xs font-bold text-neutral-500 text-right">{cat.id}</div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-neutral-300">{cat.label}</span>
                      <span className={`font-semibold ${c}`}>{score}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full transition-all duration-500 ${b}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Övergripande analys */}
        {(() => {
          const insight = overallInsight[scoreLevel(totalPct)];
          return (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2">
              <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
                Vad betyder ditt resultat?
              </h2>
              <p className="text-white font-semibold">{insight.title}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{insight.text}</p>
            </div>
          );
        })()}

        {/* Rekommendationer per kategori */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest px-1">
            Analys per område
          </h2>
          {categories.map(cat => {
            const score = categoryScore(cat.id, answers);
            const level = scoreLevel(score);
            const rec = categoryRecommendations[cat.id];
            if (!rec) return null;
            const text = rec[level];
            const borderColor = level === "low" ? "border-red-500/30" : level === "medium" ? "border-amber-500/30" : "border-emerald-500/30";
            const labelColor = level === "low" ? "text-red-400" : level === "medium" ? "text-amber-400" : "text-emerald-400";
            const levelLabel = level === "low" ? "Kritiskt" : level === "medium" ? "Förbättringsområde" : "God nivå";
            return (
              <div key={cat.id} className={`bg-white/5 border ${borderColor} rounded-xl p-4 space-y-1`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{cat.id} – {cat.label}</span>
                  <span className={`text-xs font-semibold ${labelColor}`}>{score}% · {levelLabel}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">{text}</p>
              </div>
            );
          })}
        </div>

        {/* STOPP-punkter */}
        {stopPoints.length > 0 && (
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-semibold text-red-400 uppercase tracking-widest">
              ❌ Kritiska stopp-punkter ({stopPoints.length})
            </h2>
            <p className="text-sm text-neutral-400">
              Dessa områden bör åtgärdas innan AI-initiativ skalas upp.
            </p>
            <div className="space-y-2">
              {stopPoints.map(q => (
                <div key={q.id} className="flex gap-3 text-sm">
                  <span className="text-red-400 font-mono text-xs pt-0.5 flex-shrink-0">{q.id}</span>
                  <span className="text-neutral-300">{q.question}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Varningar */}
        {warningPoints.length > 0 && (
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-widest">
              ⚠️ Riskområden att bevaka ({warningPoints.length})
            </h2>
            <div className="space-y-2">
              {warningPoints.map(q => (
                <div key={q.id} className="flex gap-3 text-sm">
                  <span className="text-amber-400 font-mono text-xs pt-0.5 flex-shrink-0">{q.id}</span>
                  <span className="text-neutral-300">{q.question}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Vad betyder ditt resultat – egentligen?
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto text-sm leading-relaxed">
            En AI Readiness Check ger dig bilden. CAG Arete hjälper dig förstå vad den betyder och vad du bör göra härnäst.
          </p>
          {booked ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-sm text-emerald-300 leading-relaxed">
              Tack för att du kontaktat CAG Arete. Vi kommer kontakta dig inom kort för att boka in en första konsultation rörande ert resultat av AI Readiness Check. Mvh / CAG Arete
            </div>
          ) : (
            <>
              <button
                onClick={async () => {
                  const email = params.get("email");
                  const name = params.get("contactName");
                  if (email) {
                    await fetch("/api/book", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email, name }),
                    }).catch(() => {});
                  }
                  setBooked(true);
                }}
                className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                Kontakta mig för en genomgång →
              </button>
            </>
          )}
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-400 transition-colors">
            ← Starta om checken
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center text-neutral-500">
        Laddar resultat...
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
