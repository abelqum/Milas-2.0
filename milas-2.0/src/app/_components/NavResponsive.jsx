import Link from "next/link";
import { NAV_LINKS } from "../_constants/navLinks";

export default function NavResponsive() {
  return (
    <ul className="w-full text-slate-800 flex flex-col items-center gap-8 py-10 font-poppins font-medium">
      {NAV_LINKS.map((el, id) => (
        <li key={id}>
          <Link
            href={el.url}
            className="hover:scale-100 hover:text-yellow-600 transition-all duration-200"
          >
            {el.link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
