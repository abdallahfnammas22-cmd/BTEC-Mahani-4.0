import { SearchBox } from "@/components/search-box";
import { SectionTitle } from "@/components/section-title";

export default function SearchPage() {
  return (
    <section className="section-space">
      <div className="container-page space-y-8">
        <SectionTitle
          eyebrow="Smart Search"
          title="البحث الذكي داخل المحتوى"
          description="صفحة فعلية فيها بحث يعمل الآن على البيانات المحلية: الوحدات، الأسئلة، الورش، وموضوعات اللغة المهنية."
        />

        <SearchBox />
      </div>
    </section>
  );
}
