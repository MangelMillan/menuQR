import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/bakraun.svg";
import Logo from "../../public/ZarandeadoLogo.svg";

export default function MenuLayout({ children }: { children: ReactNode }) {
  return (
    <body>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={BackgroundImage}
          alt="background image"
          priority
          quality="100"
          className="object-cover"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "300vw",
            height: "300vh",
          }}
        />
        <Image
          src={Logo}
          alt="Logo"
          className="absolute left-4 top-4 object-contain md:left-10 md:top shadow-2xl"
          width={120}
          height={120}
          priority
        />
        {children}
      </div>
    </body>
  );
}
