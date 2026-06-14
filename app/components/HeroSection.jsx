import Image from "next/image";
import { whatsappUrl } from "@/app/lib/site-data";
import { displayFontClass, shellClass } from "@/app/lib/styles";
import ButtonLink from "./ButtonLink";
import Eyebrow from "./Eyebrow";

export default function HeroSection() {
  return (
    <section
      className={`${shellClass} grid min-h-[calc(100dvh-6rem)] grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-center gap-[clamp(2rem,5vw,4.5rem)] py-[clamp(3rem,8vw,6rem)] pb-16 max-lg:min-h-0 max-lg:grid-cols-1 max-lg:pt-12`}
      id="inicio"
    >
      <div className="flex min-w-0 flex-col items-start">
        <Eyebrow>Dulce, salado y casero a pedido</Eyebrow>
        <h1 className={`${displayFontClass} mb-5 max-w-[11ch] text-[5.30rem] text-balance leading-[0.98] max-sm:max-w-full max-sm:text-[3.45rem]`}>
          Caprichos caseros para compartir sin complicarte.
        </h1>
        <p className="mb-6 max-w-[39rem] text-lg leading-[1.65] text-balance text-[#e2c3b6]">
          Budines, cookies, tartas, cheesecake, brownies, alfajores, panes,
          pizzas prelistas y sorrentinos preparados para pedidos chicos,
          reuniones y mesas completas.
        </p>

        <div className="mb-4 flex flex-wrap items-center gap-3 max-sm:w-full" aria-label="Acciones principales">
          <ButtonLink className="max-sm:w-full" href={whatsappUrl} external>
            Hacer pedido por WhatsApp
          </ButtonLink>
          <ButtonLink className="max-sm:w-full" href="#productos" variant="secondary">
            Ver productos
          </ButtonLink>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] border border-[rgba(255,232,220,0.18)] bg-[#3a0712] shadow-[0_24px_70px_rgba(28,2,8,0.48)] after:absolute after:inset-auto after:right-4 after:bottom-4 after:left-4 after:w-fit after:rounded-full after:bg-[rgba(38,5,13,0.78)] after:px-4 after:py-3 after:font-black after:text-[#ffe8dc] after:shadow-[0_12px_35px_rgba(58,31,20,0.15)] after:backdrop-blur-xl after:content-['Hecho_a_pedido'] max-sm:rounded-[22px]" aria-label="Productos caseros de Caprichos AB">
        <Image
          src="/images/caprichosab-bakery-hero.png"
          alt="Budines, panes caseros y pan relleno sobre una mesa de cocina"
          width={1824}
          height={1024}
          priority
          className="h-[min(70dvh,680px)] min-h-[460px] w-full object-cover object-center max-lg:h-[58dvh] max-lg:min-h-[360px] max-sm:min-h-[300px]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
