"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import H3 from "./H3";

// 1. Separamos el formulario en su propio componente interno
function FormularioInteractivo() {
  // Leemos la URL buscando la palabra "?producto="
  const searchParams = useSearchParams();
  const productoInteres = searchParams.get("producto") || "";

  return (
    <form
      id="contactForm"
      action="https://formsubmit.co/ajax/ventas@milass.com.mx"
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_subject"
        value="Nueva Cotización desde Sitio Web!"
      />

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Empresa
          </label>
          <input
            type="text"
            name="empresa"
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            required
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            placeholder="10 dígitos"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            placeholder="ejemplo@empresa.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          Producto o Servicio de Interés
        </label>
        <input
          type="text"
          name="interes"
          id="input-interes"
          defaultValue={productoInteres} // ¡AQUÍ ESTÁ LA MAGIA! Se llena solo.
          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
          placeholder="Ej: Bomba Samson, Instalación..."
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          Mensaje
        </label>
        <textarea
          name="mensaje"
          rows="4"
          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
          placeholder="Cuéntanos más sobre tu proyecto..."
        ></textarea>
      </div>

      <button
        type="submit"
        id="submitBtn"
        className="w-full bg-yellow-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-yellow-700 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Solicitar Cotización
      </button>
    </form>
  );
}

// 2. El componente principal que envuelve el formulario
export default function ContactForm() {
  return (
    <div className="w-full lg:w-3/5 p-8 lg:p-12 relative">
      <H3 color="text-slate-800">Envíanos un mensaje</H3>

      <div
        id="form-status"
        className="hidden mb-6 p-4 rounded-lg text-center font-medium"
      ></div>

      {/* Usamos Suspense porque useSearchParams necesita cargar del lado del cliente */}
      <Suspense
        fallback={
          <div className="animate-pulse h-64 bg-slate-100 rounded-lg mt-4 w-full"></div>
        }
      >
        <FormularioInteractivo />
      </Suspense>
    </div>
  );
}
