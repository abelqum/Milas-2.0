import Button from "./Button";
import H2 from "./H2";

export default function FinalQuestion() {
  return (
    <section className="py-20">
      <div className="w-[90%] max-w-4xl m-auto text-center bg-yellow-50 border border-yellow-100 p-8 md:p-12 rounded-3xl shadow-sm">
        <H2>¿Listo para optimizar tus sistemas de lubricación?</H2>
        <p className="text-slate-600 mb-8 text-lg">
          Asesórate con expertos en mantenimiento industrial y optimiza tu
          operación.
        </p>
        <Button href="contacto.html">Solicitar Cotización</Button>
      </div>
    </section>
  );
}
