import Image from "next/image";

export default function LogoFooter() {
  return (
    <div className="flex items-center">
      <Image
        src="/img/logo.webp"
        alt="MILAS"
        className="w-16 mb-4 brightness-0 invert opacity-50"
        width="64"
        height="64"
      />
      <p className="ml-4">© 2026 MILAS Equipos Industriales y Accesorios.</p>
    </div>
  );
}
