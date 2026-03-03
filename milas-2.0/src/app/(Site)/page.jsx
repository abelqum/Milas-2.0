import Distributors from "../_components/Distributors";
import Hero from "../_components/Hero";
import MainProducts from "../_components/MainProducts";

export default function Home() {
  return (
    <>
      <main className="w-full max-w-full mt-6">
        <Hero />
        <Distributors />
        <MainProducts />
        <section className="w-[90%] m-auto py-20 mt-3">
          <div className="w-full">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mt-2 text-slate-900">
                Soluciones Integrales
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl m-auto text-lg">
                En MILAS no solo vendemos equipos. Diseñamos e integramos
                sistemas completos de lubricación para talleres, plantas y
                procesos industriales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-yellow-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>

                  <h3 className="font-poppins font-bold text-2xl text-slate-800 mb-3">
                    Instalación y Proyectos
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                    Diseñamos e instalamos sistemas de lubricación a la medida,
                    optimizando el flujo de fluidos, la seguridad y la
                    eficiencia operativa en talleres e instalaciones
                    industriales.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-slate-600 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Cálculo y diseño de tubería.
                    </li>
                    <li className="flex items-start text-slate-600 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Montaje de carretes en estructuras.
                    </li>
                    <li className="flex items-start text-slate-600 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Instalación completa de los equipos.
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <a
                      href="servicios.html"
                      className="block w-full py-3 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-600 transition-colors"
                    >
                      Ir a servicios
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-yellow-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-poppins font-bold text-2xl text-slate-800 mb-3">
                    Mantenimiento y Reparación
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                    Reduce tiempos muertos en tu operación. Diagnosticamos,
                    reparamos y damos mantenimiento a equipos de lubricación en
                    talleres e instalaciones industriales.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-slate-600 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Diagnóstico y reparación de bombas: neumáticas,
                      eléctricas, etc.
                    </li>
                    <li className="flex items-start text-slate-600 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Kits de reparación originales.
                    </li>
                    <li className="flex items-start text-slate-600 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Mantenimiento preventivo.
                    </li>
                  </ul>

                  <div className="mt-10">
                    <a
                      href="contacto.html"
                      className="block w-full py-3 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-600 transition-colors"
                    >
                      Solicitar Servicio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="w-[90%] max-w-4xl m-auto text-center bg-yellow-50 border border-yellow-100 p-8 md:p-12 rounded-3xl shadow-sm">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-slate-900 mb-4">
              ¿Listo para optimizar tus sistemas de lubricación?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Asesórate con expertos en mantenimiento industrial y optimiza tu
              operación.
            </p>
            <a
              href="contacto.html"
              className="inline-block bg-yellow-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-yellow-700 transition-colors shadow-lg"
            >
              Solicitar Cotización
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
