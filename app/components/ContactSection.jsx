import { whatsappUrl } from "@/app/lib/site-data";
import { displayFontClass, panelClass, shellClass } from "@/app/lib/styles";
import ButtonLink from "./ButtonLink";
import Eyebrow from "./Eyebrow";

export default function ContactSection() {
  return (
    <section className={`${shellClass} py-[clamp(3rem,7vw,6rem)]`} id="contacto">
      <div className={`${panelClass} grid grid-cols-[1fr_1fr_auto] items-center gap-8 p-[clamp(1.35rem,4vw,2.4rem)] max-lg:grid-cols-1 max-sm:rounded-[22px]`}>
        <div>
          <Eyebrow>Contacto</Eyebrow>
          <h2 className={`${displayFontClass} mb-0 text-[4rem] leading-[0.98] max-sm:text-[2.65rem]`}>
            Seguinos o escribinos directo.
          </h2>
        </div>

        <div className="flex flex-col items-center mx-4 justify-center gap-3 max-sm:w-full">
          <ButtonLink
            ariaLabel="Contactar por WhatsApp para hacer un pedido"
            className="max-sm:w-full mx-4"
            href={whatsappUrl}
            external
          >
            WhatsApp
          </ButtonLink>
          <ButtonLink
            ariaLabel="Abrir Instagram de Caprichos AB"
            className="max-sm:w-full"
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
