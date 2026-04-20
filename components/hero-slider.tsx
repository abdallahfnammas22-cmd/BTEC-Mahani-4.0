"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/advisor.png", alt: "BTEC Advisor" },
  { src: "/school-logo.jpeg", alt: "شعار المدرسة" },
  { src: "/btec-logo.jpeg", alt: "شعار BTEC" }
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="card-panel p-6">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        <div className="mx-auto flex min-h-[320px] items-center justify-center">
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            width={360}
            height={360}
            className="max-h-[320px] w-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700"
        >
          السابق
        </button>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700"
        >
          التالي
        </button>
      </div>
    </div>
  );
}
