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

export const seoPages: SeoPage[] = [
  {
    slug: "climatizadores-industriais",
    path: "/solucoes/climatizadores-industriais",
    type: "solution",
    title: "Climatizadores Industriais | Soluções para Empresas e Galpões",
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
        body: "O investimento depende da área, pe-direito, número de equipamentos, infraestrutura e objetivo do projeto. Por isso, a Colder avalia o ambiente antes de indicar a melhor solução.",
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
          "A indicação depende da área, pe-direito, ventilação e quantidade de pessoas ou máquinas no ambiente. A Colder dimensiona a vazão adequada antes do orçamento.",
      },
      {
        question: "Climatizador industrial reduz quantos graus?",
        answer:
          "A redução percebida varia conforme umidade, ventilação e carga térmica. Em condições adequadas, o sistema pode gerar grande melhora de conforto térmico.",
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
        body: "Ambientes que exigem controle rigoroso de temperatura, umidade ou pressurização podem precisar de ar-condicionado ou projeto hibrido. A análise técnica define a melhor alternativa.",
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
        question: "Qual a diferenca para o ar-condicionado?",
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
      ...cityLinks,
    ],
    schemaType: "Service",
  },
  {
    slug: "climatizacao-para-empresas",
    path: "/solucoes/climatizacao-para-empresas",
    type: "solution",
    title: "Climatização para Empresas | Conforto e Economia para Ambientes Comerciais",
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
          "Sim. Lojas e salões comerciais podem receber climatizadores quando o projeto considera circulação, fachada, pe-direito e fluxo de pessoas.",
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
    title: "Climatizadores para Igrejas | Conforto térmico para templos e salões",
    metaDescription:
      "Soluções de climatização para igrejas, templos, salões paroquiais e auditórios religiosos. Mais conforto térmico, renovação do ar e economia.",
    h1: "Climatizadores para Igrejas",
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
          "O modelo ideal depende da área do templo, pe-direito, ventilação e lotação. A Colder avalia o local para dimensionar a vazão correta.",
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
    title: "Climatização para Clínicas | Ambientes mais confortáveis e saudaveis",
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
    title: "Climatizadores para Indústrias | Climatização industrial sob medida",
    metaDescription:
      "Climatizadores para indústrias, linhas de produção e áreas operacionais. Reduza calor, renove o ar e melhore o conforto da equipe.",
    h1: "Climatizadores para Indústrias",
    subtitle:
      "Projetos para fábricas, áreas de produção, manutenção, expedição e ambientes industriais com alta carga térmica.",
    primaryKeyword: "climatizadores para indústrias",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial para área de produção e fábrica",
    context:
      "Indústrias exigem climatização robusta, com equipamentos dimensionados para pe-direito, calor de máquinas, turnos de operação e grande volume de ar.",
    benefits: [
      "Mais conforto para equipes de produção",
      "Renovação de ar em ambientes industriais",
      "Possibilidade de instalação setorizada",
      "Custo operacional menor para áreas grandes",
    ],
    applications: [
      "Area de produção",
      "Expedição",
      "Manutenção",
      "Almoxarifado",
      "Linha de montagem",
    ],
    related: [
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
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
          "A quantidade depende de área, pe-direito, renovação desejada e layout. A Colder faz esse dimensionamento.",
      },
    ],
  },
  {
    slug: "climatizadores-para-galpoes",
    title: "Climatizadores para Galpões | Conforto para Barracões e Áreas Grandes",
    metaDescription:
      "Climatizadores para galpões, barracões, centros logísticos e estoques. Soluções econômicas para ambientes grandes.",
    h1: "Climatizadores para Galpões",
    subtitle:
      "Climatização evaporativa para galpões, barracões, estoques e centros logísticos com grande volume de ar.",
    primaryKeyword: "climatizadores para galpões",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial aplicado em galpão e barracão",
    context:
      "Galpões acumulam calor por cobertura, pe-direito, movimentação de carga e baixa circulação natural. O projeto precisa distribuir ar de forma eficiente sem travar a operação.",
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
          "Depende da metragem, pe-direito, ocupação e carga térmica. A Colder calcula a necessidade técnica.",
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
    title: "Climatizadores para Academias | Conforto para Treinos e Salas Amplas",
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
      "Ambiente mais agradavel para alunos e professores",
      "Renovação do ar em salas de treino",
      "Aplicação em musculação, funcional e recepção",
      "Menor impacto no custo de energia",
    ],
    applications: ["Musculação", "Cross training", "Recepção", "Salas coletivas", "Studios"],
    related: [
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
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
    title: "Climatizadores para Escolas | Climatização para Salas e Áreas Comuns",
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
      "Custo operacional adequado para uso diario",
      "Aplicação em salas, auditórios e pátios cobertos",
    ],
    applications: ["Salas de aula", "Auditórios", "Secretarias", "Bibliotecas", "Patios cobertos"],
    related: [
      { href: "/segmentos/climatizacao-para-clinicas", label: "Climatização para clínicas" },
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
        question: "E economico para uso diario?",
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
    title: "Climatizadores para Restaurantes | Conforto para Salões e Áreas Comerciais",
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
      "Area de espera",
      "Varandas cobertas",
      "Buffet",
      "Atendimento",
    ],
    related: [
      {
        href: "/segmentos/climatizadores-para-supermercados",
        label: "Climatizadores para supermercados",
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
    title: "Climatizadores para Supermercados | Conforto para Lojas e Estoques",
    metaDescription:
      "Climatizadores para supermercados, mercados, atacarejos, lojas e estoques. Soluções para conforto térmico com economia.",
    h1: "Climatizadores para Supermercados",
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
    applications: ["Area de vendas", "Recebimento", "Estoque", "Atacarejo", "Corredores amplos"],
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

const cityDefinitions = [
  ["climatizadores-industriais-em-maringa", "Maringá", "em Maringá"],
  ["climatizadores-industriais-em-londrina", "Londrina", "em Londrina"],
  ["climatizadores-industriais-em-curitiba", "Curitiba", "em Curitiba"],
  ["climatizadores-industriais-no-parana", "Paraná", "no Paraná"],
] as const;

export const cityPages: SeoPage[] = cityDefinitions.map(([slug, city, suffix]) => ({
  slug,
  path: `/cidades/${slug}`,
  type: "city",
  title: `Climatizadores Industriais ${suffix} | ${SITE_NAME}`,
  metaDescription: `Climatizadores industriais ${suffix} para empresas, galpões, igrejas, clínicas e indústrias. Solicite orçamento com a Colder Climatizadores.`,
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
      body: `A Colder atende projetos de climatização ${suffix} para empresas que precisam reduzir calor, renovar o ar e melhorar o conforto em áreas comerciais, industriais e institucionais.`,
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
      body: "A solução ajuda a controlar custos de energia, melhorar a experiência de clientes e oferecer melhores condições de trabalho para equipes locais.",
    },
    {
      heading: "Economia de energia",
      body: "Climatizadores evaporativos tendem a consumir menos energia que sistemas convencionais em ambientes amplos, especialmente quando o objetivo e conforto térmico com renovação de ar.",
    },
    {
      heading: "Projetos e aplicações",
      body: "A Colder avalia metragem, pe-direito, ventilação, rotina de uso e infraestrutura para indicar modelo, quantidade e posicionamento dos equipamentos.",
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
        "Entre em contato pelo WhatsApp, informe a cidade, tipo de ambiente, metragem aproximada e envie fotos para a primeira avaliação.",
    },
  ],
  relatedLinks: [
    ...coreSolutionLinks,
    { href: "/segmentos/climatizadores-para-igrejas", label: "Climatizadores para igrejas" },
    { href: "/segmentos/climatizacao-para-clinicas", label: "Climatização para clínicas" },
    { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpões" },
  ],
  schemaType: "Service",
  localArea: city,
}));

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
      "Um guia pratico para empresas que precisam reduzir calor sem perder eficiência operacional.",
    imageKey: "industrial",
    imageAlt: "Comparação entre climatizador industrial e ar-condicionado para empresa",
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Conhecer climatizadores industriais",
    },
    sections: [
      {
        heading: "Quando o climatizador industrial faz sentido",
        body: "Ele costuma ser indicado para áreas grandes, galpões, barracões e ambientes com circulação de ar, onde renovação e consumo baixo são prioridades.",
      },
      {
        heading: "Quando o ar-condicionado é melhor",
        body: "Ambientes fechados que exigem temperatura controlada, baixa umidade ou requisitos técnicos específicos podem precisar de ar-condicionado.",
      },
      {
        heading: "Como decidir",
        body: "A decisão deve considerar área, pe-direito, ventilação, carga térmica, ocupação e custo de energia. Em alguns casos, o projeto pode combinar soluções.",
      },
    ],
    faq: [
      {
        question: "Climatizador substitui ar-condicionado?",
        answer:
          "Depende do ambiente e do objetivo. Para conforto em áreas amplas, pode substituir; para controle rigoroso, nem sempre.",
      },
      {
        question: "Qual gasta menos energia?",
        answer: "O climatizador evaporativo tende a gastar menos porque não usa compressor.",
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
    commercialLink: {
      href: "/segmentos/climatizadores-para-igrejas",
      label: "Ver climatizadores para igrejas",
    },
    sections: [
      {
        heading: "Mapeie os horários de maior lotação",
        body: "Cultos e eventos concentram muitas pessoas em pouco tempo. O dimensionamento deve considerar esses picos.",
      },
      {
        heading: "Priorize renovação do ar",
        body: "Templos e salões precisam remover ar quente e distribuir ar renovado sem gerar desconforto localizado.",
      },
      {
        heading: "Evite comprar equipamento sem projeto",
        body: "A escolha apenas por preco pode gerar baixo desempenho. Vazão, quantidade e posicionamento fazem diferenca.",
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
          "Dimensionando o sistema corretamente e usando tecnologia evaporativa quando ela e adequada.",
      },
    ],
  },
  {
    slug: "como-climatizar-uma-clinica-com-eficiencia",
    path: "/blog/como-climatizar-uma-clinica-com-eficiencia",
    title: "Como Climatizar uma Clinica com Eficiência | Colder",
    metaDescription:
      "Dicas para climatizar clínicas, recepções e salas de espera com conforto, renovação de ar e consumo controlado.",
    h1: "Como climatizar uma clínica com eficiência",
    subtitle:
      "O que avaliar em recepções, salas de espera e áreas comuns antes de escolher o sistema.",
    imageKey: "wall",
    imageAlt: "Climatização para recepção de clínica",
    commercialLink: {
      href: "/segmentos/climatizacao-para-clinicas",
      label: "Ver climatização para clínicas",
    },
    sections: [
      {
        heading: "Separe áreas comuns e salas técnicas",
        body: "Recepções e corredores podem ter necessidades diferentes de consultórios ou salas com requisitos específicos.",
      },
      {
        heading: "Considere conforto e percepção do paciente",
        body: "Calor em sala de espera prejudica a experiência. Renovação do ar e temperatura agradavel ajudam na sensação de cuidado.",
      },
      {
        heading: "Avalie custo de operação",
        body: "Clínicas funcionam por muitas horas. O consumo de energia deve entrar na conta do projeto.",
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
    commercialLink: {
      href: "/solucoes/climatizadores-evaporativos",
      label: "Conhecer climatizadores evaporativos",
    },
    sections: [
      {
        heading: "O ponto principal é a renovação",
        body: "O climatizador evaporativo trabalha melhor quando consegue puxar ar externo e expulsar ar quente do ambiente.",
      },
      {
        heading: "Ambiente fechado exige cuidado",
        body: "Sem saída de ar, o desempenho cai e a umidade pode aumentar demais. Por isso, uma avaliação evita expectativa errada.",
      },
      {
        heading: "Quando o sistema é indicado",
        body: "Galpões, salões, lojas e áreas com aberturas ou exaustão costumam ser bons candidatos.",
      },
    ],
    faq: [
      {
        question: "Precisa deixar portas abertas?",
        answer: "Nem sempre, mas e necessário haver renovação de ar suficiente.",
      },
      {
        question: "Funciona em sala pequena?",
        answer: "Pode não ser a melhor escolha. Depende do uso e da ventilação.",
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
      "O preco varia conforme projeto, ambiente e infraestrutura. Entenda os fatores principais.",
    imageKey: "industrial",
    imageAlt: "Instalação de climatizador industrial para empresa",
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Solicitar orçamento de climatizadores industriais",
    },
    sections: [
      {
        heading: "Area e pe-direito",
        body: "Quanto maior o volume de ar, maior tende a ser a necessidade de vazão e quantidade de equipamentos.",
      },
      {
        heading: "Infraestrutura de instalação",
        body: "Pontos elétricos, estrutura de fixacao, acesso e distribuição de ar podem influenciar o custo final.",
      },
      {
        heading: "Objetivo do projeto",
        body: "Climatizar uma área inteira é diferente de melhorar o conforto em setores específicos de trabalho.",
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
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Ver climatizadores industriais",
    },
    sections: [
      {
        heading: "Não existe número único para todo ambiente",
        body: "A sensação térmica muda conforme umidade relativa, renovação de ar, telhado, máquinas e exposição solar.",
      },
      {
        heading: "Dimensionamento muda o resultado",
        body: "Vazão insuficiente, mau posicionamento ou falta de exaustão reduzem desempenho.",
      },
      {
        heading: "O objetivo e conforto operacional",
        body: "Em empresas, o projeto busca tornar o ambiente mais suportavel e produtivo com consumo controlado.",
      },
    ],
    faq: [
      {
        question: "Pode reduzir ate 16 graus?",
        answer:
          "Em condições favoráveis, a melhoria pode ser expressiva, mas o resultado real precisa de avaliação do ambiente.",
      },
      {
        question: "Umidade interfere?",
        answer: "Sim. Quanto mais seco o ar, maior tende a ser a eficiência evaporativa.",
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
    commercialLink: {
      href: "/segmentos/climatizadores-para-galpoes",
      label: "Ver climatizadores para galpões",
    },
    sections: [
      {
        heading: "Entenda o calor do galpão",
        body: "Cobertura, pe-direito, máquinas, docas e movimentação de carga influenciam a carga térmica.",
      },
      {
        heading: "Dimensione a vazão corretamente",
        body: "A quantidade de ar renovado precisa acompanhar o volume do ambiente e a ocupação.",
      },
      {
        heading: "Planeje instalação e manutenção",
        body: "Fixacao, pontos elétricos, acesso para manutenção e distribuição do ar devem ser previstos antes da compra.",
      },
    ],
    faq: [
      {
        question: "Climatizador é bom para barracão?",
        answer: "Sim, quando o projeto considera volume de ar e pontos de trabalho.",
      },
      {
        question: "Dá para climatizar só um setor?",
        answer: "Sim. Em muitos galpões a setorização e uma estratégia eficiente.",
      },
    ],
  },
];

export const indexablePaths = [
  "/",
  "/quem-somos",
  "/areas-de-atuacao",
  "/contato",
  "/formulario-interessados",
  ...allSeoPages.map((page) => page.path),
  ...blogPages.map((page) => page.path),
];

export function getBlogPage(slug: string) {
  return blogPages.find((page) => page.slug === slug);
}

export function canonicalUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
