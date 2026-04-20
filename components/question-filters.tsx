"use client";

import { useMemo, useState } from "react";
import { questions } from "@/lib/site-data";

const difficulties = ["الكل", "سهل", "متوسط", "صعب", "شديد الصعوبة"];
const subjects = ["الكل", "الهندسة", "اللغة المهنية"];

export function QuestionFilters() {
  const [difficulty, setDifficulty] = useState("الكل");
  const [subject, setSubject] = useState("الكل");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return questions.filter((question) => {
      const matchesDifficulty = difficulty === "الكل" || question.difficulty === difficulty;
      const matchesSubject = subject === "الكل" || question.subject === subject;
      const matchesQuery =
        !query.trim() ||
        `${question.title} ${question.unit} ${question.description}`
          .toLowerCase()
          .includes(query.toLowerCase());

      return matchesDifficulty && matchesSubject && matchesQuery;
    });
  }, [difficulty, subject, query]);

  return (
    <div className="space-y-6">
      <div className="card-panel grid gap-4 p-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">البحث</label>
          <input
            className="field"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث في السؤال أو الوحدة"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">المجال</label>
          <select className="field" value={subject} onChange={(event) => setSubject(event.target.value)}>
            {subjects.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">المستوى</label>
          <select className="field" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
            {difficulties.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {filtered.map((question) => (
          <div key={question.id} className="card-panel p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge">{question.difficulty}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                {question.subject}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                {question.type}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-extrabold text-slate-950">{question.title}</h3>
            <p className="mt-2 text-sm font-bold text-brand">{question.unit}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{question.description}</p>
          </div>
        ))}

        {filtered.length === 0 ? (
          <div className="card-panel p-6 text-sm text-slate-600">لا توجد أسئلة مطابقة للفلاتر الحالية.</div>
        ) : null}
      </div>
    </div>
  );
}
