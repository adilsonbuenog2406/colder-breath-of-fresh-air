import logo1 from "@/assets/logo1.webp";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="flex items-center" aria-label="Colder Climatizadores — Página inicial">
      <img
        src={logo1}
        alt="Colder Climatizadores"
        width={160}
        height={40}
        className="h-11 w-auto md:h-10"
        style={light ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </a>
  );
}
