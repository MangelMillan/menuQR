import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/BackraunOP.svg";
import Logo from "../../public/ZarandeadoLogo.svg";

export default function MenuLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Image
        src={BackgroundImage}
        alt="background image"
        priority
        className="fixed inset-0 object-cover w-full h-full"
      />
      <header className="bg-[#27649C] fixed w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex-shrink-0">
            <a href="menu">
              <Image src={Logo} alt="Logo" width={120} height={120} priority />
            </a>
          </div>
        </div>
      </header>

      <main className="relative pt-24">{children}</main>
    </div>
  );
}
