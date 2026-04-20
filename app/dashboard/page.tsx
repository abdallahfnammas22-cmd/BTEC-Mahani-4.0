import Link from "next/link";
import { dashboardCards, questions, workshops } from "@/lib/site-data";
import { SectionTitle } from "@/components/section-title";

export default function DashboardPage() {
  return (
    <section className="section-space">
      <div className="container-page space-y-8">
        <SectionTitle
          eyebrow="بوابة الطالب"
          title="لوحة متابعة أولية"
          description="صفحة فعلية كبداية، تعرض مؤشرات سريعة وتوصيات دخول إلى الصفحات الأساسية."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardCards.map((card) => (
            <div key={card.label} className="card-panel p-5">
              <p className="text-sm font-bold text-slate-500">{card.label}</p>
              <p className="mt-3 text-2xl font-extrabold text-slate-900">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-panel p-6">
            <h2 className="text-2xl font-extrabold text-slate-950">آخر ما يمكن البدء به الآن</h2>
            <div className="mt-5 space-y-3">
              {questions.slice(0, 4).map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-bold text-brand">{item.difficulty}</p>
                  <h3 className="mt-2 font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.unit}</p>
                </div>
              ))}
            </div>
            <Link href="/question-bank" className="btn-primary mt-5">
              اذهب إلى بنك الأسئلة
            </Link>
          </div>

          <div className="card-panel p-6">
            <h2 className="text-2xl font-extrabold text-slate-950">ورش عملية مقترحة</h2>
            <div className="mt-5 space-y-3">
              {workshops.slice(0, 4).map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-bold text-brand">{item.specialization}</p>
                  <h3 className="mt-2 font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.duration} • {item.outcome}</p>
                </div>
              ))}
            </div>
            <Link href="/workshops" className="btn-secondary mt-5">
              اذهب إلى الورش
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
