import { SectionTitle } from "@/components/section-title";
import { workshops } from "@/lib/site-data";

export default function WorkshopsPage() {
  return (
    <section className="section-space">
      <div className="container-page space-y-8">
        <SectionTitle
          eyebrow="ورش عملية"
          title="ورش مرتبطة بالتخصصات والمحتوى"
          description="صفحة فعلية تعرض ورشًا أولية يمكن تطويرها لاحقًا إلى مهام وتسليمات ونتائج."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="card-panel p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge">{workshop.specialization}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {workshop.level}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold text-slate-950">{workshop.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{workshop.summary}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-bold text-slate-500">المدة</p>
                  <p className="mt-2 font-bold text-slate-900">{workshop.duration}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-bold text-slate-500">الناتج</p>
                  <p className="mt-2 font-bold text-slate-900">{workshop.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
