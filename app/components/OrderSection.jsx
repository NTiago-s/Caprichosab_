import { orderSteps, whatsappUrl } from "@/app/lib/site-data";
import { displayFontClass, panelClass, shellClass } from "@/app/lib/styles";
import ButtonLink from "./ButtonLink";
import Eyebrow from "./Eyebrow";

export default function OrderSection() {
  return (
    <section className={`${shellClass} py-[clamp(3rem,7vw,6rem)]`} id="pedido">
      <div className={`${panelClass} grid grid-cols-[1fr_1fr_auto] items-center gap-8 p-[clamp(1.25rem,4vw,2.5rem)] max-lg:grid-cols-1 max-sm:rounded-[22px]`}>
        <div>
          <Eyebrow>Como pedir</Eyebrow>
          <h2 className={`${displayFontClass} mb-4 text-[4rem] leading-[0.98] max-sm:text-[2.65rem]`}>
            Un boton, un mensaje y coordinamos.
          </h2>
          <p className="text-lg leading-[1.65] text-[#e2c3b6]">
            El enlace de WhatsApp abre una conversacion con el mensaje por
            defecto para que solo tengas que sumar cantidades o consultas.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 ">


        <ol className="grid gap-3 pl-5 font-extrabold text-[#ffe8dc]">
          {orderSteps.map((step) => (
            <li className="pl-1.5" key={step}>
              {step}
            </li>
          ))}
        </ol>

        <ButtonLink className="whitespace-nowrap max-lg:w-fit max-sm:w-full mt-4" href={whatsappUrl} external>
          Hacer pedido
        </ButtonLink>
          </div>
      </div>
    </section>
  );
}
