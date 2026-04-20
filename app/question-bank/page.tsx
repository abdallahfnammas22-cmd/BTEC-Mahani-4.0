import { QuestionFilters } from "@/components/question-filters";
import { SectionTitle } from "@/components/section-title";

export default function QuestionBankPage() {
  return (
    <section className="section-space">
      <div className="container-page space-y-8">
        <SectionTitle
          eyebrow="Question Bank"
          title="بنك الأسئلة"
          description="هذه صفحة فعلية فيها أسئلة أولية قابلة للفلترة حسب المستوى والمجال والبحث النصي."
        />

        <QuestionFilters />
      </div>
    </section>
  );
}
