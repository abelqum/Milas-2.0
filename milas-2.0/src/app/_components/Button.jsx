import Link from "next/link";

export default function Button({ href = "#", children }) {
  return (
    <Link
      href={href}
      className="w-[85%] hover:underline hover:font-bold transition-all duration-200 md:p-3 lg:p-5 shadow-lg m-auto font-poppins font-semibold text-white border rounded-2xl bg-yellow-600 text-center text-lg md:text-xl p-5"
    >
      {children}
    </Link>
  );
}
