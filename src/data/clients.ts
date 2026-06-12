import gelaBocaLogo from "@/assets/gelabocalogo.png";
import grupoMetafaLogo from "@/assets/grupometafa.png";
import uningaLogo from "@/assets/logouninga.png";
import muscleWorldLogo from "@/assets/muscleworld.png";
import pesaCatLogo from "@/assets/pesacat.png";
import rionauticaLogo from "@/assets/rionauticalogo.png";

export interface Client {
  id: string;
  name: string;
  logo?: string; // import direto: import logo from "@/assets/clients/nome.png"
  alt?: string; // descrição acessível; padrão: "Logo <name>"
  url?: string; // torna o card clicável (opcional)
  segment?: string;
}

export const clients: Client[] = [
  {
    id: "gela-boca",
    name: "Gela Boca",
    logo: gelaBocaLogo,
    alt: "Logo Gela Boca",
  },
  {
    id: "rionautica",
    name: "Rionáutica",
    logo: rionauticaLogo,
    alt: "Logo Rionáutica",
  },
  {
    id: "muscle-world-gym",
    name: "Muscle World Gym",
    logo: muscleWorldLogo,
    alt: "Logo Muscle World Gym",
  },
  {
    id: "pesa-cat",
    name: "Pesa Cat",
    logo: pesaCatLogo,
    alt: "Logo Pesa Cat",
  },
  {
    id: "grupo-metafa",
    name: "Grupo Metafa",
    logo: grupoMetafaLogo,
    alt: "Logo Grupo Metafa",
  },
  {
    id: "uninga",
    name: "Uningá",
    logo: uningaLogo,
    alt: "Logo Uningá",
  },
];
