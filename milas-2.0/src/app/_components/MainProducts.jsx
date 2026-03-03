import Link from "next/link";
import MainProductsList from "./MainProductsList";
export default function MainProducts() {
  return (
    <section className="w-[90%] m-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="px-2">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-slate-800">
            Productos Destacados
          </h2>
        </div>
        <Link
          href="/productos"
          className="hidden md:block text-yellow-600 font-semibold hover:underline"
        >
          Ver catálogo completo →
        </Link>
      </div>

      <MainProductsList />
      <div className="md:hidden text-center mt-4">
        <a
          href="productos.html"
          className="text-yellow-600 font-semibold text-sm hover:underline"
        >
          Ver todos los productos →
        </a>
      </div>
    </section>
  );
}
