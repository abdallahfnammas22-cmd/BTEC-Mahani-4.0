"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchIndex } from "@/lib/site-data";

export function SearchBox() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 8);
    return searchIndex.filter((item) =>
      `${item.title} ${item.summary} ${item.category}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="space-y-5">
      <div className="card-panel p-6">
        <label className="mb-3 block text-sm font-bold text-slate-700">ابحث داخل الوحدات والأسئلة والورش</label>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="field"
          placeholder="مثال: السلامة، الكهرباء، الصيانة، packaging"
        />
      </div>

      <div className="grid gap-4">
        {results.map((item) => (
          <Link key={item.id} href={item.href} className="card-panel p-5 transition hover:border-brand">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge">{item.category}</span>
              <h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
          </Link>
        ))}

        {results.length === 0 ? (
          <div className="card-panel p-6 text-sm text-slate-600">
            لا توجد نتائج مطابقة الآن. جرّب كلمة أخرى.
          </div>
        ) : null}
      </div>
    </div>
  );
}
