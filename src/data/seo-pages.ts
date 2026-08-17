import { SITE_NAME, SITE_URL } from "./site";

export type SeoPageType = "solution" | "segment" | "city";
export type ImageKey = "industrial" | "wall" | "portable" | "water" | "hero";

export interface SeoSection {
  heading: string;
  body: string;
  items?: string[];
}

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoRelatedLink {
  href: string;
  label: string;
}

export interface SeoPage {
  slug: string;
  path: string;
  type: SeoPageType;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  ctaText: string;
  imageKey: ImageKey;
  imageAlt: string;
  sections: SeoSection[];
  faq: SeoFaq[];
  relatedLinks: SeoRelatedLink[];
  schemaType: "Service";
  localArea?: string;
}

export interface BlogPage {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  imageKey: ImageKey;
  imageAlt: string;
  sections: SeoSection[];
  faq: SeoFaq[];
  commercialLink: SeoRelatedLink;
  datePublished: string;
  dateModified: string;
  relatedLinks: SeoRelatedLink[];
  imageUrl?: string;
  lastmod?: string;
}

const coreSolutionLinks: SeoRelatedLink[] = [
  { href: "/solucoes/climatizadores-industriais", label: "Climatizadores industriais" },
  { href: "/solucoes/climatizadores-evaporativos", label: "Climatizadores evaporativos" },
  { href: "/solucoes/climatizacao-para-empresas", label: "Climatização para empresas" },
];

const cityLinks: SeoRelatedLink[] = [
  { href: "/cidades/climatizadores-industriais-em-maringa", label: "Climatizadores em Maringá" },
  { href: "/cidades/climatizadores-industriais-em-londrina", label: "Climatizadores em Londrina" },
  { href: "/cidades/climatizadores-industriais-em-curitiba", label: "Climatizadores em Curitiba" },
  { href: "/cidades/climatizadores-industriais-no-parana", label: "Climatizadores no Paraná" },
];

const contatoLink: SeoRelatedLink = { href: "/contato", label: "Falar com a Colder" };

function replaceSeoPage(pages: SeoPage[], next: SeoPage) {
  const index = pages.findIndex((page) => page.slug === next.slug);
  if (index >= 0) {
    pages[index] = next;
  }
}

export const seoPages: SeoPage[] = [
  {
    slug: "climatizadores-industriais",
    path: "/solucoes/climatizadores-industriais",
    type: "solution",
    title: "Climatizadores Industriais | Empresas e Galpões | Colder",
    metaDescription:
      "Climatizadores industriais para empresas, fábricas, barracões e galpões. Conforto térmico, renovação do ar e economia de energia com a Colder.",
    h1: "Climatizadores Industriais",
    subtitle:
      "Soluções de climatização industrial para ambientes grandes, linhas de produção, galpões, lojas e empresas que precisam de desempenho contínuo.",
    primaryKeyword: "climatizadores industriais",
    secondaryKeywords: [
      "climatizador industrial",
      "climatização industrial",
      "climatizador para ambiente grande",
      "climatizador para fábrica",
    ],
    ctaText: "Solicitar orçamento de climatizador industrial",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial de grande porte para empresas e galpões",
    sections: [
      {
        heading: "Climatização industrial para ambientes grandes",
        body: "A Colder dimensiona climatizadores industriais para áreas de produção, galpões, barracões e ambientes comerciais com grande circulação. O projeto considera tamanho do espaço, ventilação, carga térmica, operação e pontos de instalação.",
      },
      {
        heading: "Benefícios para empresas e indústrias",
        body: "O sistema evaporativo ajuda a reduzir a sensação de calor, renovar o ar e manter a equipe em um ambiente mais confortável durante a jornada.",
        items: [
          "Baixo consumo quando comparado ao ar-condicionado tradicional",
          "Renovação constante do ar interno",
          "Aplicação em fábricas, centros logísticos, lojas e barracões",
          "Projeto sob medida para vazão e distribuição de ar",
        ],
      },
      {
        heading: "Quanto custa um climatizador industrial",
        body: "O investimento depende da área, pé-direito, número de equipamentos, infraestrutura e objetivo do projeto. Por isso, a Colder avalia o ambiente antes de indicar a melhor solução.",
      },
      {
        heading: "Climatizador industrial vale a pena",
        body: "Para ambientes amplos que precisam de renovação de ar e economia operacional, o climatizador evaporativo costuma ser uma alternativa eficiente. A indicação técnica evita subdimensionamento e melhora o resultado final.",
      },
    ],
    faq: [
      {
        question: "Qual climatizador industrial é indicado para galpões?",
        answer:
          "A indicação depende da área, pé-direito, ventilação e quantidade de pessoas ou máquinas no ambiente. A Colder dimensiona a vazão adequada antes do orçamento.",
      },
      {
        question: "Climatizador industrial reduz quantos graus?",
        answer:
          "A redução percebida varia conforme umidade, ventilação e carga térmica. Em condições adequadas, o sistema pode gerar grande melhora de conforto térmico, mas o resultado só pode ser estimado após avaliação do ambiente.",
      },
      {
        question: "Climatizador industrial gasta menos energia?",
        answer:
          "Sim. Por não usar compressor como o ar-condicionado, o climatizador evaporativo tende a consumir menos energia em grandes ambientes.",
      },
      {
        question: "A Colder instala climatizadores industriais?",
        answer:
          "Sim. A Colder orienta a escolha, dimensiona o projeto e realiza a instalação conforme a necessidade do ambiente.",
      },
    ],
    relatedLinks: [
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
      {
        href: "/segmentos/climatizadores-para-industrias",
        label: "Climatizadores para indústrias",
      },
      { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
      {
        href: "/blog/quanto-custa-instalar-climatizadores-industriais",
        label: "Quanto custa instalar climatizadores industriais",
      },
      ...cityLinks,
    ],
    schemaType: "Service",
  },
  {
    slug: "climatizadores-evaporativos",
    path: "/solucoes/climatizadores-evaporativos",
    type: "solution",
    title: "Climatizadores Evaporativos | Economia e Renovação do Ar",
    metaDescription:
      "Entenda como climatizadores evaporativos reduzem calor, renovam o ar e economizam energia em empresas, indústrias, igrejas e galpões.",
    h1: "Climatizadores Evaporativos",
    subtitle:
      "Tecnologia de climatização que usa evaporação de água para melhorar o conforto térmico com renovação constante do ar.",
    primaryKeyword: "climatizadores evaporativos",
    secondaryKeywords: [
      "climatizador evaporativo industrial",
      "climatização econômica para empresas",
      "renovação do ar",
      "economia de energia",
    ],
    ctaText: "Pedir avaliação para climatizador evaporativo",
    imageKey: "water",
    imageAlt: "Climatizador evaporativo com reservatório de água para ambientes empresariais",
    sections: [
      {
        heading: "Como funciona o climatizador evaporativo",
        body: "O equipamento puxa o ar externo, passa esse ar por placas umedecidas e distribui ar renovado no ambiente. O processo melhora a sensação térmica sem recircular sempre o mesmo ar.",
      },
      {
        heading: "Economia em comparação ao ar-condicionado",
        body: "Como não depende de compressores, condensadoras e gases refrigerantes, o climatizador evaporativo pode ter custo operacional menor em empresas e áreas grandes.",
      },
      {
        heading: "Onde aplicar climatizadores evaporativos",
        body: "A solução atende galpões, igrejas, indústrias, restaurantes, academias, escolas, supermercados, lojas e recepções que precisam de circulação de ar.",
        items: [
          "Ambientes amplos e com circulação de pessoas",
          "Áreas comerciais que precisam reduzir calor",
          "Operações que buscam conforto térmico com menor consumo",
        ],
      },
      {
        heading: "Quando não substituir o ar-condicionado",
        body: "Ambientes que exigem controle rigoroso de temperatura, umidade ou pressurização podem precisar de ar-condicionado ou projeto híbrido. A análise técnica define a melhor alternativa.",
      },
    ],
    faq: [
      {
        question: "Climatizador evaporativo funciona em ambiente fechado?",
        answer:
          "Ele funciona melhor quando existe renovação de ar e exaustão adequada. Ambientes totalmente fechados precisam de avaliação técnica.",
      },
      {
        question: "Climatizador evaporativo é indicado para empresas?",
        answer:
          "Sim. É muito usado em empresas, galpões e áreas comerciais que precisam de conforto térmico e economia.",
      },
      {
        question: "O climatizador evaporativo aumenta a umidade?",
        answer:
          "Sim, o processo adiciona umidade ao ar. A viabilidade depende das condições do local e do tipo de operação.",
      },
      {
        question: "Qual a diferença para o ar-condicionado?",
        answer:
          "O ar-condicionado refrigera e recircula o ar; o evaporativo trabalha com renovação e evaporação de água, com menor consumo em muitos cenários.",
      },
    ],
    relatedLinks: [
      ...coreSolutionLinks.filter((link) => link.href !== "/solucoes/climatizadores-evaporativos"),
      {
        href: "/blog/climatizador-evaporativo-funciona-em-ambiente-fechado",
        label: "Climatizador evaporativo em ambiente fechado",
      },
      { href: "/segmentos/climatizadores-para-igrejas", label: "Climatizadores para igrejas" },
      { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
      {
        href: "/segmentos/climatizadores-para-restaurantes",
        label: "Climatizadores para restaurantes",
      },
      ...cityLinks,
    ],
    schemaType: "Service",
  },
  {
    slug: "climatizacao-para-empresas",
    path: "/solucoes/climatizacao-para-empresas",
    type: "solution",
    title: "Climatização para Empresas | Conforto e Economia",
    metaDescription:
      "Climatização para empresas, comércios, lojas, escritórios, indústrias e barracões. Solicite um projeto sob medida com a Colder.",
    h1: "Climatização para Empresas",
    subtitle:
      "Projetos para melhorar conforto térmico, renovar o ar e reduzir custo operacional em ambientes empresariais.",
    primaryKeyword: "climatização para empresas",
    secondaryKeywords: [
      "climatizadores para empresas",
      "climatização empresarial",
      "climatizador para loja",
      "climatização econômica para empresas",
    ],
    ctaText: "Solicitar projeto para empresa",
    imageKey: "wall",
    imageAlt: "Climatizador industrial de parede aplicado em ambiente empresarial",
    sections: [
      {
        heading: "Projetos para diferentes tipos de empresas",
        body: "A Colder atende empresas que precisam climatizar recepções, salões, áreas de atendimento, estoque, produção, academias, escolas e restaurantes com uma solução adequada ao uso do ambiente.",
      },
      {
        heading: "Conforto para clientes e equipe",
        body: "Temperatura elevada afeta produtividade, permanência do cliente e percepção do ambiente. O projeto certo melhora a experiência sem criar uma conta de energia desproporcional.",
      },
      {
        heading: "Ambientes comerciais atendidos",
        body: "A climatização evaporativa pode ser aplicada em lojas, supermercados, clínicas, academias, escolas, igrejas, galpões e indústrias.",
        items: [
          "Recepções e áreas de espera",
          "Lojas, salões e áreas de atendimento",
          "Barracões, estoques e áreas produtivas",
          "Ambientes com grande circulação de pessoas",
        ],
      },
      {
        heading: "Orçamento sob medida",
        body: "O melhor sistema depende da área, rotina de uso e infraestrutura existente. A equipe da Colder avalia o espaço para indicar quantidade, modelo e local de instalação.",
      },
    ],
    faq: [
      {
        question: "Qual a melhor climatização para empresas?",
        answer:
          "Depende do ambiente. Para áreas amplas e com renovação de ar, climatizadores evaporativos podem ser uma alternativa econômica e eficiente.",
      },
      {
        question: "Climatizador serve para loja?",
        answer:
          "Sim. Lojas e salões comerciais podem receber climatizadores quando o projeto considera circulação, fachada, pé-direito e fluxo de pessoas.",
      },
      {
        question: "A Colder atende empresas no Paraná?",
        answer:
          "Sim. A Colder atende empresas em Maringá, Londrina, Curitiba e outras cidades do Paraná conforme viabilidade do projeto.",
      },
      {
        question: "Como pedir orçamento para minha empresa?",
        answer:
          "Entre em contato pelo WhatsApp e informe cidade, tipo de ambiente, tamanho aproximado e objetivo da climatização.",
      },
    ],
    relatedLinks: [
      ...coreSolutionLinks.filter((link) => link.href !== "/solucoes/climatizacao-para-empresas"),
      { href: "/segmentos/climatizacao-para-clinicas", label: "Climatização para clínicas" },
      {
        href: "/segmentos/climatizadores-para-restaurantes",
        label: "Climatizadores para restaurantes",
      },
      { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
      {
        href: "/segmentos/climatizadores-para-industrias",
        label: "Climatizadores para indústrias",
      },
      ...cityLinks,
    ],
    schemaType: "Service",
  },
];

const segmentDefinitions: Array<{
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  primaryKeyword: string;
  imageKey: ImageKey;
  imageAlt: string;
  context: string;
  benefits: string[];
  applications: string[];
  related: SeoRelatedLink[];
  faq: SeoFaq[];
}> = [
  {
    slug: "climatizadores-para-igrejas",
    title: "Climatizador para Igreja | Conforto e Economia | Colder",
    metaDescription:
      "Climatizadores para igrejas, templos e salões religiosos. Projeto sob medida para ambientes amplos, cultos, auditórios e áreas de grande circulação.",
    h1: "Climatizadores para igrejas e templos",
    subtitle:
      "Soluções de climatização para templos, salões paroquiais, auditórios religiosos e ambientes de grande circulação.",
    primaryKeyword: "climatizadores para igrejas",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial indicado para salão de igreja e auditório religioso",
    context:
      "Igrejas reúnem muitas pessoas em horários concentrados, normalmente em salões amplos, templos altos e auditórios com grande variação de ocupação. A climatização precisa melhorar o conforto sem gerar custo excessivo de energia.",
    benefits: [
      "Conforto térmico durante cultos, missas, eventos e encontros",
      "Renovação do ar em salões de grande circulação",
      "Baixo consumo em comparação a sistemas tradicionais de refrigeração",
      "Aplicação em templo, salão, secretaria, salas de aula e auditório",
    ],
    applications: [
      "Templo principal",
      "Salão paroquial",
      "Auditórios",
      "Secretarias",
      "Salas de aula",
    ],
    related: [
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
      {
        href: "/blog/como-climatizar-uma-igreja-sem-gastar-muito",
        label: "Como climatizar uma igreja sem gastar muito",
      },
      ...cityLinks.slice(0, 2),
    ],
    faq: [
      {
        question: "Qual climatizador é indicado para igrejas?",
        answer:
          "O modelo ideal depende da área do templo, pé-direito, ventilação e lotação. A Colder avalia o local para dimensionar a vazão correta.",
      },
      {
        question: "Climatizador industrial funciona em salão de igreja?",
        answer:
          "Sim, desde que o projeto preveja renovação e distribuição de ar adequadas para o tamanho do salão.",
      },
      {
        question: "Climatizador gasta menos energia que ar-condicionado?",
        answer:
          "Em ambientes grandes, o sistema evaporativo tende a consumir menos por não usar compressor.",
      },
      {
        question: "A Colder atende igrejas no Paraná?",
        answer:
          "Sim. A Colder atende igrejas em Maringá, Londrina, Curitiba e outras cidades conforme o projeto.",
      },
      {
        question: "Como solicitar orçamento para climatizar uma igreja?",
        answer:
          "Envie as medidas aproximadas do ambiente, cidade e fotos do local pelo WhatsApp para uma primeira avaliação.",
      },
    ],
  },
  {
    slug: "climatizacao-para-clinicas",
    title: "Climatização para Clínicas | Conforto e Ar Saudável",
    metaDescription:
      "Soluções de climatização para clínicas, consultórios, recepções e salas de espera. Conforto térmico, renovação do ar e economia.",
    h1: "Climatização para Clínicas",
    subtitle:
      "Climatização para recepção, consultórios, salas de espera e áreas administrativas com foco em conforto para pacientes e equipe.",
    primaryKeyword: "climatização para clínicas",
    imageKey: "wall",
    imageAlt: "Climatizador de parede para recepção de clínica e ambiente de espera",
    context:
      "Clínicas precisam equilibrar conforto, percepção de cuidado e custo operacional. Recepção, sala de espera e áreas administrativas podem exigir soluções diferentes de consultórios com controle mais rigoroso.",
    benefits: [
      "Melhora da sensação térmica em recepções e salas de espera",
      "Renovação do ar para ambientes com fluxo constante de pessoas",
      "Solução econômica para áreas comuns",
      "Análise técnica para decidir quando usar climatizador ou ar-condicionado",
    ],
    applications: ["Recepção", "Sala de espera", "Corredores", "Administrativo", "Áreas comuns"],
    related: [
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
      { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
      {
        href: "/blog/como-climatizar-uma-clinica-com-eficiencia",
        label: "Como climatizar uma clínica com eficiência",
      },
      cityLinks[2],
    ],
    faq: [
      {
        question: "Climatizador pode ser usado em clínicas?",
        answer:
          "Pode ser indicado para recepções e áreas comuns. Salas com exigências técnicas específicas precisam de avaliação individual.",
      },
      {
        question: "Qual a melhor solução para recepção de clínica?",
        answer:
          "Depende da área, fluxo de pacientes e ventilação. Climatizadores evaporativos podem ser uma alternativa econômica para recepções amplas.",
      },
      {
        question: "Climatizador ajuda na renovação do ar?",
        answer:
          "Sim. O sistema trabalha com entrada de ar externo e renovação constante quando instalado corretamente.",
      },
      {
        question: "Climatizador substitui ar-condicionado?",
        answer:
          "Nem sempre. Em salas que exigem temperatura controlada, o ar-condicionado pode continuar sendo necessário.",
      },
      {
        question: "Como pedir orçamento para clínica?",
        answer:
          "Fale com a Colder pelo WhatsApp e envie cidade, metragem e áreas que precisam de climatização.",
      },
    ],
  },
  {
    slug: "climatizadores-para-industrias",
    title: "Climatizadores para Indústrias | Projeto Sob Medida",
    metaDescription:
      "Climatizadores para indústrias, linhas de produção e áreas operacionais. Reduza calor, renove o ar e melhore o conforto da equipe.",
    h1: "Climatizadores para Indústrias",
    subtitle:
      "Projetos para fábricas, áreas de produção, manutenção, expedição e ambientes industriais com alta carga térmica.",
    primaryKeyword: "climatizadores para indústrias",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial para área de produção e fábrica",
    context:
      "Indústrias exigem climatização robusta, com equipamentos dimensionados para pé-direito, calor de máquinas, turnos de operação e grande volume de ar.",
    benefits: [
      "Mais conforto para equipes de produção",
      "Renovação de ar em ambientes industriais",
      "Possibilidade de instalação setorizada",
      "Custo operacional menor para áreas grandes",
    ],
    applications: [
      "Área de produção",
      "Expedição",
      "Manutenção",
      "Almoxarifado",
      "Linha de montagem",
    ],
    related: [
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
      { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
      {
        href: "/segmentos/climatizadores-para-restaurantes",
        label: "Climatizadores para restaurantes",
      },
      {
        href: "/blog/climatizador-para-galpao-guia-completo",
        label: "Guia de climatizador para galpão",
      },
      cityLinks[3],
    ],
    faq: [
      {
        question: "Climatizador serve para área de produção?",
        answer: "Sim, quando dimensionado para a carga térmica, ventilação e pontos de trabalho.",
      },
      {
        question: "A instalação pode ser setorizada?",
        answer:
          "Pode. Em muitas indústrias, a climatização por setores melhora o conforto onde a equipe permanece mais tempo.",
      },
      {
        question: "Climatizador industrial aguenta uso contínuo?",
        answer:
          "Equipamentos industriais são projetados para rotinas intensas, mas precisam de instalação e manutenção adequadas.",
      },
      {
        question: "Como calcular quantidade de climatizadores?",
        answer:
          "A quantidade depende de área, pé-direito, renovação desejada e layout. A Colder faz esse dimensionamento.",
      },
    ],
  },
  {
    slug: "climatizadores-para-galpoes",
    title: "Climatizadores para Galpões | Barracões e Áreas Grandes",
    metaDescription:
      "Climatizadores para galpões, barracões, centros logísticos e estoques. Soluções econômicas para ambientes grandes.",
    h1: "Climatizadores para Galpões",
    subtitle:
      "Climatização evaporativa para galpões, barracões, estoques e centros logísticos com grande volume de ar.",
    primaryKeyword: "climatizadores para galpões",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial aplicado em galpão e barracão",
    context:
      "Galpões acumulam calor por cobertura, pé-direito, movimentação de carga e baixa circulação natural. O projeto precisa distribuir ar de forma eficiente sem travar a operação.",
    benefits: [
      "Redução da sensação de calor em áreas amplas",
      "Melhora do conforto em docas, estoques e produção",
      "Sistema adequado para barracões e ambientes abertos",
      "Menor consumo em relação a refrigeração tradicional",
    ],
    applications: ["Barracões", "Docas", "Centros logísticos", "Estoques", "Áreas de separação"],
    related: [
      { href: "/solucoes/climatizadores-industriais", label: "Climatizadores industriais" },
      {
        href: "/segmentos/climatizadores-para-industrias",
        label: "Climatizadores para indústrias",
      },
      { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
      {
        href: "/segmentos/climatizadores-para-supermercados",
        label: "Climatizadores para supermercados",
      },
      {
        href: "/blog/climatizador-para-galpao-guia-completo",
        label: "Climatizador para galpão: guia completo",
      },
      cityLinks[0],
    ],
    faq: [
      {
        question: "Climatizador funciona em galpão aberto?",
        answer:
          "Sim, desde que exista projeto de posicionamento, vazão e renovação de ar compatível com o espaço.",
      },
      {
        question: "Climatizador para barracão é diferente?",
        answer:
          "Normalmente exige maior vazão e instalação industrial, por isso o dimensionamento é essencial.",
      },
      {
        question: "Quantos equipamentos meu galpão precisa?",
        answer:
          "Depende da metragem, pé-direito, ocupação e carga térmica. A Colder calcula a necessidade técnica.",
      },
      {
        question: "A solução serve para centro logístico?",
        answer:
          "Sim. Docas, separação, estoque e expedição podem se beneficiar da climatização evaporativa.",
      },
    ],
  },
  {
    slug: "climatizadores-para-academias",
    title: "Climatizadores para Academias | Treinos e Salas Amplas",
    metaDescription:
      "Climatizadores para academias, salas de musculação, cross training e studios. Mais conforto térmico e renovação do ar.",
    h1: "Climatizadores para Academias",
    subtitle:
      "Climatização para salas de treino, musculação, studios e ambientes esportivos com alta circulação de pessoas.",
    primaryKeyword: "climatizadores para academias",
    imageKey: "portable",
    imageAlt: "Climatizador comercial para academia e sala de treino",
    context:
      "Academias precisam de conforto térmico sem deixar o ambiente abafado. A renovação do ar é importante porque o fluxo de pessoas e a atividade física elevam a sensação de calor.",
    benefits: [
      "Ambiente mais agradável para alunos e professores",
      "Renovação do ar em salas de treino",
      "Aplicação em musculação, funcional e recepção",
      "Menor impacto no custo de energia",
    ],
    applications: ["Musculação", "Cross training", "Recepção", "Salas coletivas", "Studios"],
    related: [
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
      {
        href: "/segmentos/climatizadores-para-industrias",
        label: "Climatizadores para indústrias",
      },
      {
        href: "/segmentos/climatizadores-para-restaurantes",
        label: "Climatizadores para restaurantes",
      },
      { href: "/solucoes/climatizacao-para-empresas", label: "Climatização para empresas" },
      cityLinks[1],
    ],
    faq: [
      {
        question: "Climatizador é bom para academia?",
        answer:
          "Pode ser uma boa solução para áreas amplas e ventiladas, especialmente quando a meta é renovar o ar e reduzir a sensação de calor.",
      },
      {
        question: "Serve para sala de musculação?",
        answer: "Sim, com dimensionamento correto de vazão e posicionamento.",
      },
      {
        question: "O equipamento deixa o piso molhado?",
        answer: "Quando instalado e mantido corretamente, o sistema não deve molhar o ambiente.",
      },
      {
        question: "Consome menos que ar-condicionado?",
        answer: "Em muitos ambientes grandes, sim, pois não usa compressor.",
      },
    ],
  },
  {
    slug: "climatizadores-para-escolas",
    title: "Climatizadores para Escolas | Salas e Áreas Comuns",
    metaDescription:
      "Climatizadores para escolas, salas de aula, pátios cobertos, secretarias e auditórios. Conforto térmico com economia.",
    h1: "Climatizadores para Escolas",
    subtitle:
      "Soluções para salas de aula, auditórios, secretarias e áreas comuns em escolas e instituições de ensino.",
    primaryKeyword: "climatizadores para escolas",
    imageKey: "wall",
    imageAlt: "Climatizador de parede para escola e sala de aula",
    context:
      "Escolas precisam de conforto para alunos, professores e equipe administrativa durante longos períodos de permanência. O projeto deve considerar horários, ocupação e ventilação.",
    benefits: [
      "Ambientes mais confortáveis para aprendizado",
      "Renovação de ar em salas e áreas comuns",
      "Custo operacional adequado para uso diário",
      "Aplicação em salas, auditórios e pátios cobertos",
    ],
    applications: ["Salas de aula", "Auditórios", "Secretarias", "Bibliotecas", "Pátios cobertos"],
    related: [
      { href: "/segmentos/climatizacao-para-clinicas", label: "Climatização para clínicas" },
      { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
      {
        href: "/segmentos/climatizadores-para-restaurantes",
        label: "Climatizadores para restaurantes",
      },
      { href: "/solucoes/climatizadores-evaporativos", label: "Climatizadores evaporativos" },
      cityLinks[2],
    ],
    faq: [
      {
        question: "Climatizador pode ser usado em sala de aula?",
        answer:
          "Pode, desde que o ambiente tenha condições de renovação e o equipamento seja bem dimensionado.",
      },
      {
        question: "É econômico para uso diário?",
        answer:
          "O sistema evaporativo tende a ter consumo menor que ar-condicionado em muitos ambientes escolares.",
      },
      {
        question: "Serve para auditório escolar?",
        answer:
          "Sim. Auditórios podem receber climatizadores industriais ou comerciais conforme área e ocupação.",
      },
      {
        question: "A Colder atende escolas no Paraná?",
        answer: "Sim, mediante avaliação de cidade, ambiente e escopo do projeto.",
      },
    ],
  },
  {
    slug: "climatizadores-para-restaurantes",
    title: "Climatizadores para Restaurantes | Salões e Atendimento",
    metaDescription:
      "Climatizadores para restaurantes, salões, áreas de atendimento e operações comerciais. Mais conforto para clientes e equipe.",
    h1: "Climatizadores para Restaurantes",
    subtitle:
      "Climatização para salões, áreas de espera, atendimento e espaços comerciais com fluxo constante de clientes.",
    primaryKeyword: "climatizadores para restaurantes",
    imageKey: "portable",
    imageAlt: "Climatizador comercial para restaurante e salão de atendimento",
    context:
      "Restaurantes precisam manter clientes confortáveis sem elevar demais o custo de energia. Salões com portas abertas, cobertura quente e alto fluxo exigem solução bem planejada.",
    benefits: [
      "Mais conforto em salões e áreas de espera",
      "Renovação do ar em ambientes de atendimento",
      "Menor consumo para áreas amplas",
      "Aplicação em restaurantes, lanchonetes e salões comerciais",
    ],
    applications: [
      "Salão principal",
      "Área de espera",
      "Varandas cobertas",
      "Buffet",
      "Atendimento",
    ],
    related: [
      {
        href: "/segmentos/climatizadores-para-supermercados",
        label: "Climatizadores para supermercados",
      },
      { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
      {
        href: "/segmentos/climatizadores-para-industrias",
        label: "Climatizadores para indústrias",
      },
      { href: "/solucoes/climatizacao-para-empresas", label: "Climatização para empresas" },
      cityLinks[0],
    ],
    faq: [
      {
        question: "Climatizador serve para restaurante?",
        answer: "Sim, especialmente em salões amplos e áreas com boa renovação de ar.",
      },
      {
        question: "Pode ser usado em área de atendimento?",
        answer: "Pode, com posicionamento que não incomode clientes nem interfira na operação.",
      },
      {
        question: "Substitui ar-condicionado no salão?",
        answer:
          "Depende do objetivo e das condições do ambiente. A Colder avalia a melhor solução.",
      },
      {
        question: "Como orçar climatização para restaurante?",
        answer: "Informe metragem, cidade, tipo de salão e fotos do local pelo WhatsApp.",
      },
    ],
  },
  {
    slug: "climatizadores-para-supermercados",
    title: "Climatizador para Supermercado | Projeto e Instalação",
    metaDescription:
      "Climatizadores para supermercados, mercados e atacarejos. Projeto sob medida para lojas, estoques e áreas de circulação com economia e renovação do ar.",
    h1: "Climatizador para supermercado",
    subtitle:
      "Climatização para áreas de venda, estoques, recebimento e ambientes comerciais com alto fluxo de clientes.",
    primaryKeyword: "climatizadores para supermercados",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial para supermercado, loja ampla e estoque",
    context:
      "Supermercados combinam grande circulação, portas abertas, carga térmica de equipamentos e áreas amplas. A climatização precisa considerar loja, estoque e recebimento separadamente.",
    benefits: [
      "Conforto para clientes durante a compra",
      "Melhor sensação térmica para equipes de loja e estoque",
      "Renovação de ar em áreas grandes",
      "Solução econômica para ambientes comerciais amplos",
    ],
    applications: ["Área de vendas", "Recebimento", "Estoque", "Atacarejo", "Corredores amplos"],
    related: [
      {
        href: "/segmentos/climatizadores-para-restaurantes",
        label: "Climatizadores para restaurantes",
      },
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
      cityLinks[3],
    ],
    faq: [
      {
        question: "Climatizador funciona em supermercado?",
        answer:
          "Sim, desde que o projeto considere área de venda, circulação, portas e cargas térmicas internas.",
      },
      {
        question: "Serve para estoque de mercado?",
        answer:
          "Pode servir para estoques e áreas de recebimento que precisam reduzir calor e renovar o ar.",
      },
      {
        question: "O equipamento interfere em produtos?",
        answer:
          "A instalação deve ser planejada para não direcionar fluxo inadequado para produtos sensíveis.",
      },
      {
        question: "A Colder atende atacarejos?",
        answer:
          "Sim. Ambientes grandes como atacarejos podem receber projetos de climatização evaporativa.",
      },
    ],
  },
];

export const segmentPages: SeoPage[] = segmentDefinitions.map((segment) => ({
  slug: segment.slug,
  path: `/segmentos/${segment.slug}`,
  type: "segment",
  title: segment.title,
  metaDescription: segment.metaDescription,
  h1: segment.h1,
  subtitle: segment.subtitle,
  primaryKeyword: segment.primaryKeyword,
  secondaryKeywords: [
    "climatização para ambientes grandes",
    "conforto térmico",
    "renovação do ar",
    "economia de energia",
  ],
  ctaText: `Solicitar orçamento: ${segment.h1.toLowerCase()}`,
  imageKey: segment.imageKey,
  imageAlt: segment.imageAlt,
  sections: [
    {
      heading: `Por que ${segment.h1.toLowerCase()} exigem projeto eficiente`,
      body: segment.context,
    },
    {
      heading: `Benefícios dos climatizadores evaporativos para ${segment.h1.replace("Climatizadores para ", "").replace("Climatização para ", "").toLowerCase()}`,
      body: "A climatização evaporativa é indicada quando o ambiente precisa de alívio térmico, renovação do ar e consumo controlado.",
      items: segment.benefits,
    },
    {
      heading: "Economia de energia em comparação ao ar-condicionado",
      body: "Por trabalhar com evaporação de água e ventilação, o climatizador pode reduzir o custo operacional em ambientes grandes quando comparado a sistemas de refrigeração convencionais.",
    },
    {
      heading: "Renovação do ar em ambientes de grande circulação",
      body: "O sistema favorece entrada de ar novo e retirada do ar quente, ponto importante em locais com fluxo constante de pessoas.",
    },
    {
      heading: "Onde aplicar",
      body: "A Colder avalia cada área para definir pontos de instalação, vazão e direcionamento do ar.",
      items: segment.applications,
    },
    {
      heading: "Fotos, projetos e exemplos de aplicação",
      body: "A equipe comercial pode apresentar exemplos de equipamentos, instalações e configurações semelhantes durante o atendimento, conforme o segmento e a cidade do projeto.",
    },
  ],
  faq: segment.faq,
  relatedLinks: [...coreSolutionLinks, ...segment.related],
  schemaType: "Service",
}));

const igrejaPage: SeoPage = {
  slug: "climatizadores-para-igrejas",
  path: "/segmentos/climatizadores-para-igrejas",
  type: "segment",
  title: "Climatizador para Igreja | Conforto e Economia | Colder",
  metaDescription:
    "Climatizadores para igrejas, templos e salões religiosos. Projeto sob medida para ambientes amplos, cultos, auditórios e áreas de grande circulação.",
  h1: "Climatizadores para igrejas e templos",
  subtitle:
    "Projeto de climatização para templos, salões, auditórios e áreas de grande circulação, com foco em conforto durante o culto e consumo controlado.",
  primaryKeyword: "climatizadores para igrejas",
  secondaryKeywords: [
    "climatizador para igreja",
    "climatização de templo",
    "climatizador para salão paroquial",
    "conforto térmico em cultos",
  ],
  ctaText: "Solicitar avaliação para igreja",
  imageKey: "industrial",
  imageAlt: "Climatizador industrial indicado para salão de igreja e auditório religioso",
  sections: [
    {
      heading: "Ocupação concentrada em cultos, missas e eventos",
      body: "Igrejas e templos reúnem muita gente em janelas curtas de tempo. A carga térmica sobe rápido quando o salão enche, as luzes ligam e as pessoas permanecem sentadas por uma hora ou mais. O projeto precisa considerar o pico de ocupação, não só o espaço vazio. Horários de culto, ensaios, ensaios de coral, eventos infantis e uso do salão durante a semana mudam a demanda e devem entrar no levantamento.",
    },
    {
      heading: "Pé-direito alto e volume de ar do templo",
      body: "Muitos templos têm pé-direito elevado, nave ampla e cobertura que acumula calor. O volume de ar é maior do que a metragem do piso sugere, então a vazão precisa ser calculada para esse volume. Pé-direito, formato da cobertura, mezaninos e galerias influenciam a distribuição. Equipamento subdimensionado deixa o ar quente acumulado na parte alta e o conforto irregular nos bancos.",
    },
    {
      heading: "Ventilação e renovação do ar",
      body: "O climatizador evaporativo trabalha melhor quando o ar quente tem para onde sair. Janelas altas, lanternins, portas laterais ou exaustão ajudam a renovar o ambiente durante o culto. Sem caminho de saída, o desempenho cai e a umidade pode subir além do desejável. A Colder avalia aberturas existentes antes de indicar quantidade e posição dos equipamentos.",
      items: [
        "Entrada de ar externo pelo climatizador",
        "Saída do ar quente por aberturas altas ou exaustão",
        "Circulação entre nave, corredores e salão",
        "Uso em horários de pico sem deixar o ambiente abafado",
      ],
    },
    {
      heading: "Conforto sem correntes de ar sobre a congregação",
      body: "O objetivo é conforto térmico, não vento direto no rosto de quem está sentado. O posicionamento deve distribuir o ar de forma ampla, evitando jato concentrado sobre bancos, púlpito ou área do coral. Ajuste de vazão, direção das aletas e distância até as pessoas fazem diferença na percepção de conforto.",
    },
    {
      heading: "Ruído durante o culto e a pregação",
      body: "Igrejas precisam de inteligibilidade da voz, música e transmissões. O equipamento e o ponto de instalação devem respeitar o nível de ruído aceitável para o templo. Modelos, distâncias e quantidade influenciam o resultado. A avaliação considera o uso real do espaço, inclusive transmissões e gravações, sem prometer silêncio absoluto.",
    },
    {
      heading: "Posicionamento dos climatizadores",
      body: "A posição correta depende da planta, das aberturas, do palco e do fluxo de entrada da congregação. Em alguns templos faz sentido climatizar a nave principal; em outros, o salão, a recepção ou as salas laterais pedem tratamento separado. O projeto evita soprar ar contra paredes cegas ou criar zonas mortas nos fundos do templo.",
    },
    {
      heading: "Consumo e comparação com ar-condicionado",
      body: "Em salões amplos, o climatizador evaporativo tende a consumir menos energia do que um sistema de ar-condicionado dimensionado para o mesmo volume, porque não usa compressor. Isso não significa que toda igreja deva abandonar o ar-condicionado. Salas com controle rigoroso de temperatura, estúdios ou ambientes totalmente fechados podem pedir outra solução ou um projeto híbrido. A Colder indica a alternativa depois de entender o objetivo de conforto e as condições do prédio.",
    },
    {
      heading: "Quantos climatizadores a igreja precisa",
      body: "A quantidade não sai de uma regra única por metro quadrado. Área, pé-direito, lotação, ventilação, cobertura e layout entram no cálculo. Um templo estreito e alto se comporta diferente de um salão baixo e largo. Por isso a Colder pede medidas, fotos e informações de ocupação antes de sugerir modelo e quantidade.",
      items: [
        "Metragem aproximada da nave ou do salão",
        "Pé-direito e tipo de cobertura",
        "Lotação típica de cultos e eventos",
        "Aberturas, janelas e possibilidade de exaustão",
        "Áreas extras: secretaria, salas, hall e cantina",
      ],
    },
    {
      heading: "Instalação sem prejudicar a arquitetura",
      body: "Templos têm restrições de fachada, vitrais, forro, estrutura aparente e circulação de fiéis. A instalação deve respeitar a arquitetura, os acessos e a segurança. Pontos elétricos, estrutura de fixação e passagem de dutos, quando necessários, são planejados com a equipe da igreja. O objetivo é climatizar sem descaracterizar o espaço.",
    },
    {
      heading: "Manutenção para uso contínuo",
      body: "Placas evaporativas, nível de água, limpeza e revisão periódica mantêm vazão e higiene do sistema. Igrejas com uso semanal intenso se beneficiam de rotina simples de manutenção. A Colder orienta o cuidado básico e pode apoiar a manutenção conforme o contrato combinado.",
    },
    {
      heading: "Como solicitar um projeto para sua igreja",
      body: "Envie cidade, metragem aproximada, pé-direito, tipo de ambiente (templo, salão, auditório) e fotos do local. Com esses dados a Colder faz a primeira leitura técnica e indica os próximos passos de visita, dimensionamento e orçamento.",
    },
  ],
  faq: [
    {
      question: "Qual climatizador é indicado para igrejas?",
      answer:
        "O modelo depende da área do templo, pé-direito, ventilação e lotação. A Colder avalia o local para dimensionar a vazão correta.",
    },
    {
      question: "Climatizador industrial funciona em salão de igreja?",
      answer:
        "Sim, desde que o projeto preveja renovação e distribuição de ar adequadas para o tamanho do salão e o pico de ocupação.",
    },
    {
      question: "O equipamento faz muito barulho no culto?",
      answer:
        "O nível de ruído depende do modelo, da quantidade e do ponto de instalação. O projeto busca conforto térmico sem prejudicar a inteligibilidade da voz.",
    },
    {
      question: "Climatizador gasta menos energia que ar-condicionado?",
      answer:
        "Em ambientes grandes, o sistema evaporativo tende a consumir menos por não usar compressor. A comparação final depende do projeto de cada igreja.",
    },
    {
      question: "A instalação altera a fachada ou o forro?",
      answer:
        "O posicionamento é planejado para respeitar a arquitetura. Cada templo tem restrições diferentes, avaliadas antes da instalação.",
    },
    {
      question: "Como solicitar orçamento para climatizar uma igreja?",
      answer:
        "Informe cidade, metragem, pé-direito, tipo de ambiente e envie fotos pelo WhatsApp ou pelo formulário de contato.",
    },
  ],
  relatedLinks: [
    ...coreSolutionLinks,
    {
      href: "/blog/como-climatizar-uma-igreja-sem-gastar-muito",
      label: "Como climatizar uma igreja sem gastar muito",
    },
    {
      href: "/blog/climatizador-industrial-ou-ar-condicionado",
      label: "Climatizador industrial ou ar-condicionado",
    },
    { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
    { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
    cityLinks[0],
    contatoLink,
  ],
  schemaType: "Service",
};

const supermercadoPage: SeoPage = {
  slug: "climatizadores-para-supermercados",
  path: "/segmentos/climatizadores-para-supermercados",
  type: "segment",
  title: "Climatizador para Supermercado | Projeto e Instalação",
  metaDescription:
    "Climatizadores para supermercados, mercados e atacarejos. Projeto sob medida para lojas, estoques e áreas de circulação com economia e renovação do ar.",
  h1: "Climatizador para supermercado",
  subtitle:
    "Projeto de climatização para lojas, corredores, caixas, estoques e docas, com foco em circulação de clientes e consumo controlado.",
  primaryKeyword: "climatizadores para supermercados",
  secondaryKeywords: [
    "climatizador para supermercado",
    "climatização de mercado",
    "climatizador para atacarejo",
    "conforto térmico em loja",
  ],
  ctaText: "Solicitar projeto para supermercado",
  imageKey: "industrial",
  imageAlt: "Climatizador industrial para supermercado, loja ampla e estoque",
  sections: [
    {
      heading: "Circulação constante e portas abertas",
      body: "Supermercados, mercados e atacarejos têm fluxo contínuo de clientes, carrinhos e reposição. Portas de entrada, cortinas e docas trocam ar com o exterior o tempo todo. Um sistema pensado para sala fechada costuma falhar nesse cenário. O climatizador evaporativo entra como opção quando o objetivo é alívio térmico com renovação de ar em áreas amplas, sem tentar selar a loja.",
    },
    {
      heading: "Calor de iluminação, gôndolas e equipamentos",
      body: "Além do clima externo, a loja gera calor próprio: iluminação, motores de gôndolas, fornos, padaria, açougue e circulação de pessoas. Essa carga térmica não é uniforme. Corredores centrais, área de caixas e setores quentes pedem leitura separada. O projeto considera o mapa da loja, não só a metragem total.",
    },
    {
      heading: "Corredores, caixas, estoques e docas",
      body: "Cada zona tem um problema diferente. Corredores precisam de conforto para o cliente permanecer mais tempo. Caixas concentram fila e permanência. Estoques e depósitos sofrem com cobertura, pouca ventilação e movimentação de carga. Docas misturam calor externo, empilhadeiras e portas abertas. A Colder avalia se a solução deve ser geral, setorizada ou combinada.",
      items: [
        "Área de vendas e corredores",
        "Frente de caixas e entrada",
        "Padaria, açougue e setores quentes",
        "Estoque, depósito e área de reposição",
        "Docas e recebimento",
      ],
    },
    {
      heading: "Renovação do ar na loja",
      body: "Ambientes de grande circulação se beneficiam de ar renovado, não só de vento. O evaporativo introduz ar externo tratado por evaporação e ajuda a retirar o ar quente quando há caminho de saída. Isso contribui para a percepção de ambiente menos abafado, desde que o dimensionamento e as aberturas sejam compatíveis.",
    },
    {
      heading: "Posicionamento que não atrapalha a operação",
      body: "Gôndolas, ilhas, circulação de paleteiras e altura de forro limitam onde o equipamento pode ficar. O fluxo de ar não deve assoprar produtos sensíveis, molhar pisos de circulação nem criar desconforto na fila do caixa. A instalação precisa conviver com a operação diária da loja.",
    },
    {
      heading: "Conforto para clientes e equipe",
      body: "Calor excessivo reduz permanência do cliente e cansa a equipe de loja, reposição e estoque. O projeto busca uma sensação térmica mais suportável nos pontos de maior permanência. O resultado varia com umidade, ventilação e carga térmica; por isso não se promete uma queda fixa de temperatura para qualquer supermercado.",
    },
    {
      heading: "Metragem, pé-direito e o que enviar para o projeto",
      body: "Área de vendas, pé-direito, tipo de cobertura e layout pesam no cálculo de vazão. Um atacarejo alto se comporta diferente de um mercado de bairro com forro baixo. Para a primeira avaliação, informe cidade, metragem aproximada, pé-direito, tipo de ambiente (loja, estoque, doca) e envie fotos. Sem esses dados, qualquer indicação de modelo é prematura.",
      items: [
        "Cidade e bairro da loja",
        "Metragem da área de vendas e do estoque",
        "Pé-direito e tipo de cobertura",
        "Setores que mais sofrem com calor",
        "Fotos da loja, estoque e pontos de instalação possíveis",
      ],
    },
    {
      heading: "Ventilador, climatizador ou ar-condicionado",
      body: "Ventiladores só movimentam o ar quente. O ar-condicionado refrigera, mas em lojas abertas o consumo e a perda de eficiência costumam ser altos. O climatizador evaporativo ocupa o meio-termo em muitos supermercados: reduz a sensação de calor e renova o ar com custo operacional menor, quando o ambiente permite. A escolha certa depende do objetivo, das aberturas e das zonas da loja.",
    },
    {
      heading: "Manutenção em operação contínua",
      body: "Supermercados funcionam muitos dias da semana. Placas, água, filtros e limpeza precisam de rotina para manter vazão e higiene. A Colder orienta a manutenção e pode incluir esse suporte no escopo combinado, sem interromper a loja além do necessário.",
    },
    {
      heading: "Solicite o dimensionamento da sua loja",
      body: "Não existe kit padrão de climatizador para supermercado. A Colder avalia o ambiente, indica quantidade e posicionamento e orça fornecimento e instalação. Fale com a equipe e envie cidade, metragem, pé-direito e o tipo de área que precisa de conforto.",
    },
  ],
  faq: [
    {
      question: "Climatizador funciona em supermercado?",
      answer:
        "Sim, desde que o projeto considere área de venda, circulação, portas e cargas térmicas internas. Lojas abertas pedem dimensionamento específico.",
    },
    {
      question: "Serve para estoque e doca de mercado?",
      answer:
        "Pode servir para estoques e áreas de recebimento que precisam reduzir calor e renovar o ar, com posicionamento adequado à operação.",
    },
    {
      question: "O equipamento interfere em produtos?",
      answer:
        "A instalação deve ser planejada para não direcionar fluxo inadequado para produtos sensíveis nem molhar áreas de circulação.",
    },
    {
      question: "Substitui ar-condicionado em toda a loja?",
      answer:
        "Nem sempre. Em muitas lojas o evaporativo é mais adequado para áreas amplas e abertas. Setores com exigência de temperatura controlada podem pedir outra solução.",
    },
    {
      question: "A Colder atende atacarejos?",
      answer:
        "Sim. Ambientes grandes como atacarejos podem receber projetos de climatização evaporativa após avaliação de metragem, pé-direito e layout.",
    },
  ],
  relatedLinks: [
    ...coreSolutionLinks,
    {
      href: "/blog/climatizador-para-galpao-guia-completo",
      label: "Climatizador para galpão: guia completo",
    },
    {
      href: "/blog/quanto-custa-instalar-climatizadores-industriais",
      label: "Quanto custa instalar climatizadores industriais",
    },
    { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
    { href: "/segmentos/climatizadores-para-industrias", label: "Climatizadores para indústrias" },
    {
      href: "/segmentos/climatizadores-para-restaurantes",
      label: "Climatizadores para restaurantes",
    },
    cityLinks[0],
    contatoLink,
  ],
  schemaType: "Service",
};

replaceSeoPage(segmentPages, igrejaPage);
replaceSeoPage(segmentPages, supermercadoPage);

const cityDefinitions = [
  ["climatizadores-industriais-em-maringa", "Maringá", "em Maringá"],
  ["climatizadores-industriais-em-londrina", "Londrina", "em Londrina"],
  ["climatizadores-industriais-em-curitiba", "Curitiba", "em Curitiba"],
  ["climatizadores-industriais-no-parana", "Paraná", "no Paraná"],
] as const;

const cityTitles: Record<string, string> = {
  "climatizadores-industriais-em-maringa": "Climatizadores em Maringá para Empresas | Colder",
  "climatizadores-industriais-em-londrina": "Climatizadores Industriais em Londrina | Colder",
  "climatizadores-industriais-em-curitiba": "Climatizadores em Curitiba para Empresas | Colder",
  "climatizadores-industriais-no-parana": "Climatizadores Industriais no Paraná | Colder",
};

const cityMetas: Record<string, string> = {
  "climatizadores-industriais-em-maringa":
    "Projeto, venda e instalação de climatizadores industriais em Maringá para empresas, igrejas, supermercados e galpões. Solicite uma avaliação.",
  "climatizadores-industriais-em-londrina":
    "Climatizadores industriais em Londrina para empresas, galpões, igrejas e indústrias. Avaliação, dimensionamento e instalação com a Colder.",
  "climatizadores-industriais-em-curitiba":
    "Climatizadores industriais em Curitiba para empresas e ambientes amplos. Projeto e orientação técnica com a Colder Climatizadores.",
  "climatizadores-industriais-no-parana":
    "Climatizadores industriais no Paraná para empresas, galpões, igrejas e indústrias. Solicite uma avaliação com a Colder.",
};

export const cityPages: SeoPage[] = cityDefinitions.map(([slug, city, suffix]) => ({
  slug,
  path: `/cidades/${slug}`,
  type: "city",
  title: cityTitles[slug] ?? `Climatizadores Industriais ${suffix} | ${SITE_NAME}`,
  metaDescription:
    cityMetas[slug] ??
    `Climatizadores industriais ${suffix} para empresas, galpões, igrejas, clínicas e indústrias. Solicite orçamento com a Colder Climatizadores.`,
  h1: `Climatizadores Industriais ${suffix}`,
  subtitle: `Soluções de climatização industrial e empresarial ${suffix} para ambientes grandes, empresas locais e operações que precisam de conforto térmico.`,
  primaryKeyword: `climatizadores industriais ${suffix}`,
  secondaryKeywords: [
    `climatizadores ${suffix}`,
    `climatização industrial ${suffix}`,
    "climatizadores para empresas",
    "climatizador evaporativo industrial",
  ],
  ctaText: `Solicitar orçamento ${suffix}`,
  imageKey: "hero",
  imageAlt: `Climatizadores industriais ${suffix} para empresas e galpões`,
  sections: [
    {
      heading: `Soluções de climatização industrial ${suffix}`,
      body: `A Colder atende projetos de climatização ${suffix} para empresas que precisam reduzir calor, renovar o ar e melhorar o conforto em áreas comerciais, industriais e institucionais. A indicação de equipamento só é feita após entender o ambiente.`,
    },
    {
      heading: "Ambientes atendidos pela Colder",
      body: "Os projetos podem atender galpões, indústrias, igrejas, clínicas, academias, escolas, restaurantes, supermercados, lojas e recepções.",
      items: [
        "Galpões e barracões",
        "Indústrias e áreas de produção",
        "Igrejas e auditórios",
        "Clínicas, escolas e comércios",
      ],
    },
    {
      heading: `Benefícios para empresas ${city === "Paraná" ? "do Paraná" : `de ${city}`}`,
      body: "A solução ajuda a controlar custos de energia, melhorar a experiência de clientes e oferecer melhores condições de trabalho para equipes locais. O resultado depende de ventilação, carga térmica e dimensionamento.",
    },
    {
      heading: "Economia de energia",
      body: "Climatizadores evaporativos tendem a consumir menos energia que sistemas convencionais em ambientes amplos, especialmente quando o objetivo é conforto térmico com renovação de ar.",
    },
    {
      heading: "Projetos e aplicações",
      body: "A Colder avalia metragem, pé-direito, ventilação, rotina de uso e infraestrutura para indicar modelo, quantidade e posicionamento dos equipamentos.",
    },
    {
      heading: `Atendimento ${suffix} e região`,
      body: "O atendimento comercial orienta o levantamento inicial por WhatsApp e agenda os próximos passos conforme localidade, escopo e disponibilidade técnica.",
    },
  ],
  faq: [
    {
      question: `A Colder atende empresas ${suffix}?`,
      answer: `Sim. A Colder avalia projetos ${suffix} para empresas, galpões, igrejas, clínicas e indústrias.`,
    },
    {
      question: `Quanto custa instalar climatizadores industriais ${suffix}?`,
      answer:
        "O custo depende de área, quantidade de equipamentos, infraestrutura e complexidade da instalação. O orçamento é feito após levantamento do ambiente.",
    },
    {
      question: "Climatizador industrial é indicado para galpões?",
      answer:
        "Sim. Galpões e barracões são usos comuns, desde que a solução seja dimensionada para o volume de ar e o tipo de operação.",
    },
    {
      question: "Como pedir um orçamento local?",
      answer:
        "Entre em contato pelo WhatsApp, informe a cidade, tipo de ambiente, metragem aproximada, pé-direito e envie fotos para a primeira avaliação.",
    },
  ],
  relatedLinks: [
    ...coreSolutionLinks,
    { href: "/segmentos/climatizadores-para-igrejas", label: "Climatizadores para igrejas" },
    { href: "/segmentos/climatizacao-para-clinicas", label: "Climatização para clínicas" },
    { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
    { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
    { href: "/segmentos/climatizadores-para-industrias", label: "Climatizadores para indústrias" },
  ],
  schemaType: "Service",
  localArea: city,
}));

const maringaPage: SeoPage = {
  slug: "climatizadores-industriais-em-maringa",
  path: "/cidades/climatizadores-industriais-em-maringa",
  type: "city",
  title: "Climatizadores em Maringá para Empresas | Colder",
  metaDescription:
    "Projeto, venda e instalação de climatizadores industriais em Maringá para empresas, igrejas, supermercados e galpões. Solicite uma avaliação.",
  h1: "Climatizadores industriais em Maringá",
  subtitle:
    "A Colder atende empresas em Maringá e região com projeto, dimensionamento, venda, instalação e manutenção de climatizadores industriais e evaporativos.",
  primaryKeyword: "climatizadores industriais em Maringá",
  secondaryKeywords: [
    "climatizadores em Maringá",
    "climatização industrial em Maringá",
    "climatizadores para empresas em Maringá",
    "climatizador evaporativo Maringá",
  ],
  ctaText: "Solicitar avaliação em Maringá",
  imageKey: "hero",
  imageAlt: "Climatizadores industriais em Maringá para empresas e galpões",
  sections: [
    {
      heading: "Empresa de climatização em Maringá",
      body: "A Colder Climatizadores fica na Rua Rodolfo Cremm, 18.872, Jardim Guairacá, Maringá-PR, CEP 87070-545. O telefone comercial é (44) 3354-1269. A base em Maringá permite atendimento local para visita, diagnóstico e alinhamento de projeto com empresas da cidade e da região.",
    },
    {
      heading: "Atendimento em Maringá e região",
      body: "O atendimento cobre Maringá e municípios próximos, conforme viabilidade de deslocamento e escopo do projeto. O primeiro contato pode ser feito por WhatsApp ou pelo formulário de contato, com envio de fotos e medidas. A equipe confirma os próximos passos de acordo com a localidade e o tipo de ambiente.",
    },
    {
      heading: "Visita técnica e diagnóstico do ambiente",
      body: "Quando o levantamento inicial não é suficiente, a visita ajuda a entender pé-direito, cobertura, aberturas, pontos elétricos e restrições de instalação. O diagnóstico não substitui o cálculo de vazão: ele reúne as condições reais do espaço para o dimensionamento. Sem esse entendimento, qualquer indicação de modelo seria genérica.",
    },
    {
      heading: "Venda, dimensionamento, instalação e manutenção",
      body: "A Colder atua no ciclo do projeto: orientação comercial, dimensionamento, fornecimento dos equipamentos, instalação e orientação de manutenção. O escopo de cada proposta é combinado caso a caso. Empresas que já possuem estrutura podem receber apoio só no dimensionamento e na instalação; outras precisam do conjunto completo.",
      items: [
        "Levantamento do ambiente e da rotina de uso",
        "Dimensionamento de vazão e quantidade",
        "Fornecimento de climatizadores industriais e evaporativos",
        "Instalação conforme a infraestrutura do local",
        "Orientação e suporte de manutenção",
      ],
    },
    {
      heading: "Segmentos atendidos em Maringá",
      body: "A demanda local inclui empresas, igrejas, supermercados, galpões, indústrias, academias, escolas, clínicas e restaurantes. Cada segmento tem ocupação, horário e restrição diferentes. O conteúdo desta página descreve o atendimento na cidade; as páginas de segmento detalham o uso específico de cada ambiente.",
      items: [
        "Empresas, lojas e áreas de atendimento",
        "Igrejas, templos e salões",
        "Supermercados, mercados e atacarejos",
        "Galpões, barracões e centros logísticos",
        "Indústrias e áreas de produção",
      ],
    },
    {
      heading: "Equipamentos sob medida, sem indicação genérica",
      body: "A Colder trabalha com climatizadores industriais e evaporativos de diferentes portes. A escolha do modelo depende de metragem, pé-direito, ventilação, carga térmica e objetivo de conforto. Não há indicação definitiva de equipamento sem esse cálculo. Promessas de queda fixa de temperatura ou de um único modelo para toda Maringá não fazem parte do método de projeto.",
    },
    {
      heading: "Como solicitar avaliação em Maringá",
      body: "Para um orçamento útil, informe cidade (Maringá ou município da região), metragem aproximada, pé-direito, tipo de ambiente e, se possível, envie fotos. Com esses dados a equipe consegue orientar a primeira leitura técnica e indicar se o próximo passo é visita, dimensionamento ou proposta.",
    },
  ],
  faq: [
    {
      question: "Onde fica a Colder em Maringá?",
      answer:
        "Na Rua Rodolfo Cremm, 18.872, Jardim Guairacá, Maringá-PR, CEP 87070-545. O telefone é (44) 3354-1269.",
    },
    {
      question: "A Colder atende só Maringá?",
      answer:
        "A base é em Maringá e o atendimento cobre a cidade e a região, conforme viabilidade do projeto e do deslocamento.",
    },
    {
      question: "Vocês fazem visita técnica?",
      answer:
        "Sim, quando o diagnóstico presencial é necessário. O primeiro contato pode ser feito com fotos, metragem e pé-direito para agilizar a avaliação.",
    },
    {
      question: "A Colder vende e instala o equipamento?",
      answer:
        "Sim. O atendimento pode incluir dimensionamento, venda, instalação e orientação de manutenção, conforme o escopo combinado.",
    },
    {
      question: "Qual climatizador é indicado para minha empresa em Maringá?",
      answer:
        "Só depois da avaliação. Área, pé-direito, ventilação e tipo de ambiente definem modelo e quantidade. Não há indicação definitiva sem esse cálculo.",
    },
    {
      question: "Como pedir um orçamento local?",
      answer:
        "Informe cidade, metragem, pé-direito, tipo de ambiente e envie fotos pelo WhatsApp ou pela página de contato.",
    },
  ],
  relatedLinks: [
    { href: "/solucoes/climatizadores-industriais", label: "Climatizadores industriais" },
    { href: "/solucoes/climatizadores-evaporativos", label: "Climatizadores evaporativos" },
    {
      href: "/segmentos/climatizadores-para-supermercados",
      label: "Climatizadores para supermercados",
    },
    { href: "/segmentos/climatizadores-para-igrejas", label: "Climatizadores para igrejas" },
    { href: "/segmentos/climatizadores-para-industrias", label: "Climatizadores para indústrias" },
    { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
    { href: "/segmentos/climatizadores-para-academias", label: "Climatizadores para academias" },
    contatoLink,
  ],
  schemaType: "Service",
  localArea: "Maringá",
};

replaceSeoPage(cityPages, maringaPage);

export const allSeoPages: SeoPage[] = [...seoPages, ...segmentPages, ...cityPages];

export function getSeoPage(type: SeoPageType, slug: string) {
  return allSeoPages.find((page) => page.type === type && page.slug === slug);
}

export const blogPages: BlogPage[] = [
  {
    slug: "climatizador-industrial-ou-ar-condicionado",
    path: "/blog/climatizador-industrial-ou-ar-condicionado",
    title: "Climatizador Industrial ou Ar-condicionado | Qual escolher?",
    metaDescription:
      "Compare climatizador industrial e ar-condicionado para empresas, galpões e ambientes grandes. Veja quando cada solução faz sentido.",
    h1: "Climatizador industrial ou ar-condicionado: qual escolher?",
    subtitle:
      "Um guia prático para empresas que precisam reduzir calor sem perder eficiência operacional.",
    imageKey: "industrial",
    imageAlt: "Comparação entre climatizador industrial e ar-condicionado para empresa",
    datePublished: "2025-06-01",
    dateModified: "2026-03-15",
    lastmod: "2026-03-15",
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Conhecer climatizadores industriais",
    },
    relatedLinks: [
      {
        href: "/blog/climatizador-evaporativo-funciona-em-ambiente-fechado",
        label: "Climatizador evaporativo em ambiente fechado",
      },
      {
        href: "/blog/climatizador-industrial-reduz-quantos-graus",
        label: "Climatizador industrial reduz quantos graus?",
      },
      {
        href: "/blog/quanto-custa-instalar-climatizadores-industriais",
        label: "Quanto custa instalar climatizadores industriais",
      },
      {
        href: "/solucoes/climatizadores-industriais",
        label: "Climatizadores industriais",
      },
    ],
    sections: [
      {
        heading: "O que cada sistema faz de fato",
        body: "Ar-condicionado refrigera o ar, recircula o ambiente e busca uma temperatura controlada. O climatizador industrial evaporativo puxa ar externo, passa esse ar por placas umedecidas e devolve ar renovado com menor sensação térmica. São lógicas diferentes: um sela e resfria; o outro ventila, umedece e troca o ar. Escolher pelo nome do equipamento, sem olhar o prédio, costuma gerar frustração.",
      },
      {
        heading: "Quando o climatizador industrial faz sentido",
        body: "Ele costuma ser indicado para áreas grandes, galpões, barracões, lojas abertas, igrejas e indústrias em que renovação de ar e consumo baixo são prioridades. Ambientes com portas abertas, pé-direito alto e circulação de pessoas raramente se comportam bem com um split dimensionado para sala fechada. Nesses casos, o evaporativo entra como alternativa de conforto operacional, não como câmara fria.",
      },
      {
        heading: "Quando o ar-condicionado é melhor",
        body: "Ambientes fechados que exigem temperatura controlada, baixa umidade ou requisitos técnicos específicos podem precisar de ar-condicionado. Salas limpas, estoques com faixa estreita de temperatura, consultórios com exigência própria e escritórios selados são exemplos em que o evaporativo pode não atender o objetivo. Nesses casos, insistir no climatizador só para economizar energia costuma ser um erro de projeto.",
      },
      {
        heading: "Fatores que devem entrar na decisão",
        body: "A decisão deve considerar área, pé-direito, ventilação, carga térmica, ocupação e custo de energia. Em alguns casos, o projeto pode combinar soluções: evaporativo na área ampla e ar-condicionado em salas pontuais. Essa leitura híbrida é comum em empresas com produção e escritório no mesmo terreno.",
        items: [
          "Volume de ar (metragem e pé-direito)",
          "Aberturas, portas e possibilidade de exaustão",
          "Calor de máquinas, iluminação e ocupação",
          "Objetivo: conforto, processo ou temperatura fixa",
          "Custo de energia e rotina de uso",
        ],
      },
      {
        heading: "Consumo, umidade e expectativa de conforto",
        body: "O climatizador evaporativo tende a gastar menos porque não usa compressor. Em contrapartida, adiciona umidade ao ar e depende de renovação. O ar-condicionado consome mais em volumes grandes, mas entrega controle mais estreito quando o ambiente está fechado. Nenhuma das duas tecnologias reduz uma quantidade fixa de graus em qualquer empresa; o conforto percebido varia com o clima do dia e com o dimensionamento.",
      },
      {
        heading: "O que enviar para um orçamento comparativo",
        body: "Informe cidade, tipo de ambiente, metragem aproximada, pé-direito, se o espaço é aberto ou fechado e o objetivo (conforto da equipe, atendimento ao público ou processo). Fotos da cobertura, das aberturas e dos pontos de permanência aceleram a análise. Com esses dados, a Colder indica se o caminho é climatizador industrial, ar-condicionado ou um projeto combinado.",
      },
    ],
    faq: [
      {
        question: "Climatizador substitui ar-condicionado?",
        answer:
          "Depende do ambiente e do objetivo. Para conforto em áreas amplas com renovação de ar, pode substituir; para controle rigoroso de temperatura, nem sempre.",
      },
      {
        question: "Qual gasta menos energia?",
        answer:
          "O climatizador evaporativo tende a gastar menos porque não usa compressor. A diferença real depende do volume do ambiente e do sistema comparado.",
      },
      {
        question: "Pode usar os dois no mesmo imóvel?",
        answer:
          "Sim. Muitas empresas climatizam a área ampla com evaporativo e mantêm ar-condicionado em salas que exigem controle.",
      },
    ],
  },
  {
    slug: "como-climatizar-uma-igreja-sem-gastar-muito",
    path: "/blog/como-climatizar-uma-igreja-sem-gastar-muito",
    title: "Como Climatizar uma Igreja sem Gastar Muito | Guia Colder",
    metaDescription:
      "Veja como climatizar templo, salão de igreja e auditório religioso com economia, renovação do ar e conforto térmico.",
    h1: "Como climatizar uma igreja sem gastar muito",
    subtitle: "Pontos essenciais para melhorar o conforto térmico em templos e salões religiosos.",
    imageKey: "industrial",
    imageAlt: "Climatizador para templo e salão de igreja",
    datePublished: "2025-06-20",
    dateModified: "2026-03-15",
    lastmod: "2026-03-15",
    commercialLink: {
      href: "/segmentos/climatizadores-para-igrejas",
      label: "Ver climatizadores para igrejas",
    },
    relatedLinks: [
      {
        href: "/blog/climatizador-industrial-ou-ar-condicionado",
        label: "Climatizador industrial ou ar-condicionado",
      },
      {
        href: "/blog/quanto-custa-instalar-climatizadores-industriais",
        label: "Quanto custa instalar climatizadores industriais",
      },
      {
        href: "/blog/climatizador-para-galpao-guia-completo",
        label: "Climatizador para galpão: guia completo",
      },
      { href: "/segmentos/climatizadores-para-igrejas", label: "Climatizadores para igrejas" },
      cityLinks[0],
    ],
    sections: [
      {
        heading: "Mapeie os horários de maior lotação",
        body: "Cultos, missas e eventos concentram muitas pessoas em pouco tempo. Dimensionar pelo templo vazio subestima a carga térmica do horário de pico. Anote lotação típica, duração do culto, uso do salão durante a semana e se há transmissões com iluminação extra. Esses dados pesam mais do que uma regra genérica de equipamento por metro quadrado.",
      },
      {
        heading: "Priorize renovação do ar, não só vento",
        body: "Templos e salões precisam remover ar quente e distribuir ar renovado sem gerar desconforto localizado. Pé-direito alto acumula calor na cobertura; sem saída de ar, o climatizador trabalha contra o próprio ambiente. Verifique janelas altas, portas laterais e a possibilidade de exaustão antes de comprar qualquer máquina.",
      },
      {
        heading: "Evite comprar equipamento só pelo preço",
        body: "A escolha apenas por preço pode gerar baixo desempenho. Vazão, quantidade e posicionamento fazem diferença no conforto dos bancos e no ruído durante a pregação. Um equipamento barato e mal posicionado gasta energia e ainda deixa a congregação quente. O custo que importa é o do projeto certo, não o da unidade isolada.",
      },
      {
        heading: "Conforto, ruído e arquitetura do templo",
        body: "O ar não deve bater direto no rosto de quem está sentado, nem competir com o som do culto. Fixação, passagem elétrica e pontos na fachada precisam respeitar a arquitetura. Igrejas com vitrais, forro aparente ou estrutura metálica pedem um plano de instalação, não uma decisão de última hora no dia do evento.",
        items: [
          "Lotação de culto e eventos",
          "Pé-direito e tipo de cobertura",
          "Aberturas para saída do ar quente",
          "Nível de ruído aceitável no templo",
          "Restrições de fachada, forro e circulação",
        ],
      },
      {
        heading: "Quando o evaporativo é adequado",
        body: "A tecnologia evaporativa costuma ser adequada quando o templo é amplo, tem alguma renovação de ar e o objetivo é conforto com consumo controlado. Ela não é automática para qualquer igreja. Salas pequenas, ambientes totalmente fechados ou espaços que exigem temperatura fixa podem pedir outra solução. A Colder só indica o caminho depois dessa leitura.",
      },
      {
        heading: "O que enviar para orçar com economia real",
        body: "Economia de verdade começa no dimensionamento. Envie cidade, metragem aproximada, pé-direito, tipo de ambiente (templo, salão, auditório) e fotos. Com isso é possível estimar vazão, quantidade e complexidade de instalação sem superdimensionar. Superdimensionar também custa caro: compra-se mais do que o culto precisa.",
      },
    ],
    faq: [
      {
        question: "Climatizador industrial serve para igreja?",
        answer: "Sim, especialmente em salões amplos e templos com boa renovação de ar.",
      },
      {
        question: "Como reduzir custo de energia?",
        answer:
          "Dimensionando o sistema corretamente e usando tecnologia evaporativa quando ela é adequada ao volume e às aberturas do templo.",
      },
      {
        question: "Preciso climatizar o templo inteiro?",
        answer:
          "Nem sempre. Em alguns casos o salão, o hall ou a área dos bancos concentram o desconforto e podem ser tratados com prioridade.",
      },
    ],
  },
  {
    slug: "como-climatizar-uma-clinica-com-eficiencia",
    path: "/blog/como-climatizar-uma-clinica-com-eficiencia",
    title: "Como Climatizar uma Clínica com Eficiência | Colder",
    metaDescription:
      "Dicas para climatizar clínicas, recepções e salas de espera com conforto, renovação de ar e consumo controlado.",
    h1: "Como climatizar uma clínica com eficiência",
    subtitle:
      "O que avaliar em recepções, salas de espera e áreas comuns antes de escolher o sistema.",
    imageKey: "wall",
    imageAlt: "Climatização para recepção de clínica",
    datePublished: "2025-07-10",
    dateModified: "2026-03-15",
    lastmod: "2026-03-15",
    commercialLink: {
      href: "/segmentos/climatizacao-para-clinicas",
      label: "Ver climatização para clínicas",
    },
    relatedLinks: [
      {
        href: "/blog/climatizador-evaporativo-funciona-em-ambiente-fechado",
        label: "Climatizador evaporativo em ambiente fechado",
      },
      {
        href: "/blog/climatizador-industrial-ou-ar-condicionado",
        label: "Climatizador industrial ou ar-condicionado",
      },
      {
        href: "/blog/como-climatizar-uma-igreja-sem-gastar-muito",
        label: "Como climatizar uma igreja sem gastar muito",
      },
      { href: "/segmentos/climatizacao-para-clinicas", label: "Climatização para clínicas" },
    ],
    sections: [
      {
        heading: "Separe áreas comuns e salas técnicas",
        body: "Recepções e corredores podem ter necessidades diferentes de consultórios ou salas com requisitos específicos. Tratar a clínica como um bloco único leva a superdimensionar uma área e deixar outra sem conforto. Mapeie recepção, espera, corredores, administrativo e salas de atendimento antes de escolher a tecnologia.",
      },
      {
        heading: "Conforto e percepção do paciente",
        body: "Calor em sala de espera prejudica a experiência. Renovação do ar e temperatura agradável ajudam na sensação de cuidado. Ao mesmo tempo, jato de ar direto, ruído alto ou umidade excessiva também incomodam. O projeto eficiente equilibra conforto térmico com a percepção de um ambiente profissional.",
      },
      {
        heading: "Quando o climatizador evaporativo cabe na clínica",
        body: "Recepções amplas, halls e áreas com alguma abertura podem se beneficiar do evaporativo pela renovação de ar e pelo menor consumo. Consultórios que precisam de temperatura estável, salas com exigência normativa ou ambientes totalmente fechados podem continuar com ar-condicionado. A eficiência está em usar cada sistema onde ele rende.",
      },
      {
        heading: "Avalie custo de operação no horário comercial",
        body: "Clínicas funcionam por muitas horas. O consumo de energia deve entrar na conta do projeto, junto com manutenção e ruído. Um sistema barato na compra e caro todo mês não é eficiente. Compare a rotina real de funcionamento, não só o pico de calor de um único dia.",
        items: [
          "Áreas comuns versus salas de atendimento",
          "Fluxo de pacientes na espera",
          "Ventilação e aberturas da recepção",
          "Exigências específicas de algumas salas",
          "Horário de funcionamento e custo de energia",
        ],
      },
      {
        heading: "Posicionamento, ruído e higiene",
        body: "O equipamento não deve soprar sobre a recepcionista nem criar poça na circulação. Manutenção de água e placas importa em ambiente de saúde pela percepção de higiene. Ruído também pesa: a espera precisa de conversa e, em muitos casos, de sigilo próximo às salas. Esses detalhes entram no projeto tanto quanto a vazão.",
      },
      {
        heading: "O que enviar para um orçamento eficiente",
        body: "Informe cidade, metragem das áreas que serão climatizadas, pé-direito, se a recepção tem abertura para a rua e quais salas têm restrição técnica. Fotos da espera e da fachada ajudam. Com isso a Colder indica se o caminho é climatizador nas áreas comuns, ar-condicionado pontual ou uma combinação.",
      },
    ],
    faq: [
      {
        question: "Climatizador pode ser usado em clínica?",
        answer: "Pode ser indicado para áreas comuns, dependendo da avaliação técnica.",
      },
      {
        question: "Recepção precisa de ar-condicionado?",
        answer: "Nem sempre. A decisão depende de ventilação, área e objetivo de conforto.",
      },
      {
        question: "Consultório e espera usam o mesmo sistema?",
        answer:
          "Nem sempre. Muitas clínicas separam o tratamento das áreas comuns do das salas de atendimento.",
      },
    ],
  },
  {
    slug: "climatizador-evaporativo-funciona-em-ambiente-fechado",
    path: "/blog/climatizador-evaporativo-funciona-em-ambiente-fechado",
    title: "Climatizador Evaporativo Funciona em Ambiente Fechado?",
    metaDescription:
      "Entenda quando climatizador evaporativo funciona em ambiente fechado, por que a renovação do ar importa e quando pedir avaliação técnica.",
    h1: "Climatizador evaporativo funciona em ambiente fechado?",
    subtitle: "A resposta depende da renovação do ar, da exaustão e das condições do local.",
    imageKey: "water",
    imageAlt: "Climatizador evaporativo com água para renovação do ar",
    datePublished: "2025-08-01",
    dateModified: "2026-03-15",
    lastmod: "2026-03-15",
    commercialLink: {
      href: "/solucoes/climatizadores-evaporativos",
      label: "Conhecer climatizadores evaporativos",
    },
    relatedLinks: [
      {
        href: "/blog/climatizador-industrial-ou-ar-condicionado",
        label: "Climatizador industrial ou ar-condicionado",
      },
      {
        href: "/blog/climatizador-industrial-reduz-quantos-graus",
        label: "Climatizador industrial reduz quantos graus?",
      },
      {
        href: "/blog/climatizador-para-galpao-guia-completo",
        label: "Climatizador para galpão: guia completo",
      },
      {
        href: "/solucoes/climatizadores-evaporativos",
        label: "Climatizadores evaporativos",
      },
    ],
    sections: [
      {
        heading: "O ponto principal é a renovação",
        body: "O climatizador evaporativo trabalha melhor quando consegue puxar ar externo e expulsar ar quente do ambiente. Ele não é um aparelho de recircular o mesmo ar gelado. Se o local não tem caminho de entrada e saída, o processo evaporativo perde eficiência e a umidade sobe. Por isso a pergunta certa não é só fechado ou aberto, e sim se existe renovação suficiente.",
      },
      {
        heading: "Ambiente fechado exige cuidado",
        body: "Sem saída de ar, o desempenho cai e a umidade pode aumentar demais. Portas trancadas, forro selado e falta de exaustão criam um cenário ruim para o evaporativo. Uma avaliação evita expectativa errada: em alguns imóveis basta prever exaustão; em outros o ar-condicionado continua sendo a ferramenta certa.",
      },
      {
        heading: "Quando o sistema é indicado",
        body: "Galpões, salões, lojas, igrejas e áreas com aberturas ou exaustão costumam ser bons candidatos. Mesmo um ambiente com portas que abrem o dia todo pode se comportar como semiaberto. Já uma sala pequena, sem janela efetiva e com ocupação pontual, raramente é o melhor uso do evaporativo.",
      },
      {
        heading: "Umidade, conforto e sinais de projeto inadequado",
        body: "O processo adiciona umidade ao ar. Em clima mais seco, isso costuma ajudar a sensação térmica. Em dias muito úmidos, o ganho de conforto diminui. Se o ambiente fica abafado, com cheiro de umidade ou piso molhado, o problema em geral está em vazão, posicionamento, falta de saída de ar ou manutenção, não em um número mágico de graus.",
        items: [
          "Existência de entrada de ar externo",
          "Saída de ar quente ou exaustão",
          "Volume do ambiente e pé-direito",
          "Umidade típica da região e do dia",
          "Ocupação e tempo de permanência",
        ],
      },
      {
        heading: "Não confunda ventilador com climatizador",
        body: "Ventilador só movimenta o ar que já está no recinto. O evaporativo troca e trata o ar por evaporação de água. Em ambiente fechado sem renovação, os dois se aproximam de um resultado ruim, cada um à sua maneira. O projeto precisa garantir o ciclo de ar, não apenas a potência do motor.",
      },
      {
        heading: "O que a Colder precisa para avaliar o seu caso",
        body: "Envie cidade, metragem, pé-direito, fotos das aberturas e diga se o espaço permanece fechado durante o uso. Com isso dá para indicar se o evaporativo é viável, se falta prever exaustão ou se outra solução atende melhor. Não há resposta única para todo ambiente fechado.",
      },
    ],
    faq: [
      {
        question: "Precisa deixar portas abertas?",
        answer:
          "Nem sempre, mas é necessário haver renovação de ar suficiente, por portas, janelas ou exaustão.",
      },
      {
        question: "Funciona em sala pequena?",
        answer: "Pode não ser a melhor escolha. Depende do uso e da ventilação.",
      },
      {
        question: "O evaporativo aumenta a umidade?",
        answer:
          "Sim. O quanto isso é aceitável depende do clima, da renovação e do tipo de operação no local.",
      },
    ],
  },
  {
    slug: "quanto-custa-instalar-climatizadores-industriais",
    path: "/blog/quanto-custa-instalar-climatizadores-industriais",
    title: "Quanto Custa Instalar Climatizadores Industriais?",
    metaDescription:
      "Veja fatores que influenciam o custo de climatizadores industriais: área, vazão, quantidade de equipamentos e instalação.",
    h1: "Quanto custa instalar climatizadores industriais?",
    subtitle:
      "O preço varia conforme projeto, ambiente e infraestrutura. Entenda os fatores principais.",
    imageKey: "industrial",
    imageAlt: "Instalação de climatizador industrial para empresa",
    datePublished: "2025-08-25",
    dateModified: "2026-03-15",
    lastmod: "2026-03-15",
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Solicitar orçamento de climatizadores industriais",
    },
    relatedLinks: [
      {
        href: "/blog/climatizador-para-galpao-guia-completo",
        label: "Climatizador para galpão: guia completo",
      },
      {
        href: "/blog/climatizador-industrial-reduz-quantos-graus",
        label: "Climatizador industrial reduz quantos graus?",
      },
      {
        href: "/blog/climatizador-industrial-ou-ar-condicionado",
        label: "Climatizador industrial ou ar-condicionado",
      },
      {
        href: "/solucoes/climatizadores-industriais",
        label: "Climatizadores industriais",
      },
    ],
    sections: [
      {
        heading: "Não existe tabela única de preço",
        body: "O preço de instalar climatizadores industriais muda com o ambiente. Publicar um valor fixo para galpão, igreja ou loja seria impreciso e levaria a orçamento errado. O caminho honesto é explicar os fatores, pedir os dados do local e montar a proposta depois do levantamento. Este artigo lista o que pesa no custo, sem inventar números.",
      },
      {
        heading: "Área e pé-direito",
        body: "Quanto maior o volume de ar, maior tende a ser a necessidade de vazão e quantidade de equipamentos. Um galpão baixo e largo não se comporta como um templo alto e estreito, mesmo com metragem parecida. Por isso área sozinha não fecha o orçamento: pé-direito e formato do espaço entram no cálculo.",
      },
      {
        heading: "Infraestrutura de instalação",
        body: "Pontos elétricos, estrutura de fixação, acesso, andaimes, altura de trabalho e distribuição de ar podem influenciar o custo final tanto quanto o equipamento. Um local com estrutura pronta tende a ter instalação mais simples. Fachadas delicadas, forros, restrições de horário e necessidade de içamento aumentam a complexidade.",
      },
      {
        heading: "Objetivo do projeto e setorização",
        body: "Climatizar uma área inteira é diferente de melhorar o conforto em setores específicos de trabalho. Setorizar pode reduzir a quantidade de máquinas em alguns casos e aumentar em outros, se houver muitos pontos de permanência espalhados. O objetivo (conforto da equipe, atendimento ao público ou alívio em docas) muda o escopo.",
        items: [
          "Metragem e pé-direito",
          "Quantidade e porte dos equipamentos",
          "Pontos elétricos e estrutura de fixação",
          "Acesso, altura e restrições de instalação",
          "Escopo: só fornecimento ou fornecimento e instalação",
          "Manutenção e comissionamento, quando inclusos",
        ],
      },
      {
        heading: "O que entra ou não na proposta",
        body: "A proposta pode contemplar fornecimento e instalação conforme o escopo combinado. Às vezes o cliente já tem equipe de manutenção e pede só o equipamento dimensionado. Em outros projetos, visita, instalação, orientação de uso e plano de manutenção fazem parte do mesmo pacote. Comparar só o preço da máquina ignora metade do custo real.",
      },
      {
        heading: "Como pedir uma estimativa sem visita imediata",
        body: "Uma estimativa inicial pode ser feita com medidas e fotos, mas o projeto final pode exigir avaliação detalhada. Envie cidade, metragem, pé-direito, tipo de ambiente e fotos da cobertura e dos pontos possíveis de instalação. A Colder usa esses dados para orientar a faixa de complexidade, nunca para cravar um preço sem conhecer o local.",
      },
    ],
    faq: [
      {
        question: "Dá para orçar sem visita?",
        answer:
          "Uma estimativa inicial pode ser feita com medidas e fotos, mas o projeto final pode exigir avaliação detalhada.",
      },
      {
        question: "O equipamento e a instalação entram no mesmo orçamento?",
        answer: "A proposta pode contemplar fornecimento e instalação conforme o escopo combinado.",
      },
      {
        question: "Por que não há um preço médio publicado?",
        answer:
          "Porque área, pé-direito, quantidade de máquinas e infraestrutura mudam demais de um projeto para outro. Um número genérico induziria erro.",
      },
    ],
  },
  {
    slug: "climatizador-industrial-reduz-quantos-graus",
    path: "/blog/climatizador-industrial-reduz-quantos-graus",
    title: "Climatizador Industrial Reduz Quantos Graus?",
    metaDescription:
      "Entenda a redução de temperatura de climatizadores industriais e quais fatores influenciam o desempenho em galpões e empresas.",
    h1: "Climatizador industrial reduz quantos graus?",
    subtitle:
      "A redução depende de umidade, ventilação, carga térmica e dimensionamento do projeto.",
    imageKey: "wall",
    imageAlt: "Climatizador industrial reduzindo calor em ambiente empresarial",
    datePublished: "2025-09-15",
    dateModified: "2026-03-15",
    lastmod: "2026-03-15",
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Ver climatizadores industriais",
    },
    relatedLinks: [
      {
        href: "/blog/quanto-custa-instalar-climatizadores-industriais",
        label: "Quanto custa instalar climatizadores industriais",
      },
      {
        href: "/blog/climatizador-para-galpao-guia-completo",
        label: "Climatizador para galpão: guia completo",
      },
      {
        href: "/blog/climatizador-evaporativo-funciona-em-ambiente-fechado",
        label: "Climatizador evaporativo em ambiente fechado",
      },
      {
        href: "/solucoes/climatizadores-industriais",
        label: "Climatizadores industriais",
      },
    ],
    sections: [
      {
        heading: "Não existe número único para todo ambiente",
        body: "A pergunta mais comum sobre climatizador industrial é quantos graus ele reduz. A resposta honesta é que não há um valor fixo aplicável a qualquer galpão, loja ou igreja. A sensação térmica muda conforme umidade relativa, renovação de ar, telhado, máquinas, exposição solar e ocupação. Tratar uma faixa de marketing como garantia técnica leva a expectativa errada.",
      },
      {
        heading: "Por que números isolados enganam",
        body: "Afirmações de queda grande e uniforme de temperatura ignoram o clima do dia e o prédio. Em ar mais seco, a evaporação tende a ser mais eficiente. Em dia úmido, o ganho de conforto diminui. Sem exaustão, o ar quente permanece. Sem vazão suficiente, o equipamento só refresca um canto. Por isso a Colder não apresenta uma redução padrão como fato para todos os projetos.",
      },
      {
        heading: "Fatores que realmente influenciam o resultado",
        body: "O desempenho percebido depende de um conjunto de condições, não de um único botão de potência. Dimensionamento, posicionamento e manutenção pesam tanto quanto o modelo escolhido. Dois ambientes com a mesma metragem podem responder de forma diferente.",
        items: [
          "Umidade relativa do ar externo",
          "Ventilação e saída do ar quente",
          "Pé-direito, cobertura e insolação",
          "Calor de máquinas, iluminação e pessoas",
          "Vazão, quantidade e posição dos equipamentos",
          "Manutenção das placas e da circulação de água",
        ],
      },
      {
        heading: "Dimensionamento muda o resultado",
        body: "Vazão insuficiente, mau posicionamento ou falta de exaustão reduzem desempenho. Superdimensionar também não garante conforto: pode gerar correnteza, ruído e gasto desnecessário. O projeto busca o equilíbrio entre volume de ar, pontos de permanência e caminho de renovação.",
      },
      {
        heading: "O objetivo é conforto operacional",
        body: "Em empresas, o projeto busca tornar o ambiente mais suportável e produtivo com consumo controlado. Conforto térmico não é o mesmo que atingir uma temperatura de termostato. A equipe pode sentir alívio mesmo quando o termômetro não mostra uma queda espetacular. Avaliar o local é o único jeito de estimar o que é realista naquela operação.",
      },
      {
        heading: "Como a Colder avalia o seu caso",
        body: "Informe cidade, metragem, pé-direito, tipo de ambiente e condições de ventilação, e envie fotos. A avaliação técnica indica se o evaporativo é adequado e qual vazão discutir. Resultados variam e só podem ser discutidos com responsabilidade depois desse levantamento, nunca a partir de um número único copiado de outro projeto.",
      },
    ],
    faq: [
      {
        question: "O climatizador industrial reduz uma quantidade fixa de graus?",
        answer:
          "Não. A redução percebida varia com umidade, ventilação, carga térmica, pé-direito e dimensionamento. O resultado real precisa de avaliação do ambiente.",
      },
      {
        question: "Umidade interfere?",
        answer: "Sim. Quanto mais seco o ar, maior tende a ser a eficiência evaporativa.",
      },
      {
        question: "Por que alguns materiais citam uma queda grande de temperatura?",
        answer:
          "Costumam ser exemplos em condições favoráveis, não uma garantia. Aplicar esse número a qualquer galpão ou loja seria impreciso.",
      },
    ],
  },
  {
    slug: "climatizador-para-galpao-guia-completo",
    path: "/blog/climatizador-para-galpao-guia-completo",
    title: "Climatizador para Galpão | Guia Completo para Empresas",
    metaDescription:
      "Guia de climatizador para galpão: quando usar, como dimensionar, benefícios, economia e erros comuns em barracões.",
    h1: "Climatizador para galpão: guia completo",
    subtitle:
      "O que empresas precisam avaliar antes de climatizar galpões, barracões e centros logísticos.",
    imageKey: "hero",
    imageAlt: "Galpão industrial com solução de climatização evaporativa",
    datePublished: "2025-11-01",
    dateModified: "2026-03-15",
    lastmod: "2026-03-15",
    commercialLink: {
      href: "/segmentos/climatizadores-para-galpoes",
      label: "Ver climatizadores para galpões",
    },
    relatedLinks: [
      {
        href: "/blog/quanto-custa-instalar-climatizadores-industriais",
        label: "Quanto custa instalar climatizadores industriais",
      },
      {
        href: "/blog/climatizador-industrial-reduz-quantos-graus",
        label: "Climatizador industrial reduz quantos graus?",
      },
      {
        href: "/blog/climatizador-industrial-ou-ar-condicionado",
        label: "Climatizador industrial ou ar-condicionado",
      },
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
    ],
    sections: [
      {
        heading: "Entenda o calor do galpão",
        body: "Cobertura, pé-direito, máquinas, docas e movimentação de carga influenciam a carga térmica. Telhado metálico, insolação da tarde e portas de doca abertas criam zonas quentes que um ventilador de parede não resolve. O primeiro passo do guia é mapear onde a equipe permanece e de onde o calor entra, não sair comprando máquina pela metragem do piso.",
      },
      {
        heading: "Por que o evaporativo costuma caber em barracões",
        body: "Galpões raramente são câmaras fechadas. Há vãos, docas e grande volume de ar. O climatizador evaporativo trabalha com renovação e consumo menor do que um sistema de ar-condicionado tentando gelar o mesmo volume. Isso não elimina a necessidade de projeto: galpão aberto demais, ou sem caminho de ar, também pode frustrar se a vazão e o posicionamento estiverem errados.",
      },
      {
        heading: "Dimensione a vazão corretamente",
        body: "A quantidade de ar renovado precisa acompanhar o volume do ambiente e a ocupação. Pé-direito alto aumenta o volume sem aparecer na planta baixa. Setorizar linhas de picking, expedição ou produção pode ser mais eficiente do que tentar homogeneizar o barracão inteiro. A Colder calcula essa necessidade; chute de quantidade é o erro mais comum.",
        items: [
          "Metragem e pé-direito",
          "Tipo de cobertura e insolação",
          "Docas, aberturas e fluxo de empilhadeiras",
          "Pontos de trabalho que precisam de conforto",
          "Calor de máquinas e iluminação",
          "Acesso para instalação e manutenção",
        ],
      },
      {
        heading: "Planeje instalação e manutenção",
        body: "Fixação, pontos elétricos, acesso para manutenção e distribuição do ar devem ser previstos antes da compra. Içar equipamento em galpão em operação exige janela de trabalho. Placas e água pedem rotina simples para não perder vazão. Quem deixa a manutenção de lado sente o desempenho cair mesmo com máquina certa.",
      },
      {
        heading: "Erros comuns em projetos de galpão",
        body: "Comprar pelo menor preço, ignorar pé-direito, posicionar contra a parede cega, esquecer a saída do ar quente e esperar uma queda fixa de temperatura são erros recorrentes. Outro equívoco é climatizar só a entrada e deixar a expedição, onde a equipe permanece, sem tratamento. O guia serve para evitar esses atalhos.",
      },
      {
        heading: "O que enviar para orçar o seu galpão",
        body: "Informe cidade, metragem, pé-direito, tipo de operação (estoque, produção, logística) e envie fotos da cobertura, das docas e dos pontos de trabalho. Com esses dados a Colder indica se a solução é setorizada ou geral e quais equipamentos discutir. Sem levantamento, qualquer kit pronto para galpão é chute.",
      },
    ],
    faq: [
      {
        question: "Climatizador é bom para barracão?",
        answer: "Sim, quando o projeto considera volume de ar e pontos de trabalho.",
      },
      {
        question: "Dá para climatizar só um setor?",
        answer: "Sim. Em muitos galpões a setorização é uma estratégia eficiente.",
      },
      {
        question: "Funciona com doca aberta?",
        answer:
          "Pode funcionar, desde que vazão, posicionamento e renovação sejam pensados para esse fluxo de ar. Cada galpão pede avaliação.",
      },
    ],
  },
];

export const indexablePaths = [
  "/",
  "/quem-somos",
  "/areas-de-atuacao",
  "/contato",
  "/blog",
  ...allSeoPages.map((page) => page.path),
  ...blogPages.map((page) => page.path),
];

export function getBlogPage(slug: string) {
  return blogPages.find((page) => page.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPage[] {
  const current = getBlogPage(slug);
  const fromLinks =
    current?.relatedLinks
      .map((link) => blogPages.find((post) => post.path === link.href))
      .filter((post): post is BlogPage => Boolean(post)) ?? [];

  if (fromLinks.length >= limit) {
    return fromLinks.slice(0, limit);
  }

  const extras = blogPages.filter(
    (post) => post.slug !== slug && !fromLinks.some((item) => item.slug === post.slug),
  );

  return [...fromLinks, ...extras].slice(0, limit);
}

export function canonicalUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
