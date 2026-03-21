"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { questions, categories, type Answer } from "@/data/questions";

type Answers = Record<string, Answer>;

const ANSWER_CONFIG = {
  ok: { label: "Ja / OK", color: "border-emerald-500 bg-emerald-500/10 text-emerald-300", dot: "bg-emerald-400" },
  warning: { label: "Delvis / RISK", color: "border-amber-500 bg-amber-500/10 text-amber-300", dot: "bg-amber-400" },
  stop: { label: "Nej / STOPP", color: "border-red-500 bg-red-500/10 text-red-300", dot: "bg-red-400" },
};

export default function CheckPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  const currentAnswer = answers[currentQ.id];
  const categoryQuestions = questions.filter(q => q.category === currentQ.category);
  const categoryIndex = categoryQuestions.indexOf(currentQ) + 1;
  const catObj = categories.find(c => c.id === currentQ.category)!;

  function selectAnswer(answer: Answer) {
    setAnswers((prev: Answers) => ({ ...prev, [currentQ.id]: answer }));
  }

  function goNext() {
    if (!currentAnswer) return;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i: number) => i + 1);
    } else {
      const params = new URLSearchParams();
      Object.entries(answers).forEach(([k, v]) => { if (v) params.set(k, v as string); });
      router.push("/results?" + params.toString());
    }
  }

  function goPrev() {
    if (currentIndex > 0) setCurrentIndex((i: number) => i - 1);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-6">
        <div className="flex justify-center mb-2">
          <Image src="/doxtail_logo.png" alt="Doxtail" width={60} height={60} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-neutral-500">
            <span>ARC {currentQ.category} – {catObj.label}</span>
            <span>{currentIndex + 1} / {questions.length}</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div className="bg-white h-1.5 rounded-full transition-all duration-300" style={{ width: progress + "%" }} />
          </div>
          <div className="flex gap-1 flex-wrap">
            {categories.map(cat => {
              const catQs = questions.filter(q => q.category === cat.id);
              const answered = catQs.filter(q => answers[q.id]).length;
              const isActive = cat.id === currentQ.category;
              return (
                <div key={cat.id} className={"text-xs px-2 py-0.5 rounded-full border transition-colors " + (isActive ? "border-white/40 bg-white/10 text-white" : answered === catQs.length ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400" : "border-white/10 text-neutral-600")}>{cat.id}</div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Fråga {categoryIndex} av 3 – {catObj.label}</p>
            <h2 className="text-xl font-semibold text-white leading-snug">{currentQ.question}</h2>
            {currentQ.help && <p className="text-sm text-neutral-500 mt-2">{currentQ.help}</p>}
          </div>
          <div className="space-y-3">
            {(["ok", "warning", "stop"] as const).map(val => {
              const cfg = ANSWER_CONFIG[val];
              const isSelected = currentAnswer === val;
              return (
                <button key={val} onClick={() => selectAnswer(val)} className={"w-full text-left p-4 rounded-xl border-2 transition-all duration-150 " + (isSelected ? cfg.color : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:bg-white/10")}>
                  <div className="flex items-center gap-3">
                    <div className={"w-3 h-3 rounded-full flex-shrink-0 " + (isSelected ? cfg.dot : "bg-white/20")} />
                    <div>
                      <div className="font-medium text-sm">{cfg.label}</div>
                      <div className="text-xs mt-0.5 opacity-80">{currentQ.options[val]}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={goPrev} disabled={currentIndex === 0} className="flex-1 py-3 rounded-xl border border-white/10 text-neutral-400 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">← Föregående</button>
          <button onClick={goNext} disabled={!currentAnswer} className="flex-1 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">{currentIndex === questions.length - 1 ? "Se mitt resultat →" : "Nästa →"}</button>
        </div>
      </div>
    </main>
  );
}
