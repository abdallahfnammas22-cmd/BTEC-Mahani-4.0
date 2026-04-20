import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/school-logo.jpeg"
            alt="شعار المدرسة"
            width={52}
            height={52}
            className="rounded-full border border-slate-200 bg-white"
          />
          <div>
            <p className="text-sm font-extrabold text-slate-950">بوابة BTEC الذكية للتعلم والتوجيه المهني</p>
            <p className="text-xs text-slate-500">مدرسة دير أبي سعيد الثانوية المهنية للبنين</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-slate-700 transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
