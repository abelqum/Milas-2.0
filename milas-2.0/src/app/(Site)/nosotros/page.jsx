import NosotrosImage from "@/app/_components/NosotrosImage";

export default function Nosotros() {
  return (
    <>
      <main className="w-full max-w-full mt-10">
        <section className="bg-white py-16 shadow-sm mb-10">
          <div className="w-[90%] m-auto text-center">
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm">
              Nuestra Historia
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl text-slate-900 mt-2 mb-6">
              Ingeniería y Servicio Industrial
            </h1>
            <p className="text-slate-500 max-w-3xl m-auto text-lg leading-relaxed">
              Somos una empresa mexicana dedicada a elevar los estándares de
              mantenimiento industrial a través de equipamiento de alta calidad
              e instalaciones profesionales para sistemas de lubricación.
            </p>
          </div>
        </section>

        <section className="w-[90%] m-auto py-16 bg-white rounded-3xl shadow-lg border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50">
                <NosotrosImage />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="font-poppins font-bold text-3xl text-slate-800">
                Especialistas en soluciones de lubricación industrial.
              </h2>
              <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
              <p className="text-slate-600 leading-relaxed">
                Fundada con la visión de profesionalizar los sistemas de
                lubricación y mantenimiento, <strong>MILAS</strong> ha
                evolucionado para convertirse en un referente en soluciones
                integrales para entornos industriales.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Entendemos que cada minuto de paro operativo representa una
                pérdida. Por eso, no solo vendemos bombas o carretes; diseñamos
                sistemas de flujo eficientes que optimizan tiempos de operación
                y evitan mermas de fluidos.
              </p>
              <ul className="space-y-3 mt-2">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-yellow-500 text-xl font-bold">✓</span>
                  Cobertura a nivel nacional.
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-yellow-500 text-xl font-bold">✓</span>
                  Distribuidores directos de fábrica.
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-yellow-500 text-xl font-bold">✓</span>
                  Personal técnico especializado.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-[90%] m-auto py-16 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
              <span className="block text-4xl font-bold text-yellow-500 font-poppins mb-2">
                +25
              </span>
              <span className="text-sm uppercase tracking-wide opacity-80 font-semibold">
                Años de experiencia
              </span>
            </div>

            <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
              <span className="block text-3xl md:text-4xl font-bold text-yellow-500 font-poppins mb-2">
                Nacional
              </span>
              <span className="text-sm uppercase tracking-wide opacity-80 font-semibold">
                Cobertura en toda la República Mexicana
              </span>
            </div>

            <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
              <span className="block text-4xl font-bold text-yellow-500 font-poppins mb-2">
                100%
              </span>
              <span className="text-sm uppercase tracking-wide opacity-80 font-semibold">
                Clientes Satisfechos
              </span>
            </div>
          </div>
        </section>
        <section className="w-[90%] m-auto pb-16">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-3xl text-slate-800">
              Nuestros Pilares
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300 p-8 h-full">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl text-slate-800 mb-3">
                Misión
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proveer soluciones integrales de lubricación que maximicen la
                productividad de nuestros clientes, garantizando seguridad,
                eficiencia y confiabilidad en cada instalación.
              </p>
            </div>

            <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300 p-8 h-full">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl text-slate-800 mb-3">
                Visión
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ser la empresa líder en México en soluciones de lubricación
                industrial, reconocida por nuestra excelencia técnica,
                innovación y compromiso con cada proyecto.
              </p>
            </div>

            <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300 p-8 h-full">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-poppins font-bold text-xl text-slate-800 mb-3">
                Valores
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Honestidad en cada diagnóstico, calidad en cada componente
                instalado y compromiso total con los tiempos de entrega
                acordados.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="w-[90%] max-w-4xl m-auto text-center bg-yellow-50 border border-yellow-100 p-8 md:p-12 rounded-3xl shadow-sm">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-slate-900 mb-4">
              ¿Listo para trabajar con expertos?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Déjanos optimizar tu operación con el equipo adecuado.
            </p>
            <a
              href="contacto.html"
              className="inline-block bg-yellow-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-yellow-700 transition-colors shadow-lg"
            >
              Contáctanos Hoy
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
