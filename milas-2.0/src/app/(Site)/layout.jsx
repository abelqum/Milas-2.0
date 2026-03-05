import { Inter, Poppins } from "next/font/google";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import "../globals.css";

// 1. Configuramos Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"], // Semibold y Bold
  variable: "--font-poppins",
  display: "swap", // Mejora el rendimiento visual
});

// 2. Configuramos Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // Regular y Medium (por si lo necesitas en botones)
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "MILAS",
  description:
    "MILAS: Instalamos sistemas de lubricación completos y ofrecemos equipamiento para talleres de tractocamiones. Mejora tu taller hoy.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} antialiased`}
    >
      <body className="font-inter">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
