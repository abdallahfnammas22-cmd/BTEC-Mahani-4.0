type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-sm font-bold text-brand">{eyebrow}</p> : null}
      <h1 className="text-3xl font-extrabold text-slate-950 md:text-5xl">{title}</h1>
      {description ? <p className="text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
