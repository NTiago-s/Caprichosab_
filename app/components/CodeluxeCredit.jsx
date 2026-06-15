import Image from "next/image";
import { displayFontClass, externalLinkProps, shellClass } from "@/app/lib/styles";
import ButtonLink from "./ButtonLink";

export default function CodeluxeCredit() {
  return (
    <section className={`${shellClass} pb-[clamp(2.25rem,5vw,4rem)]`} aria-label="Credito de desarrollo web">
      <div className="relative isolate overflow-hidden rounded-[22px] border border-[rgba(132,202,255,0.38)] bg-[radial-gradient(circle_at_12%_20%,rgba(61,169,255,0.34),transparent_14rem),linear-gradient(135deg,rgba(8,31,72,0.86),rgba(38,5,13,0.78)_58%,rgba(9,2,18,0.92))] px-[clamp(0.8rem,2.4vw,1.35rem)] py-[clamp(0.7rem,2vw,1.05rem)] shadow-[0_18px_54px_rgba(0,58,156,0.2)] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.14),transparent)] before:opacity-45 max-sm:rounded-[18px]">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 max-md:grid-cols-[auto_1fr] max-sm:grid-cols-1 max-sm:gap-3">
          <a
            className="group relative max-md:hidden grid size-10 shrink-0 place-items-center overflow-hidden rounded-2xl border border-[rgba(174,221,255,0.42)] bg-[#050b1f] shadow-[0_0_24px_rgba(67,170,255,0.38)] transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(132,202,255,0.72)] max-sm:size-9"
            href="https://codeluxe.tech/"
            aria-label="Visitar pagina de Codeluxe"
            {...externalLinkProps}
          >
            <Image
              src="/images/codeluxe-logo.webp"
              alt="Logo de Codeluxe"
              width={40}
              height={40}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
            />
          </a>

          <div className="min-w-0 my-1">
            <h2 className={`${displayFontClass} m-0 text-lg text-center md:text-start font-semibold leading-tight max-sm:text-sm`}>
              Pagina hecha por Codeluxe.
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2.5 max-md:col-span-2 max-md:justify-start max-sm:col-span-1 max-sm:w-full">
            <ButtonLink
              className="min-h-9 bg-linear-to-br from-[#d7f0ff] to-[#73c7ff] px-4 py-2 text-sm text-[#041225] shadow-[0_10px_24px_rgba(86,181,255,0.18)] hover:from-[#f1fbff] hover:to-[#a7ddff] max-sm:w-full"
              href="https://codeluxe.tech/"
              external
            >
              Visitar pagina
            </ButtonLink>
            <ButtonLink
              className="min-h-9 border-[rgba(154,215,255,0.34)] bg-[rgba(10,39,83,0.44)] px-4 py-2 text-sm text-[#dbefff] hover:border-[rgba(154,215,255,0.64)] hover:bg-[rgba(10,39,83,0.62)] max-sm:w-full"
              href="https://www.instagram.com/codeluxe_/"
              variant="secondary"
              external
            >
              Instagram
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
