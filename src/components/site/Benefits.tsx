import { Wind, Zap, ThermometerSnowflake, Droplets } from "lucide-react";

const ITEMS = [
  {
    icon: Wind,
    title: "Ar livre de bactérias",
    text: "Garantem a renovação constante do ar. Limpam, umidificam e purificam o ambiente, ajudando a reduzir vírus e bactérias suspensos no ar.",
  },
  {
    icon: Zap,
    title: "Economia de energia",
    text: "Até 90% de economia de energia elétrica em comparação ao ar-condicionado comum.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Redução de temperatura",
    text: "Redução de até 15°C da temperatura em relação ao ambiente externo, considerando a umidade relativa do ar.",
  },
  {
    icon: Droplets,
    title: "Aumento da umidade",
    text: "Quanto menor a umidade relativa do ar, maior a quantidade de água evaporada pelo equipamento. Eles também ajudam na renovação do ar e no conforto térmico.",
  },
];

export function Benefits() {
  return (
    <section className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Benefícios</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Conforto térmico com eficiência real
          </h2>
          <p className="mt-3 text-muted-foreground">
            Soluções pensadas para ambientes corporativos e industriais que exigem qualidade do ar,
            redução de temperatura e economia operacional.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-soft card-soft-hover p-6">
              <div
                className="grid h-11 w-11 place-items-center rounded-lg"
                style={{ background: "var(--color-brand-soft)" }}
              >
                <Icon className="h-5 w-5" style={{ color: "var(--color-brand)" }} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
