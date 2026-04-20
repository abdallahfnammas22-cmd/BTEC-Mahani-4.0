import { SectionTitle } from "@/components/section-title";

export default function LoginPage() {
  return (
    <section className="section-space">
      <div className="container-page max-w-2xl space-y-8">
        <SectionTitle
          eyebrow="Login"
          title="تسجيل الدخول"
          description="صفحة فعلية كبداية. في المرحلة التالية سيتم ربطها بـ Auth وقاعدة بيانات."
        />

        <div className="card-panel p-8">
          <div className="grid gap-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">اسم المستخدم أو البريد</label>
              <input className="field" placeholder="student@betc.local" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">كلمة المرور</label>
              <input className="field" type="password" placeholder="********" />
            </div>

            <button className="btn-primary w-fit">دخول</button>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
            في النسخة القادمة سيتم تفعيل الحسابات الفعلية وحماية الصفحات.
          </div>
        </div>
      </div>
    </section>
  );
}
