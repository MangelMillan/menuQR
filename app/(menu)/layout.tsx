import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/ZarandeadoLogo.svg";
import Logo from "../../public/ZarandeadoLogo.svg";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Html>
      <Head />
      <body>
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
          <Image
            src={BackgroundImage}
            alt="background image"
            className="hidden sm:flex sm:object-cover -z-10 brightness-[95%]"
            priority
            fill
          />
          <Image
            src={Logo}
            alt="Logo"
            className="absolute left-4 top-4 object-contain md:left-10 md:top "
            width={120}
            height={120}
            priority
          />
          {children}
        </div>
      </body>
    </Html>
  );
}
