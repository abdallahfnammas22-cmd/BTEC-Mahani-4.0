export type Difficulty = "سهل" | "متوسط" | "صعب" | "شديد الصعوبة";

export type QuestionItem = {
  id: number;
  title: string;
  subject: string;
  unit: string;
  difficulty: Difficulty;
  type: "اختيار من متعدد" | "صح أو خطأ" | "تطبيقي";
  description: string;
};

export type WorkshopItem = {
  id: number;
  title: string;
  specialization: string;
  level: string;
  duration: string;
  outcome: string;
  summary: string;
};

export type SearchItem = {
  id: string;
  category: "وحدة" | "سؤال" | "ورشة" | "لغة مهنية";
  title: string;
  summary: string;
  href: string;
};

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/dashboard", label: "بوابة الطالب" },
  { href: "/question-bank", label: "بنك الأسئلة" },
  { href: "/workshops", label: "الورش" },
  { href: "/search", label: "البحث" },
  { href: "/advisor", label: "BTEC Advisor" },
  { href: "/login", label: "تسجيل الدخول" }
];

export const engineeringJordanUnits = [
  "الوحدة 1: العمل بأمان وفاعلية في الورشة الهندسية",
  "الوحدة 2: مهارات التفكير في المشكلات الهندسية وابتكار الحلول",
  "الوحدة 3: التحقق من منتج هندسي",
  "الوحدة 4: الصيانة الهندسية"
];

export const engineeringVolume2Units = [
  "الوحدة 5: الرياضيات لفنيي الهندسة",
  "الوحدة 6: المواد الهندسية",
  "الوحدة 7: الرسم الهندسي",
  "الوحدة 11: اللحام",
  "الوحدة 12: تقنيات تحسين الأعمال",
  "الوحدة 20: العلوم الكهربائية والميكانيكية للهندسة",
  "الوحدة 22: إنشاء الدوائر الكهربائية والإلكترونية واختبارها",
  "الوحدة 24: تشغيل وصيانة الأنظمة والمكونات الكهربائية والإلكترونية",
  "الوحدة 27: البرمجة العامة",
  "الوحدة 31: تقنيات صيانة المركبات"
];

export const industryEnglishTopics = [
  "Industries and sectors",
  "Materials and components",
  "The production process",
  "Assembly lines",
  "Machines and tools",
  "Health and safety",
  "At the factory",
  "Servicing and maintenance",
  "Hygiene",
  "Packaging",
  "Quality",
  "Storage"
];

export const specializations = [
  {
    title: "صيانة المركبات",
    summary: "مسار يركز على الفحص، الصيانة، والتشخيص العملي."
  },
  {
    title: "الكهرباء",
    summary: "مسار يركز على الدوائر، الأنظمة، والسلامة الكهربائية."
  },
  {
    title: "تكنولوجيا الإنتاج",
    summary: "مسار يركز على عمليات التصنيع، الجودة، والتخزين والتغليف."
  }
];

export const dashboardCards = [
  { label: "عدد الأسئلة الحالية", value: "24" },
  { label: "الورش الحالية", value: "8" },
  { label: "الوحدات المرجعية", value: "14" },
  { label: "موضوعات اللغة المهنية", value: "12" }
];

export const questions: QuestionItem[] = [
  {
    id: 1,
    title: "السلامة قبل تشغيل آلة الورشة",
    subject: "الهندسة",
    unit: "العمل بأمان وفاعلية في الورشة الهندسية",
    difficulty: "سهل",
    type: "اختيار من متعدد",
    description: "سؤال تأسيسي حول أول خطوة صحيحة قبل تشغيل آلة داخل الورشة."
  },
  {
    id: 2,
    title: "تمييز الخطر عن المخاطرة",
    subject: "الهندسة",
    unit: "العمل بأمان وفاعلية في الورشة الهندسية",
    difficulty: "متوسط",
    type: "صح أو خطأ",
    description: "يفحص فهم الطالب للفرق بين الخطر وإمكانية حدوث الضرر."
  },
  {
    id: 3,
    title: "اختيار مادة مناسبة لقطعة هندسية",
    subject: "الهندسة",
    unit: "المواد الهندسية",
    difficulty: "متوسط",
    type: "اختيار من متعدد",
    description: "يطلب مقارنة بين خصائص المواد لاختيار الأنسب للتطبيق."
  },
  {
    id: 4,
    title: "قراءة رسم هندسي بسيط",
    subject: "الهندسة",
    unit: "الرسم الهندسي",
    difficulty: "صعب",
    type: "تطبيقي",
    description: "سؤال تطبيقي لفهم الرموز والأبعاد الأساسية في الرسم."
  },
  {
    id: 5,
    title: "قانون أوم في دائرة أساسية",
    subject: "الهندسة",
    unit: "العلوم الكهربائية والميكانيكية للهندسة",
    difficulty: "متوسط",
    type: "اختيار من متعدد",
    description: "تحويل مفهوم قانون أوم إلى مسألة عددية بسيطة."
  },
  {
    id: 6,
    title: "التسلسل الصحيح لخط إنتاج",
    subject: "اللغة المهنية",
    unit: "The production process",
    difficulty: "سهل",
    type: "اختيار من متعدد",
    description: "يركز على ترتيب خطوات العملية الإنتاجية باستخدام مفردات مهنية."
  },
  {
    id: 7,
    title: "التعامل مع عطل صيانة مفاجئ",
    subject: "الهندسة",
    unit: "الصيانة الهندسية",
    difficulty: "صعب",
    type: "تطبيقي",
    description: "حالة عملية تتطلب تحديد إجراء أولي للصيانة الآمنة."
  },
  {
    id: 8,
    title: "مقارنة بين hand tools و power tools",
    subject: "اللغة المهنية",
    unit: "Machines and tools",
    difficulty: "متوسط",
    type: "صح أو خطأ",
    description: "سؤال يربط المصطلحات المهنية بالممارسة داخل الورشة."
  },
  {
    id: 9,
    title: "اختبار وصلة كهربائية بعد التركيب",
    subject: "الهندسة",
    unit: "إنشاء الدوائر الكهربائية والإلكترونية واختبارها",
    difficulty: "صعب",
    type: "اختيار من متعدد",
    description: "اختيار الإجراء الصحيح للفحص الأولي بعد إنشاء دائرة."
  },
  {
    id: 10,
    title: "منطق تسلسل الحزم في التعبئة",
    subject: "اللغة المهنية",
    unit: "Packaging",
    difficulty: "متوسط",
    type: "اختيار من متعدد",
    description: "يربط خطوات التعبئة بالترتيب المنطقي وسلامة المنتج."
  },
  {
    id: 11,
    title: "أساسيات البرمجة العامة",
    subject: "الهندسة",
    unit: "البرمجة العامة",
    difficulty: "شديد الصعوبة",
    type: "تطبيقي",
    description: "مهمة مفاهيمية لبناء منطق بسيط باستخدام المتغيرات والشروط."
  },
  {
    id: 12,
    title: "تشخيص أولي لعطل في نظام مركبة",
    subject: "الهندسة",
    unit: "تقنيات صيانة المركبات",
    difficulty: "شديد الصعوبة",
    type: "تطبيقي",
    description: "سيناريو تشخيصي يعتمد على ربط الأعراض بالسبب الأقرب."
  }
];

export const workshops: WorkshopItem[] = [
  {
    id: 1,
    title: "ورشة فحص سلامة محطة عمل هندسية",
    specialization: "عام",
    level: "المستوى 2",
    duration: "45 دقيقة",
    outcome: "إعداد قائمة تحقق للسلامة داخل الورشة",
    summary: "ينفذ الطالب جولة فحص منظمة لتحديد الأخطار الأساسية ومعدات الوقاية."
  },
  {
    id: 2,
    title: "ورشة تصنيف المواد الهندسية واستخداماتها",
    specialization: "تكنولوجيا الإنتاج",
    level: "المستوى 2",
    duration: "60 دقيقة",
    outcome: "ربط خصائص المواد بالتطبيق المناسب",
    summary: "ينشئ الطالب بطاقة مقارنة بين المعادن والبلاستيك والمواد المركبة."
  },
  {
    id: 3,
    title: "ورشة قراءة مخطط كهربائي مبسط",
    specialization: "الكهرباء",
    level: "المستوى 2",
    duration: "50 دقيقة",
    outcome: "فهم الرموز الأساسية ومسار الدائرة",
    summary: "يتتبع الطالب مخططًا بسيطًا ثم يحدد نقاط الفحص والاختبار."
  },
  {
    id: 4,
    title: "ورشة تسلسل عملية إنتاج",
    specialization: "تكنولوجيا الإنتاج",
    level: "المستوى 1-2",
    duration: "40 دقيقة",
    outcome: "بناء flow منطقي لعملية تصنيع أو تجميع",
    summary: "يعيد الطالب ترتيب مراحل الإنتاج باستخدام بطاقات وخطوات واضحة."
  },
  {
    id: 5,
    title: "ورشة صيانة وقائية أساسية",
    specialization: "صيانة المركبات",
    level: "المستوى 2",
    duration: "55 دقيقة",
    outcome: "إنشاء خطة صيانة وقائية أولية",
    summary: "يتعلم الطالب التحقق من الحالة العامة وتوثيق نقاط المتابعة الدورية."
  },
  {
    id: 6,
    title: "ورشة جودة وتغليف",
    specialization: "تكنولوجيا الإنتاج",
    level: "المستوى 1-2",
    duration: "35 دقيقة",
    outcome: "مقارنة بين معايير الجودة قبل التعبئة",
    summary: "يحلل الطالب شكل المنتج، حالته، وطريقة التعبئة المناسبة."
  },
  {
    id: 7,
    title: "ورشة لغة مهنية: التعريف بالنفس في بيئة مهنية",
    specialization: "عام",
    level: "Level 1 English",
    duration: "30 دقيقة",
    outcome: "استخدام جمل مهنية بسيطة للتعريف بالنفس",
    summary: "تدريب قصير مستوحى من موضوع careers fair والتواصل المهني."
  },
  {
    id: 8,
    title: "ورشة منطق 3-D printing في الإنتاج",
    specialization: "تكنولوجيا الإنتاج",
    level: "Level 1 English + Engineering",
    duration: "45 دقيقة",
    outcome: "فهم الفرق بين الإنتاج التقليدي والطباعة ثلاثية الأبعاد",
    summary: "يناقش الطالب المواد، الزمن، وحجم المنتج بطريقة مبسطة."
  }
];

export const searchIndex: SearchItem[] = [
  ...engineeringJordanUnits.map((title, index) => ({
    id: `ju-${index + 1}`,
    category: "وحدة" as const,
    title,
    summary: "مرجع أساسي من كتاب الهندسة المستوى 2 (الأردن).",
    href: "/question-bank"
  })),
  ...engineeringVolume2Units.map((title, index) => ({
    id: `v2-${index + 1}`,
    category: "وحدة" as const,
    title,
    summary: "مرجع من الجزء الثاني لكتاب BTEC Engineering Volume 2.",
    href: "/question-bank"
  })),
  ...questions.map((question) => ({
    id: `q-${question.id}`,
    category: "سؤال" as const,
    title: question.title,
    summary: `${question.subject} • ${question.difficulty} • ${question.unit}`,
    href: "/question-bank"
  })),
  ...workshops.map((workshop) => ({
    id: `w-${workshop.id}`,
    category: "ورشة" as const,
    title: workshop.title,
    summary: `${workshop.specialization} • ${workshop.duration} • ${workshop.outcome}`,
    href: "/workshops"
  })),
  ...industryEnglishTopics.map((topic, index) => ({
    id: `e-${index + 1}`,
    category: "لغة مهنية" as const,
    title: topic,
    summary: "موضوع مهني من سلسلة York Vocational English Industry.",
    href: "/advisor"
  }))
];
