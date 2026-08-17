import climatizacaoIndustriaImg from "@/assets/climatizacaoindustria.webp";
import climatizacaoSupermercadoImg from "@/assets/climatizacaosupermercado.webp";
import climatizacaoGrandesAmbientesImg from "@/assets/climatizacaoparagrandesambientes.webp";
import climatizacaoGalpoesLogisticosImg from "@/assets/DJI_20240613115857_0116_D.webp";
import climatizacaoInstituicoesReligiosasImg from "@/assets/1000152246.webp";

export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  alt?: string;
}

export const solutions: Solution[] = [
  {
    id: "climatizacao-grandes-ambientes",
    title: "Climatização de Grandes Ambientes",
    description:
      "Soluções de alta vazão para galpões, barracões e espaços amplos que exigem redução de temperatura, qualidade do ar e eficiência operacional.",
    image: climatizacaoGrandesAmbientesImg,
    alt: "Climatização evaporativa para grandes ambientes",
  },
  {
    id: "climatizacao-galpoes-logisticos",
    title: "Climatização para Galpões Logísticos",
    description:
      "Ambientes logísticos mais frescos e ventilados para operações de armazenagem e distribuição, com climatização eficiente em áreas de grande volume.",
    image: climatizacaoGalpoesLogisticosImg,
    alt: "Climatização evaporativa para galpões logísticos",
  },
  {
    id: "climatizacao-instituicoes-religiosas",
    title: "Climatização para Instituições Religiosas",
    description:
      "Templos, igrejas e salões de eventos mais confortáveis para fiéis e visitantes, com renovação do ar e climatização eficiente em grandes áreas.",
    image: climatizacaoInstituicoesReligiosasImg,
    alt: "Climatização evaporativa para instituições religiosas",
  },
  {
    id: "climatizacao-supermercado",
    title: "Climatização para Supermercado",
    description:
      "Conforto térmico para corredores, áreas de vendas e estoque, com renovação do ar e economia de energia em ambientes de grande circulação.",
    image: climatizacaoSupermercadoImg,
    alt: "Climatização evaporativa para supermercados",
  },
  {
    id: "climatizacao-industria",
    title: "Climatização para Indústria",
    description:
      "Ambientes industriais mais confortáveis, produtivos e seguros com climatização eficiente e renovação constante do ar.",
    image: climatizacaoIndustriaImg,
    alt: "Climatização evaporativa para ambientes industriais",
  },
];
