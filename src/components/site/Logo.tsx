import logo1 from "@/assets/logo1.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="flex items-center" aria-label="Colder Climatizadores — Página inicial">
      <img
        src={logo1}
        alt="Colder Climatizadores"
        width={160}
        height={40}
        className="h-10 w-auto"
        style={light ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </a>
  );
}
