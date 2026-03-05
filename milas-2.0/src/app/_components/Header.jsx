import Logo from "./Logo";
import NavBar from "./Navbar";
import Link from "next/link";
import NavResponsive from "./NavResponsive";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="w-[90%] flex justify-between gap-11 items-center m-auto">
        <Logo />
        <NavBar />
      </div>
      <div
        className="w-[85%] h-screen fixed top-30 right-0 p-10 bg-white shadow-md opacity-0 translate-x-full transition-all duration-500 ease-out md:hidden"
        id="menu-resp"
      >
        <NavResponsive />
      </div>
    </header>
  );
}
