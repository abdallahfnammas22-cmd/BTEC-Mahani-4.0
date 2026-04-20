import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { questions, workshops } from "@/lib/site-data";

export default function AdvisorPage() {
  return (
    <section className="section-space">
      <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="BTEC Advisor"
            title="المساعد الذكي داخل المنصة"
            description="هذه الصفحة تعرض دور BTEC Advisor كبوابة مساعدة للطالب قبل ربط الذكاء والمنطق الحقيقي في المرحلة القادمة."
          />

          <div className="grid gap-4">
            {[
              "ترشيح سؤال مناسب حسب المستوى",
              "اقتراح ورشة عملية بعد الدراسة",
              "إرشاد الطالب إلى الوحدة الأقرب",
              "بناء أسئلة مبدئية حسب التخصص",
              "تمهيد لاختبار الميول المهنية"
            ].map((item) => (
              <div key={item} className="card-panel p-5 text-sm font-bold text-slate-700">
                {item}
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-panel p-6">
              <h2 className="text-xl font-extrabold text-slate-950">اقتراحات أسئلة</h2>
              <div className="mt-4 space-y-3">
                {questions.slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm font-bold text-brand">{item.difficulty}</p>
                    <p className="mt-2 font-bold text-slate-900">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-panel p-6">
              <h2 className="text-xl font-extrabold text-slate-950">اقتراحات ورش</h2>
              <div className="mt-4 space-y-3">
                {workshops.slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm font-bold text-brand">{item.specialization}</p>
                    <p className="mt-2 font-bold text-slate-900">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card-panel p-6 text-center">
          <Image
            src="/advisor.png"
            alt="BTEC Advisor"
            width={420}
            height={520}
            className="mx-auto max-h-[520px] w-auto object-contain"
          />
          <h2 className="mt-5 text-2xl font-extrabold text-slate-950">BTEC Advisor</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            مساعد رقمي يمثل نقطة دخول الطالب إلى التعلم والبحث والورش والتقييمات.
          </p>
        </div>
      </div>
    </section>
  );
}
