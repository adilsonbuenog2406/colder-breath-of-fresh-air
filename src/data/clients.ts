import gelaBocaLogo from "@/assets/gelabocalogo.webp";
import grupoMetafaLogo from "@/assets/grupometafa.webp";
import muscleWorldLogo from "@/assets/muscleworld.webp";
import pesaCatLogo from "@/assets/pesacat.webp";
import rionauticaLogo from "@/assets/rionauticalogo.webp";
import ironbeeLogo from "@/assets/IRONBEE.Logo.1.webp";
import modeloLogo from "@/assets/MODELO.logo.webp";
import fraccreiLogo from "@/assets/FRACCREI.logo.webp";
import nxboatsLogo from "@/assets/Nxboats.logo.webp";
import ccimLogo from "@/assets/CCIM.logo.2.webp";

export interface Client {
  id: string;
  name: string;
  logo?: string;
  alt?: string;
  url?: string;
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
    id: "ironbee",
    name: "Ironbee",
    logo: ironbeeLogo,
    alt: "Logo Ironbee",
  },
  {
    id: "modelo",
    name: "Modelo",
    logo: modeloLogo,
    alt: "Logo Modelo",
  },
  {
    id: "fraccrei",
    name: "Fraccrei",
    logo: fraccreiLogo,
    alt: "Logo Fraccrei",
  },
  {
    id: "nxboats",
    name: "Nxboats",
    logo: nxboatsLogo,
    alt: "Logo Nxboats",
  },
  {
    id: "ccim",
    name: "CCIM",
    logo: ccimLogo,
    alt: "Logo CCIM",
  },
];
