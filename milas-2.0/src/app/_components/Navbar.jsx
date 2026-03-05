import Link from "next/link";
import { NAV_LINKS } from "../_constants/navLinks";

import HambMenu from "./HamIcon";
export default function NavBar() {
  return (
    <nav className="flex items-center md:w-full">
      <ul className="md:flex justify-around items-center hidden text-slate-800 font-poppins font-semibold w-full">
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
      <HambMenu />
    </nav>
  );
}
