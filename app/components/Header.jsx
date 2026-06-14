import Image from "next/image";
import { navLinks, whatsappUrl } from "@/app/lib/site-data";
import { externalLinkProps } from "@/app/lib/styles";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-20 mx-auto mt-3 flex w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-4 rounded-full border border-[rgba(255,232,220,0.18)] bg-[rgba(38,5,13,0.86)] p-2 shadow-[0_12px_40px_rgba(23,2,7,0.34)] backdrop-blur-[18px] max-lg:rounded-3xl max-sm:mt-2 max-sm:w-[min(1180px,calc(100%-1rem))]"
      aria-label="Navegacion principal"
    >
      <a className="flex items-center gap-2.5 pl-1 font-extrabold tracking-[0.02em]" href="#inicio" aria-label="Ir al inicio">
        <Image
          src="/icon.png"
          alt="logo caprichos ab"
          width={41}
          height={41}
          className="grid size-[2.55rem] place-items-center rounded-full bg-linear-to-br from-[#ffe8dc] to-[#f4c7b5] text-[#2a050b]"
        />
        <span className="max-sm:hidden">Caprichos AB</span>
      </a>

      <nav className="flex items-center gap-5 text-sm mx-4 font-bold text-[#e2c3b6] max-lg:hidden" aria-label="Secciones">
        {navLinks.map((link) => (
          <a className="transition hover:text-[#ffd9ba] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(255,232,220,0.72)]" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
