import { DISTRIBUTORS_LIST } from "../_constants/distributors";
import Image from "next/image";
export default function Distributors() {
  return (
    <section className="w-[90%] m-auto mt-10 mb-10 py-12 bg-white shadow-sm rounded-lg">
      <div className="text-center">
        <p className="text-slate-500 font-medium mb-10 uppercase text-sm tracking-widest">
          Distribuidores Oficiales
        </p>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
          {DISTRIBUTORS_LIST.map((el, id) => (
            <div key={id} className="flex items-center justify-center">
              <Image
                src={`/img/logo-${el}.webp`}
                alt={`${el.toUpperCase}`}
                className="h-16 md:h-20 object-contain transition-transform hover:scale-110 duration-300"
                width={80}
                height={64}
              />
              <span className="hidden font-bold text-4xl text-slate-400 font-poppins">
                {el}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
