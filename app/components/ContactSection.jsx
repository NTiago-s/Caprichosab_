import { whatsappUrl } from "@/app/lib/site-data";
import { displayFontClass, panelClass, shellClass } from "@/app/lib/styles";
import ButtonLink from "./ButtonLink";
import Eyebrow from "./Eyebrow";

export default function ContactSection() {
  return (
    <section className={`${shellClass} py-[clamp(3rem,7vw,6rem)] max-sm:py-10`} id="contacto">
      <div className={`${panelClass} grid grid-cols-[1fr_1fr_auto] items-center gap-8 p-[clamp(1.35rem,4vw,2.4rem)] max-lg:grid-cols-1 max-sm:gap-5 max-sm:rounded-[22px] max-sm:p-5`}>
        <div>
          <Eyebrow>Contacto</Eyebrow>
          <h2 className={`${displayFontClass} mb-0 text-[4rem] leading-[0.98] max-sm:text-[2.35rem]`}>
            Seguinos o escribinos directo.
          </h2>
        </div>

        <div className="mx-4 flex flex-col items-center justify-center gap-3 max-sm:mx-0 max-sm:w-full">
          <ButtonLink
            ariaLabel="Contactar por WhatsApp para hacer un pedido"
            className="mx-4 max-sm:mx-0 max-sm:min-h-11 max-sm:w-full max-sm:py-3"
            href={whatsappUrl}
            external
          >
            WhatsApp
          </ButtonLink>
          <ButtonLink
            ariaLabel="Abrir Instagram de Caprichos AB"
            className="max-sm:min-h-11 max-sm:w-full max-sm:py-3"
            href="https://www.instagram.com/caprichosab_/"
            variant="secondary"
            external
          >
            Instagram
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
