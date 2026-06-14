import { displayFontClass, shellClass } from "@/app/lib/styles";
import Eyebrow from "./Eyebrow";
import ProductCatalog from "./ProductCatalog";

export default function ProductsSection() {
  return (
    <section className={`${shellClass} py-[clamp(3rem,7vw,6rem)]`} id="productos">
      <div className="mb-8 max-w-3xl">
        <Eyebrow>Productos</Eyebrow>
        <h2 className={`${displayFontClass} mb-4 text-[4rem] leading-[0.98] max-sm:text-[2.65rem]`}>
          Una carta casera para dulce y salado.
        </h2>
        <p className="text-lg leading-[1.65] text-[#e2c3b6]">
          Productos simples de elegir y faciles de pedir por WhatsApp, con
          preparaciones para merienda, cumpleanos, reuniones o freezer.
        </p>
      </div>

      <ProductCatalog />
    </section>
  );
}
