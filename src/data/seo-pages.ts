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
  { href: "/solucoes/climatizacao-para-empresas", label: "Climatizacao para empresas" },
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
    title: "Climatizadores Industriais | Solucoes para Empresas e Galpoes",
    metaDescription:
      "Climatizadores industriais para empresas, fabricas, barracoes e galpoes. Conforto termico, renovacao do ar e economia de energia com a Colder.",
    h1: "Climatizadores Industriais",
    subtitle:
      "Solucoes de climatizacao industrial para ambientes grandes, linhas de producao, galpoes, lojas e empresas que precisam de desempenho continuo.",
    primaryKeyword: "climatizadores industriais",
    secondaryKeywords: [
      "climatizador industrial",
      "climatizacao industrial",
      "climatizador para ambiente grande",
      "climatizador para fabrica",
    ],
    ctaText: "Solicitar orcamento de climatizador industrial",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial de grande porte para empresas e galpoes",
    sections: [
      {
        heading: "Climatizacao industrial para ambientes grandes",
        body: "A Colder dimensiona climatizadores industriais para areas de producao, galpoes, barracoes e ambientes comerciais com grande circulacao. O projeto considera tamanho do espaco, ventilacao, carga termica, operacao e pontos de instalacao.",
      },
      {
        heading: "Beneficios para empresas e industrias",
        body: "O sistema evaporativo ajuda a reduzir a sensacao de calor, renovar o ar e manter a equipe em um ambiente mais confortavel durante a jornada.",
        items: [
          "Baixo consumo quando comparado ao ar-condicionado tradicional",
          "Renovacao constante do ar interno",
          "Aplicacao em fabricas, centros logisticos, lojas e barracoes",
          "Projeto sob medida para vazao e distribuicao de ar",
        ],
      },
      {
        heading: "Quanto custa um climatizador industrial",
        body: "O investimento depende da area, pe-direito, numero de equipamentos, infraestrutura e objetivo do projeto. Por isso, a Colder avalia o ambiente antes de indicar a melhor solucao.",
      },
      {
        heading: "Climatizador industrial vale a pena",
        body: "Para ambientes amplos que precisam de renovacao de ar e economia operacional, o climatizador evaporativo costuma ser uma alternativa eficiente. A indicacao tecnica evita subdimensionamento e melhora o resultado final.",
      },
    ],
    faq: [
      {
        question: "Qual climatizador industrial e indicado para galpoes?",
        answer:
          "A indicacao depende da area, pe-direito, ventilacao e quantidade de pessoas ou maquinas no ambiente. A Colder dimensiona a vazao adequada antes do orcamento.",
      },
      {
        question: "Climatizador industrial reduz quantos graus?",
        answer:
          "A reducao percebida varia conforme umidade, ventilacao e carga termica. Em condicoes adequadas, o sistema pode gerar grande melhora de conforto termico.",
      },
      {
        question: "Climatizador industrial gasta menos energia?",
        answer:
          "Sim. Por nao usar compressor como o ar-condicionado, o climatizador evaporativo tende a consumir menos energia em grandes ambientes.",
      },
      {
        question: "A Colder instala climatizadores industriais?",
        answer:
          "Sim. A Colder orienta a escolha, dimensiona o projeto e realiza a instalacao conforme a necessidade do ambiente.",
      },
    ],
    relatedLinks: [
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpoes" },
      {
        href: "/segmentos/climatizadores-para-industrias",
        label: "Climatizadores para industrias",
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
    title: "Climatizadores Evaporativos | Economia e Renovacao do Ar",
    metaDescription:
      "Entenda como climatizadores evaporativos reduzem calor, renovam o ar e economizam energia em empresas, industrias, igrejas e galpoes.",
    h1: "Climatizadores Evaporativos",
    subtitle:
      "Tecnologia de climatizacao que usa evaporacao de agua para melhorar o conforto termico com renovacao constante do ar.",
    primaryKeyword: "climatizadores evaporativos",
    secondaryKeywords: [
      "climatizador evaporativo industrial",
      "climatizacao economica para empresas",
      "renovacao do ar",
      "economia de energia",
    ],
    ctaText: "Pedir avaliacao para climatizador evaporativo",
    imageKey: "water",
    imageAlt: "Climatizador evaporativo com reservatorio de agua para ambientes empresariais",
    sections: [
      {
        heading: "Como funciona o climatizador evaporativo",
        body: "O equipamento puxa o ar externo, passa esse ar por placas umedecidas e distribui ar renovado no ambiente. O processo melhora a sensacao termica sem recircular sempre o mesmo ar.",
      },
      {
        heading: "Economia em comparacao ao ar-condicionado",
        body: "Como nao depende de compressores, condensadoras e gases refrigerantes, o climatizador evaporativo pode ter custo operacional menor em empresas e areas grandes.",
      },
      {
        heading: "Onde aplicar climatizadores evaporativos",
        body: "A solucao atende galpoes, igrejas, industrias, restaurantes, academias, escolas, supermercados, lojas e recepcoes que precisam de circulacao de ar.",
        items: [
          "Ambientes amplos e com circulacao de pessoas",
          "Areas comerciais que precisam reduzir calor",
          "Operacoes que buscam conforto termico com menor consumo",
        ],
      },
      {
        heading: "Quando nao substituir o ar-condicionado",
        body: "Ambientes que exigem controle rigoroso de temperatura, umidade ou pressurizacao podem precisar de ar-condicionado ou projeto hibrido. A analise tecnica define a melhor alternativa.",
      },
    ],
    faq: [
      {
        question: "Climatizador evaporativo funciona em ambiente fechado?",
        answer:
          "Ele funciona melhor quando existe renovacao de ar e exaustao adequada. Ambientes totalmente fechados precisam de avaliacao tecnica.",
      },
      {
        question: "Climatizador evaporativo e indicado para empresas?",
        answer:
          "Sim. E muito usado em empresas, galpoes e areas comerciais que precisam de conforto termico e economia.",
      },
      {
        question: "O climatizador evaporativo aumenta a umidade?",
        answer:
          "Sim, o processo adiciona umidade ao ar. A viabilidade depende das condicoes do local e do tipo de operacao.",
      },
      {
        question: "Qual a diferenca para o ar-condicionado?",
        answer:
          "O ar-condicionado refrigera e recircula o ar; o evaporativo trabalha com renovacao e evaporacao de agua, com menor consumo em muitos cenarios.",
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
    title: "Climatizacao para Empresas | Conforto e Economia para Ambientes Comerciais",
    metaDescription:
      "Climatizacao para empresas, comercios, lojas, escritorios, industrias e barracoes. Solicite um projeto sob medida com a Colder.",
    h1: "Climatizacao para Empresas",
    subtitle:
      "Projetos para melhorar conforto termico, renovar o ar e reduzir custo operacional em ambientes empresariais.",
    primaryKeyword: "climatizacao para empresas",
    secondaryKeywords: [
      "climatizadores para empresas",
      "climatizacao empresarial",
      "climatizador para loja",
      "climatizacao economica para empresas",
    ],
    ctaText: "Solicitar projeto para empresa",
    imageKey: "wall",
    imageAlt: "Climatizador industrial de parede aplicado em ambiente empresarial",
    sections: [
      {
        heading: "Projetos para diferentes tipos de empresas",
        body: "A Colder atende empresas que precisam climatizar recepcoes, saloes, areas de atendimento, estoque, producao, academias, escolas e restaurantes com uma solucao adequada ao uso do ambiente.",
      },
      {
        heading: "Conforto para clientes e equipe",
        body: "Temperatura elevada afeta produtividade, permanencia do cliente e percepcao do ambiente. O projeto certo melhora a experiencia sem criar uma conta de energia desproporcional.",
      },
      {
        heading: "Ambientes comerciais atendidos",
        body: "A climatizacao evaporativa pode ser aplicada em lojas, supermercados, clinicas, academias, escolas, igrejas, galpoes e industrias.",
        items: [
          "Recepcoes e areas de espera",
          "Lojas, saloes e areas de atendimento",
          "Barracoes, estoques e areas produtivas",
          "Ambientes com grande circulacao de pessoas",
        ],
      },
      {
        heading: "Orcamento sob medida",
        body: "O melhor sistema depende da area, rotina de uso e infraestrutura existente. A equipe da Colder avalia o espaco para indicar quantidade, modelo e local de instalacao.",
      },
    ],
    faq: [
      {
        question: "Qual a melhor climatizacao para empresas?",
        answer:
          "Depende do ambiente. Para areas amplas e com renovacao de ar, climatizadores evaporativos podem ser uma alternativa economica e eficiente.",
      },
      {
        question: "Climatizador serve para loja?",
        answer:
          "Sim. Lojas e saloes comerciais podem receber climatizadores quando o projeto considera circulacao, fachada, pe-direito e fluxo de pessoas.",
      },
      {
        question: "A Colder atende empresas no Parana?",
        answer:
          "Sim. A Colder atende empresas em Maringa, Londrina, Curitiba e outras cidades do Parana conforme viabilidade do projeto.",
      },
      {
        question: "Como pedir orcamento para minha empresa?",
        answer:
          "Entre em contato pelo WhatsApp e informe cidade, tipo de ambiente, tamanho aproximado e objetivo da climatizacao.",
      },
    ],
    relatedLinks: [
      ...coreSolutionLinks.filter((link) => link.href !== "/solucoes/climatizacao-para-empresas"),
      { href: "/segmentos/climatizacao-para-clinicas", label: "Climatizacao para clinicas" },
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
    title: "Climatizadores para Igrejas | Conforto termico para templos e saloes",
    metaDescription:
      "Solucoes de climatizacao para igrejas, templos, saloes paroquiais e auditorios religiosos. Mais conforto termico, renovacao do ar e economia.",
    h1: "Climatizadores para Igrejas",
    subtitle:
      "Solucoes de climatizacao para templos, saloes paroquiais, auditorios religiosos e ambientes de grande circulacao.",
    primaryKeyword: "climatizadores para igrejas",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial indicado para salao de igreja e auditorio religioso",
    context:
      "Igrejas reúnem muitas pessoas em horarios concentrados, normalmente em saloes amplos, templos altos e auditorios com grande variacao de ocupacao. A climatizacao precisa melhorar o conforto sem gerar custo excessivo de energia.",
    benefits: [
      "Conforto termico durante cultos, missas, eventos e encontros",
      "Renovacao do ar em saloes de grande circulacao",
      "Baixo consumo em comparacao a sistemas tradicionais de refrigeracao",
      "Aplicacao em templo, salao, secretaria, salas de aula e auditorio",
    ],
    applications: [
      "Templo principal",
      "Salao paroquial",
      "Auditorios",
      "Secretarias",
      "Salas de aula",
    ],
    related: [
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpoes" },
      {
        href: "/blog/como-climatizar-uma-igreja-sem-gastar-muito",
        label: "Como climatizar uma igreja sem gastar muito",
      },
      ...cityLinks.slice(0, 2),
    ],
    faq: [
      {
        question: "Qual climatizador e indicado para igrejas?",
        answer:
          "O modelo ideal depende da area do templo, pe-direito, ventilacao e lotacao. A Colder avalia o local para dimensionar a vazao correta.",
      },
      {
        question: "Climatizador industrial funciona em salao de igreja?",
        answer:
          "Sim, desde que o projeto preveja renovacao e distribuicao de ar adequadas para o tamanho do salao.",
      },
      {
        question: "Climatizador gasta menos energia que ar-condicionado?",
        answer:
          "Em ambientes grandes, o sistema evaporativo tende a consumir menos por nao usar compressor.",
      },
      {
        question: "A Colder atende igrejas no Parana?",
        answer:
          "Sim. A Colder atende igrejas em Maringa, Londrina, Curitiba e outras cidades conforme o projeto.",
      },
      {
        question: "Como solicitar orcamento para climatizar uma igreja?",
        answer:
          "Envie as medidas aproximadas do ambiente, cidade e fotos do local pelo WhatsApp para uma primeira avaliacao.",
      },
    ],
  },
  {
    slug: "climatizacao-para-clinicas",
    title: "Climatizacao para Clinicas | Ambientes mais confortaveis e saudaveis",
    metaDescription:
      "Solucoes de climatizacao para clinicas, consultorios, recepcoes e salas de espera. Conforto termico, renovacao do ar e economia.",
    h1: "Climatizacao para Clinicas",
    subtitle:
      "Climatizacao para recepcao, consultorios, salas de espera e areas administrativas com foco em conforto para pacientes e equipe.",
    primaryKeyword: "climatizacao para clinicas",
    imageKey: "wall",
    imageAlt: "Climatizador de parede para recepcao de clinica e ambiente de espera",
    context:
      "Clinicas precisam equilibrar conforto, percepcao de cuidado e custo operacional. Recepcao, sala de espera e areas administrativas podem exigir solucoes diferentes de consultorios com controle mais rigoroso.",
    benefits: [
      "Melhora da sensacao termica em recepcoes e salas de espera",
      "Renovacao do ar para ambientes com fluxo constante de pessoas",
      "Solucao economica para areas comuns",
      "Analise tecnica para decidir quando usar climatizador ou ar-condicionado",
    ],
    applications: ["Recepcao", "Sala de espera", "Corredores", "Administrativo", "Areas comuns"],
    related: [
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
      {
        href: "/blog/como-climatizar-uma-clinica-com-eficiencia",
        label: "Como climatizar uma clinica com eficiencia",
      },
      cityLinks[2],
    ],
    faq: [
      {
        question: "Climatizador pode ser usado em clinicas?",
        answer:
          "Pode ser indicado para recepcoes e areas comuns. Salas com exigencias tecnicas especificas precisam de avaliacao individual.",
      },
      {
        question: "Qual a melhor solucao para recepcao de clinica?",
        answer:
          "Depende da area, fluxo de pacientes e ventilacao. Climatizadores evaporativos podem ser uma alternativa economica para recepcoes amplas.",
      },
      {
        question: "Climatizador ajuda na renovacao do ar?",
        answer:
          "Sim. O sistema trabalha com entrada de ar externo e renovacao constante quando instalado corretamente.",
      },
      {
        question: "Climatizador substitui ar-condicionado?",
        answer:
          "Nem sempre. Em salas que exigem temperatura controlada, o ar-condicionado pode continuar sendo necessario.",
      },
      {
        question: "Como pedir orcamento para clinica?",
        answer:
          "Fale com a Colder pelo WhatsApp e envie cidade, metragem e areas que precisam de climatizacao.",
      },
    ],
  },
  {
    slug: "climatizadores-para-industrias",
    title: "Climatizadores para Industrias | Climatizacao industrial sob medida",
    metaDescription:
      "Climatizadores para industrias, linhas de producao e areas operacionais. Reduza calor, renove o ar e melhore o conforto da equipe.",
    h1: "Climatizadores para Industrias",
    subtitle:
      "Projetos para fabricas, areas de producao, manutencao, expedicao e ambientes industriais com alta carga termica.",
    primaryKeyword: "climatizadores para industrias",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial para area de producao e fabrica",
    context:
      "Industrias exigem climatizacao robusta, com equipamentos dimensionados para pe-direito, calor de maquinas, turnos de operacao e grande volume de ar.",
    benefits: [
      "Mais conforto para equipes de producao",
      "Renovacao de ar em ambientes industriais",
      "Possibilidade de instalacao setorizada",
      "Custo operacional menor para areas grandes",
    ],
    applications: [
      "Area de producao",
      "Expedicao",
      "Manutencao",
      "Almoxarifado",
      "Linha de montagem",
    ],
    related: [
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpoes" },
      {
        href: "/blog/climatizador-para-galpao-guia-completo",
        label: "Guia de climatizador para galpao",
      },
      cityLinks[3],
    ],
    faq: [
      {
        question: "Climatizador serve para area de producao?",
        answer: "Sim, quando dimensionado para a carga termica, ventilacao e pontos de trabalho.",
      },
      {
        question: "A instalacao pode ser setorizada?",
        answer:
          "Pode. Em muitas industrias, a climatizacao por setores melhora o conforto onde a equipe permanece mais tempo.",
      },
      {
        question: "Climatizador industrial aguenta uso continuo?",
        answer:
          "Equipamentos industriais sao projetados para rotinas intensas, mas precisam de instalacao e manutencao adequadas.",
      },
      {
        question: "Como calcular quantidade de climatizadores?",
        answer:
          "A quantidade depende de area, pe-direito, renovacao desejada e layout. A Colder faz esse dimensionamento.",
      },
    ],
  },
  {
    slug: "climatizadores-para-galpoes",
    title: "Climatizadores para Galpoes | Conforto para Barracoes e Areas Grandes",
    metaDescription:
      "Climatizadores para galpoes, barracoes, centros logisticos e estoques. Solucoes economicas para ambientes grandes.",
    h1: "Climatizadores para Galpoes",
    subtitle:
      "Climatizacao evaporativa para galpoes, barracoes, estoques e centros logisticos com grande volume de ar.",
    primaryKeyword: "climatizadores para galpoes",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial aplicado em galpao e barracao",
    context:
      "Galpoes acumulam calor por cobertura, pe-direito, movimentacao de carga e baixa circulacao natural. O projeto precisa distribuir ar de forma eficiente sem travar a operacao.",
    benefits: [
      "Reducao da sensacao de calor em areas amplas",
      "Melhora do conforto em docas, estoques e producao",
      "Sistema adequado para barracoes e ambientes abertos",
      "Menor consumo em relacao a refrigeracao tradicional",
    ],
    applications: ["Barracoes", "Docas", "Centros logisticos", "Estoques", "Areas de separacao"],
    related: [
      { href: "/solucoes/climatizadores-industriais", label: "Climatizadores industriais" },
      {
        href: "/blog/climatizador-para-galpao-guia-completo",
        label: "Climatizador para galpao: guia completo",
      },
      cityLinks[0],
    ],
    faq: [
      {
        question: "Climatizador funciona em galpao aberto?",
        answer:
          "Sim, desde que exista projeto de posicionamento, vazao e renovacao de ar compatível com o espaco.",
      },
      {
        question: "Climatizador para barracao e diferente?",
        answer:
          "Normalmente exige maior vazao e instalacao industrial, por isso o dimensionamento e essencial.",
      },
      {
        question: "Quantos equipamentos meu galpao precisa?",
        answer:
          "Depende da metragem, pe-direito, ocupacao e carga termica. A Colder calcula a necessidade tecnica.",
      },
      {
        question: "A solucao serve para centro logistico?",
        answer:
          "Sim. Docas, separacao, estoque e expedicao podem se beneficiar da climatizacao evaporativa.",
      },
    ],
  },
  {
    slug: "climatizadores-para-academias",
    title: "Climatizadores para Academias | Conforto para Treinos e Salas Amplas",
    metaDescription:
      "Climatizadores para academias, salas de musculacao, cross training e studios. Mais conforto termico e renovacao do ar.",
    h1: "Climatizadores para Academias",
    subtitle:
      "Climatizacao para salas de treino, musculacao, studios e ambientes esportivos com alta circulacao de pessoas.",
    primaryKeyword: "climatizadores para academias",
    imageKey: "portable",
    imageAlt: "Climatizador comercial para academia e sala de treino",
    context:
      "Academias precisam de conforto termico sem deixar o ambiente abafado. A renovacao do ar e importante porque o fluxo de pessoas e a atividade fisica elevam a sensacao de calor.",
    benefits: [
      "Ambiente mais agradavel para alunos e professores",
      "Renovacao do ar em salas de treino",
      "Aplicacao em musculacao, funcional e recepcao",
      "Menor impacto no custo de energia",
    ],
    applications: ["Musculacao", "Cross training", "Recepcao", "Salas coletivas", "Studios"],
    related: [
      { href: "/segmentos/climatizadores-para-escolas", label: "Climatizadores para escolas" },
      { href: "/solucoes/climatizacao-para-empresas", label: "Climatizacao para empresas" },
      cityLinks[1],
    ],
    faq: [
      {
        question: "Climatizador e bom para academia?",
        answer:
          "Pode ser uma boa solucao para areas amplas e ventiladas, especialmente quando a meta e renovar o ar e reduzir a sensacao de calor.",
      },
      {
        question: "Serve para sala de musculacao?",
        answer: "Sim, com dimensionamento correto de vazao e posicionamento.",
      },
      {
        question: "O equipamento deixa o piso molhado?",
        answer: "Quando instalado e mantido corretamente, o sistema nao deve molhar o ambiente.",
      },
      {
        question: "Consome menos que ar-condicionado?",
        answer: "Em muitos ambientes grandes, sim, pois nao usa compressor.",
      },
    ],
  },
  {
    slug: "climatizadores-para-escolas",
    title: "Climatizadores para Escolas | Climatizacao para Salas e Areas Comuns",
    metaDescription:
      "Climatizadores para escolas, salas de aula, patios cobertos, secretarias e auditorios. Conforto termico com economia.",
    h1: "Climatizadores para Escolas",
    subtitle:
      "Solucoes para salas de aula, auditorios, secretarias e areas comuns em escolas e instituicoes de ensino.",
    primaryKeyword: "climatizadores para escolas",
    imageKey: "wall",
    imageAlt: "Climatizador de parede para escola e sala de aula",
    context:
      "Escolas precisam de conforto para alunos, professores e equipe administrativa durante longos periodos de permanencia. O projeto deve considerar horarios, ocupacao e ventilacao.",
    benefits: [
      "Ambientes mais confortaveis para aprendizado",
      "Renovacao de ar em salas e areas comuns",
      "Custo operacional adequado para uso diario",
      "Aplicacao em salas, auditorios e patios cobertos",
    ],
    applications: ["Salas de aula", "Auditorios", "Secretarias", "Bibliotecas", "Patios cobertos"],
    related: [
      { href: "/segmentos/climatizacao-para-clinicas", label: "Climatizacao para clinicas" },
      { href: "/solucoes/climatizadores-evaporativos", label: "Climatizadores evaporativos" },
      cityLinks[2],
    ],
    faq: [
      {
        question: "Climatizador pode ser usado em sala de aula?",
        answer:
          "Pode, desde que o ambiente tenha condicoes de renovacao e o equipamento seja bem dimensionado.",
      },
      {
        question: "E economico para uso diario?",
        answer:
          "O sistema evaporativo tende a ter consumo menor que ar-condicionado em muitos ambientes escolares.",
      },
      {
        question: "Serve para auditorio escolar?",
        answer:
          "Sim. Auditorios podem receber climatizadores industriais ou comerciais conforme area e ocupacao.",
      },
      {
        question: "A Colder atende escolas no Parana?",
        answer: "Sim, mediante avaliacao de cidade, ambiente e escopo do projeto.",
      },
    ],
  },
  {
    slug: "climatizadores-para-restaurantes",
    title: "Climatizadores para Restaurantes | Conforto para Saloes e Areas Comerciais",
    metaDescription:
      "Climatizadores para restaurantes, saloes, areas de atendimento e operacoes comerciais. Mais conforto para clientes e equipe.",
    h1: "Climatizadores para Restaurantes",
    subtitle:
      "Climatizacao para saloes, areas de espera, atendimento e espacos comerciais com fluxo constante de clientes.",
    primaryKeyword: "climatizadores para restaurantes",
    imageKey: "portable",
    imageAlt: "Climatizador comercial para restaurante e salao de atendimento",
    context:
      "Restaurantes precisam manter clientes confortaveis sem elevar demais o custo de energia. Saloes com portas abertas, cobertura quente e alto fluxo exigem solucao bem planejada.",
    benefits: [
      "Mais conforto em saloes e areas de espera",
      "Renovacao do ar em ambientes de atendimento",
      "Menor consumo para areas amplas",
      "Aplicacao em restaurantes, lanchonetes e saloes comerciais",
    ],
    applications: [
      "Salao principal",
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
      { href: "/solucoes/climatizacao-para-empresas", label: "Climatizacao para empresas" },
      cityLinks[0],
    ],
    faq: [
      {
        question: "Climatizador serve para restaurante?",
        answer: "Sim, especialmente em saloes amplos e areas com boa renovacao de ar.",
      },
      {
        question: "Pode ser usado em area de atendimento?",
        answer: "Pode, com posicionamento que nao incomode clientes nem interfira na operacao.",
      },
      {
        question: "Substitui ar-condicionado no salao?",
        answer:
          "Depende do objetivo e das condicoes do ambiente. A Colder avalia a melhor solucao.",
      },
      {
        question: "Como orcar climatizacao para restaurante?",
        answer: "Informe metragem, cidade, tipo de salao e fotos do local pelo WhatsApp.",
      },
    ],
  },
  {
    slug: "climatizadores-para-supermercados",
    title: "Climatizadores para Supermercados | Conforto para Lojas e Estoques",
    metaDescription:
      "Climatizadores para supermercados, mercados, atacarejos, lojas e estoques. Solucoes para conforto termico com economia.",
    h1: "Climatizadores para Supermercados",
    subtitle:
      "Climatizacao para areas de venda, estoques, recebimento e ambientes comerciais com alto fluxo de clientes.",
    primaryKeyword: "climatizadores para supermercados",
    imageKey: "industrial",
    imageAlt: "Climatizador industrial para supermercado, loja ampla e estoque",
    context:
      "Supermercados combinam grande circulacao, portas abertas, carga termica de equipamentos e areas amplas. A climatizacao precisa considerar loja, estoque e recebimento separadamente.",
    benefits: [
      "Conforto para clientes durante a compra",
      "Melhor sensacao termica para equipes de loja e estoque",
      "Renovacao de ar em areas grandes",
      "Solucao economica para ambientes comerciais amplos",
    ],
    applications: ["Area de vendas", "Recebimento", "Estoque", "Atacarejo", "Corredores amplos"],
    related: [
      {
        href: "/segmentos/climatizadores-para-restaurantes",
        label: "Climatizadores para restaurantes",
      },
      { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpoes" },
      cityLinks[3],
    ],
    faq: [
      {
        question: "Climatizador funciona em supermercado?",
        answer:
          "Sim, desde que o projeto considere area de venda, circulacao, portas e cargas termicas internas.",
      },
      {
        question: "Serve para estoque de mercado?",
        answer:
          "Pode servir para estoques e areas de recebimento que precisam reduzir calor e renovar o ar.",
      },
      {
        question: "O equipamento interfere em produtos?",
        answer:
          "A instalacao deve ser planejada para nao direcionar fluxo inadequado para produtos sensiveis.",
      },
      {
        question: "A Colder atende atacarejos?",
        answer:
          "Sim. Ambientes grandes como atacarejos podem receber projetos de climatizacao evaporativa.",
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
    "climatizacao para ambientes grandes",
    "conforto termico",
    "renovacao do ar",
    "economia de energia",
  ],
  ctaText: `Solicitar orcamento: ${segment.h1.toLowerCase()}`,
  imageKey: segment.imageKey,
  imageAlt: segment.imageAlt,
  sections: [
    {
      heading: `Por que ${segment.h1.toLowerCase()} exigem projeto eficiente`,
      body: segment.context,
    },
    {
      heading: `Beneficios dos climatizadores evaporativos para ${segment.h1.replace("Climatizadores para ", "").replace("Climatizacao para ", "").toLowerCase()}`,
      body: "A climatizacao evaporativa e indicada quando o ambiente precisa de alivio termico, renovacao do ar e consumo controlado.",
      items: segment.benefits,
    },
    {
      heading: "Economia de energia em comparacao ao ar-condicionado",
      body: "Por trabalhar com evaporacao de agua e ventilacao, o climatizador pode reduzir o custo operacional em ambientes grandes quando comparado a sistemas de refrigeracao convencionais.",
    },
    {
      heading: "Renovacao do ar em ambientes de grande circulacao",
      body: "O sistema favorece entrada de ar novo e retirada do ar quente, ponto importante em locais com fluxo constante de pessoas.",
    },
    {
      heading: "Onde aplicar",
      body: "A Colder avalia cada area para definir pontos de instalacao, vazao e direcionamento do ar.",
      items: segment.applications,
    },
    {
      heading: "Fotos, projetos e exemplos de aplicacao",
      body: "A equipe comercial pode apresentar exemplos de equipamentos, instalacoes e configuracoes semelhantes durante o atendimento, conforme o segmento e a cidade do projeto.",
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
  metaDescription: `Climatizadores industriais ${suffix} para empresas, galpoes, igrejas, clinicas e industrias. Solicite orcamento com a Colder Climatizadores.`,
  h1: `Climatizadores Industriais ${suffix}`,
  subtitle: `Solucoes de climatizacao industrial e empresarial ${suffix} para ambientes grandes, empresas locais e operacoes que precisam de conforto termico.`,
  primaryKeyword: `climatizadores industriais ${suffix}`,
  secondaryKeywords: [
    `climatizadores ${suffix}`,
    `climatizacao industrial ${suffix}`,
    "climatizadores para empresas",
    "climatizador evaporativo industrial",
  ],
  ctaText: `Solicitar orcamento ${suffix}`,
  imageKey: "hero",
  imageAlt: `Climatizadores industriais ${suffix} para empresas e galpoes`,
  sections: [
    {
      heading: `Solucoes de climatizacao industrial ${suffix}`,
      body: `A Colder atende projetos de climatizacao ${suffix} para empresas que precisam reduzir calor, renovar o ar e melhorar o conforto em areas comerciais, industriais e institucionais.`,
    },
    {
      heading: "Ambientes atendidos pela Colder",
      body: "Os projetos podem atender galpoes, industrias, igrejas, clinicas, academias, escolas, restaurantes, supermercados, lojas e recepcoes.",
      items: [
        "Galpoes e barracoes",
        "Industrias e areas de producao",
        "Igrejas e auditorios",
        "Clinicas, escolas e comercios",
      ],
    },
    {
      heading: `Beneficios para empresas ${city === "Paraná" ? "do Paraná" : `de ${city}`}`,
      body: "A solucao ajuda a controlar custos de energia, melhorar a experiencia de clientes e oferecer melhores condicoes de trabalho para equipes locais.",
    },
    {
      heading: "Economia de energia",
      body: "Climatizadores evaporativos tendem a consumir menos energia que sistemas convencionais em ambientes amplos, especialmente quando o objetivo e conforto termico com renovacao de ar.",
    },
    {
      heading: "Projetos e aplicacoes",
      body: "A Colder avalia metragem, pe-direito, ventilacao, rotina de uso e infraestrutura para indicar modelo, quantidade e posicionamento dos equipamentos.",
    },
    {
      heading: `Atendimento ${suffix} e regiao`,
      body: "O atendimento comercial orienta o levantamento inicial por WhatsApp e agenda os proximos passos conforme localidade, escopo e disponibilidade tecnica.",
    },
  ],
  faq: [
    {
      question: `A Colder atende empresas ${suffix}?`,
      answer: `Sim. A Colder avalia projetos ${suffix} para empresas, galpoes, igrejas, clinicas e industrias.`,
    },
    {
      question: `Quanto custa instalar climatizadores industriais ${suffix}?`,
      answer:
        "O custo depende de area, quantidade de equipamentos, infraestrutura e complexidade da instalacao. O orcamento e feito apos levantamento do ambiente.",
    },
    {
      question: "Climatizador industrial e indicado para galpoes?",
      answer:
        "Sim. Galpoes e barracoes sao usos comuns, desde que a solucao seja dimensionada para o volume de ar e o tipo de operacao.",
    },
    {
      question: "Como pedir um orcamento local?",
      answer:
        "Entre em contato pelo WhatsApp, informe a cidade, tipo de ambiente, metragem aproximada e envie fotos para a primeira avaliacao.",
    },
  ],
  relatedLinks: [
    ...coreSolutionLinks,
    { href: "/segmentos/climatizadores-para-igrejas", label: "Climatizadores para igrejas" },
    { href: "/segmentos/climatizacao-para-clinicas", label: "Climatizacao para clinicas" },
    { href: "/segmentos/climatizadores-para-galpoes", label: "Climatizadores para galpoes" },
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
      "Compare climatizador industrial e ar-condicionado para empresas, galpoes e ambientes grandes. Veja quando cada solucao faz sentido.",
    h1: "Climatizador industrial ou ar-condicionado: qual escolher?",
    subtitle:
      "Um guia pratico para empresas que precisam reduzir calor sem perder eficiencia operacional.",
    imageKey: "industrial",
    imageAlt: "Comparacao entre climatizador industrial e ar-condicionado para empresa",
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Conhecer climatizadores industriais",
    },
    sections: [
      {
        heading: "Quando o climatizador industrial faz sentido",
        body: "Ele costuma ser indicado para areas grandes, galpoes, barracoes e ambientes com circulacao de ar, onde renovacao e consumo baixo sao prioridades.",
      },
      {
        heading: "Quando o ar-condicionado e melhor",
        body: "Ambientes fechados que exigem temperatura controlada, baixa umidade ou requisitos tecnicos especificos podem precisar de ar-condicionado.",
      },
      {
        heading: "Como decidir",
        body: "A decisao deve considerar area, pe-direito, ventilacao, carga termica, ocupacao e custo de energia. Em alguns casos, o projeto pode combinar solucoes.",
      },
    ],
    faq: [
      {
        question: "Climatizador substitui ar-condicionado?",
        answer:
          "Depende do ambiente e do objetivo. Para conforto em areas amplas, pode substituir; para controle rigoroso, nem sempre.",
      },
      {
        question: "Qual gasta menos energia?",
        answer: "O climatizador evaporativo tende a gastar menos porque nao usa compressor.",
      },
    ],
  },
  {
    slug: "como-climatizar-uma-igreja-sem-gastar-muito",
    path: "/blog/como-climatizar-uma-igreja-sem-gastar-muito",
    title: "Como Climatizar uma Igreja sem Gastar Muito | Guia Colder",
    metaDescription:
      "Veja como climatizar templo, salao de igreja e auditorio religioso com economia, renovacao do ar e conforto termico.",
    h1: "Como climatizar uma igreja sem gastar muito",
    subtitle: "Pontos essenciais para melhorar o conforto termico em templos e saloes religiosos.",
    imageKey: "industrial",
    imageAlt: "Climatizador para templo e salao de igreja",
    commercialLink: {
      href: "/segmentos/climatizadores-para-igrejas",
      label: "Ver climatizadores para igrejas",
    },
    sections: [
      {
        heading: "Mapeie os horarios de maior lotacao",
        body: "Cultos e eventos concentram muitas pessoas em pouco tempo. O dimensionamento deve considerar esses picos.",
      },
      {
        heading: "Priorize renovacao do ar",
        body: "Templos e saloes precisam remover ar quente e distribuir ar renovado sem gerar desconforto localizado.",
      },
      {
        heading: "Evite comprar equipamento sem projeto",
        body: "A escolha apenas por preco pode gerar baixo desempenho. Vazao, quantidade e posicionamento fazem diferenca.",
      },
    ],
    faq: [
      {
        question: "Climatizador industrial serve para igreja?",
        answer: "Sim, especialmente em saloes amplos e templos com boa renovacao de ar.",
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
    title: "Como Climatizar uma Clinica com Eficiencia | Colder",
    metaDescription:
      "Dicas para climatizar clinicas, recepcoes e salas de espera com conforto, renovacao de ar e consumo controlado.",
    h1: "Como climatizar uma clinica com eficiencia",
    subtitle:
      "O que avaliar em recepcoes, salas de espera e areas comuns antes de escolher o sistema.",
    imageKey: "wall",
    imageAlt: "Climatizacao para recepcao de clinica",
    commercialLink: {
      href: "/segmentos/climatizacao-para-clinicas",
      label: "Ver climatizacao para clinicas",
    },
    sections: [
      {
        heading: "Separe areas comuns e salas tecnicas",
        body: "Recepcoes e corredores podem ter necessidades diferentes de consultorios ou salas com requisitos especificos.",
      },
      {
        heading: "Considere conforto e percepcao do paciente",
        body: "Calor em sala de espera prejudica a experiencia. Renovacao do ar e temperatura agradavel ajudam na sensacao de cuidado.",
      },
      {
        heading: "Avalie custo de operacao",
        body: "Clinicas funcionam por muitas horas. O consumo de energia deve entrar na conta do projeto.",
      },
    ],
    faq: [
      {
        question: "Climatizador pode ser usado em clinica?",
        answer: "Pode ser indicado para areas comuns, dependendo da avaliacao tecnica.",
      },
      {
        question: "Recepcao precisa de ar-condicionado?",
        answer: "Nem sempre. A decisao depende de ventilacao, area e objetivo de conforto.",
      },
    ],
  },
  {
    slug: "climatizador-evaporativo-funciona-em-ambiente-fechado",
    path: "/blog/climatizador-evaporativo-funciona-em-ambiente-fechado",
    title: "Climatizador Evaporativo Funciona em Ambiente Fechado?",
    metaDescription:
      "Entenda quando climatizador evaporativo funciona em ambiente fechado, por que a renovacao do ar importa e quando pedir avaliacao tecnica.",
    h1: "Climatizador evaporativo funciona em ambiente fechado?",
    subtitle: "A resposta depende da renovacao do ar, da exaustao e das condicoes do local.",
    imageKey: "water",
    imageAlt: "Climatizador evaporativo com agua para renovacao do ar",
    commercialLink: {
      href: "/solucoes/climatizadores-evaporativos",
      label: "Conhecer climatizadores evaporativos",
    },
    sections: [
      {
        heading: "O ponto principal e a renovacao",
        body: "O climatizador evaporativo trabalha melhor quando consegue puxar ar externo e expulsar ar quente do ambiente.",
      },
      {
        heading: "Ambiente fechado exige cuidado",
        body: "Sem saida de ar, o desempenho cai e a umidade pode aumentar demais. Por isso, uma avaliacao evita expectativa errada.",
      },
      {
        heading: "Quando o sistema e indicado",
        body: "Galpoes, saloes, lojas e areas com aberturas ou exaustao costumam ser bons candidatos.",
      },
    ],
    faq: [
      {
        question: "Precisa deixar portas abertas?",
        answer: "Nem sempre, mas e necessario haver renovacao de ar suficiente.",
      },
      {
        question: "Funciona em sala pequena?",
        answer: "Pode nao ser a melhor escolha. Depende do uso e da ventilacao.",
      },
    ],
  },
  {
    slug: "quanto-custa-instalar-climatizadores-industriais",
    path: "/blog/quanto-custa-instalar-climatizadores-industriais",
    title: "Quanto Custa Instalar Climatizadores Industriais?",
    metaDescription:
      "Veja fatores que influenciam o custo de climatizadores industriais: area, vazao, quantidade de equipamentos e instalacao.",
    h1: "Quanto custa instalar climatizadores industriais?",
    subtitle:
      "O preco varia conforme projeto, ambiente e infraestrutura. Entenda os fatores principais.",
    imageKey: "industrial",
    imageAlt: "Instalacao de climatizador industrial para empresa",
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Solicitar orcamento de climatizadores industriais",
    },
    sections: [
      {
        heading: "Area e pe-direito",
        body: "Quanto maior o volume de ar, maior tende a ser a necessidade de vazao e quantidade de equipamentos.",
      },
      {
        heading: "Infraestrutura de instalacao",
        body: "Pontos eletricos, estrutura de fixacao, acesso e distribuicao de ar podem influenciar o custo final.",
      },
      {
        heading: "Objetivo do projeto",
        body: "Climatizar uma area inteira e diferente de melhorar o conforto em setores especificos de trabalho.",
      },
    ],
    faq: [
      {
        question: "Da para orcar sem visita?",
        answer:
          "Uma estimativa inicial pode ser feita com medidas e fotos, mas o projeto final pode exigir avaliacao detalhada.",
      },
      {
        question: "O equipamento e a instalacao entram no mesmo orcamento?",
        answer: "A proposta pode contemplar fornecimento e instalacao conforme o escopo combinado.",
      },
    ],
  },
  {
    slug: "climatizador-industrial-reduz-quantos-graus",
    path: "/blog/climatizador-industrial-reduz-quantos-graus",
    title: "Climatizador Industrial Reduz Quantos Graus?",
    metaDescription:
      "Entenda a reducao de temperatura de climatizadores industriais e quais fatores influenciam o desempenho em galpoes e empresas.",
    h1: "Climatizador industrial reduz quantos graus?",
    subtitle:
      "A reducao depende de umidade, ventilacao, carga termica e dimensionamento do projeto.",
    imageKey: "wall",
    imageAlt: "Climatizador industrial reduzindo calor em ambiente empresarial",
    commercialLink: {
      href: "/solucoes/climatizadores-industriais",
      label: "Ver climatizadores industriais",
    },
    sections: [
      {
        heading: "Nao existe numero unico para todo ambiente",
        body: "A sensacao termica muda conforme umidade relativa, renovacao de ar, telhado, maquinas e exposicao solar.",
      },
      {
        heading: "Dimensionamento muda o resultado",
        body: "Vazao insuficiente, mau posicionamento ou falta de exaustao reduzem desempenho.",
      },
      {
        heading: "O objetivo e conforto operacional",
        body: "Em empresas, o projeto busca tornar o ambiente mais suportavel e produtivo com consumo controlado.",
      },
    ],
    faq: [
      {
        question: "Pode reduzir ate 15 graus?",
        answer:
          "Em condicoes favoraveis, a melhoria pode ser expressiva, mas o resultado real precisa de avaliacao do ambiente.",
      },
      {
        question: "Umidade interfere?",
        answer: "Sim. Quanto mais seco o ar, maior tende a ser a eficiencia evaporativa.",
      },
    ],
  },
  {
    slug: "climatizador-para-galpao-guia-completo",
    path: "/blog/climatizador-para-galpao-guia-completo",
    title: "Climatizador para Galpao | Guia Completo para Empresas",
    metaDescription:
      "Guia de climatizador para galpao: quando usar, como dimensionar, beneficios, economia e erros comuns em barracoes.",
    h1: "Climatizador para galpao: guia completo",
    subtitle:
      "O que empresas precisam avaliar antes de climatizar galpoes, barracoes e centros logisticos.",
    imageKey: "hero",
    imageAlt: "Galpao industrial com solucao de climatizacao evaporativa",
    commercialLink: {
      href: "/segmentos/climatizadores-para-galpoes",
      label: "Ver climatizadores para galpoes",
    },
    sections: [
      {
        heading: "Entenda o calor do galpao",
        body: "Cobertura, pe-direito, maquinas, docas e movimentacao de carga influenciam a carga termica.",
      },
      {
        heading: "Dimensione a vazao corretamente",
        body: "A quantidade de ar renovado precisa acompanhar o volume do ambiente e a ocupacao.",
      },
      {
        heading: "Planeje instalacao e manutencao",
        body: "Fixacao, pontos eletricos, acesso para manutencao e distribuicao do ar devem ser previstos antes da compra.",
      },
    ],
    faq: [
      {
        question: "Climatizador e bom para barracao?",
        answer: "Sim, quando o projeto considera volume de ar e pontos de trabalho.",
      },
      {
        question: "Da para climatizar so um setor?",
        answer: "Sim. Em muitos galpoes a setorizacao e uma estrategia eficiente.",
      },
    ],
  },
];

export const indexablePaths = [
  "/",
  "/quem-somos",
  "/areas-de-atuacao",
  "/contato",
  ...allSeoPages.map((page) => page.path),
  ...blogPages.map((page) => page.path),
];

export function getBlogPage(slug: string) {
  return blogPages.find((page) => page.slug === slug);
}

export function canonicalUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
