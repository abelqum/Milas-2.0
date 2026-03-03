import Link from "next/link";

export default function HeroDescription() {
  return (
    <div id="hero-description" className="flex flex-col gap-6 p-4">
      <h1 className="font-poppins font-semibold text-2xl md:text-3xl text-center text-slate-800">
        Soluciones profesionales de lubricación para talleres e industria
      </h1>

      <Link
        href="/contacto"
        className="w-[85%] hover:underline hover:font-bold transition-all duration-200 md:p-3 lg:p-5 shadow-lg m-auto font-poppins font-semibold text-white border rounded-2xl bg-yellow-600 text-center text-lg md:text-xl p-5"
      >
        Implementa tu nuevo sistema
      </Link>
    </div>
  );
}
