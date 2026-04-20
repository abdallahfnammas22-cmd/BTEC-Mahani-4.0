import Link from "next/link";
import { HeroSlider } from "@/components/hero-slider";
import { SectionTitle } from "@/components/section-title";
import {
  dashboardCards,
  engineeringJordanUnits,
  engineeringVolume2Units,
  industryEnglishTopics,
  specializations
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="section-space">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="badge">نسخة v1 حقيقية بصفحات وروابط فعلية</span>

            <SectionTitle
              title="المرحلة التالية بدأت فعلًا"
              description="هذه النسخة ليست landing page فقط. فيها Navbar حقيقي وصفحات داخلية فعلية لبنك الأسئلة والورش والبحث وBTEC Advisor ولوحة الطالب."
            />

            <div className="flex flex-wrap gap-3">
              <Link href="/question-bank" className="btn-primary">
                افتح بنك الأسئلة
              </Link>
              <Link href="/search" className="btn-secondary">
                افتح البحث
              </Link>
              <Link href="/workshops" className="btn-secondary">
                افتح الورش
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {dashboardCards.map((card) => (
                <div key={card.label} className="card-panel p-5">
                  <p className="text-sm font-bold text-slate-500">{card.label}</p>
                  <p className="mt-3 text-2xl font-extrabold text-slate-900">{card.value}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroSlider />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page space-y-8">
          <SectionTitle
            eyebrow="التخصصات"
            title="المسارات الأساسية داخل المنصة"
            description="تم ترتيب الواجهة لتخدم صيانة المركبات والكهرباء وتكنولوجيا الإنتاج."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {specializations.map((item) => (
              <div key={item.title} className="card-panel p-6">
                <h3 className="text-2xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div className="card-panel p-6">
            <p className="text-sm font-bold text-brand">مرجع هندسي — الأردن</p>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-950">الوحدات الأساسية</h3>
            <div className="mt-5 space-y-3">
              {engineeringJordanUnits.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-panel p-6">
            <p className="text-sm font-bold text-brand">مرجع هندسي — الجزء الثاني</p>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-950">وحدات متقدمة</h3>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {engineeringVolume2Units.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page space-y-8">
          <SectionTitle
            eyebrow="York Vocational English"
            title="دعم لغوي مهني مرتبط بالصناعة"
            description="تم تضمين موضوعات اللغة المهنية لتساعد الطالب على فهم السياق العملي والتواصل المهني."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industryEnglishTopics.map((item) => (
              <div key={item} className="card-panel p-5">
                <h3 className="text-lg font-bold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
