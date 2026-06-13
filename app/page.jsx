import Image from "next/image";

const whatsappUrl =
  "https://wa.me/3756460227?text=Holaa%20me%20gustaria%20hacer%20un%20pedido.";

const products = [
  {
    name: "Budin casero",
    description:
      "Miga suave, dorado parejo y ese sabor de merienda hecha en casa.",
    detail: "Ideal para acompanar mates, cafe o una mesa dulce.",
    imageClass: "product-image-budin"
  },
  {
    name: "Budin con chips",
    description:
      "Budin humedo con chips de chocolate distribuidos en cada porcion.",
    detail: "Una opcion dulce, simple y rendidora para compartir.",
    imageClass: "product-image-chips"
  },
  {
    name: "Pan casero",
    description:
      "Panes rusticos con corteza dorada, miga aireada y aroma recien horneado.",
    detail: "Para comidas, picadas o tener listo durante la semana.",
    imageClass: "product-image-pan"
  },
  {
    name: "Pan relleno",
    description:
      "Pan tierno con relleno abundante, pensado para cortar y servir.",
    detail: "Perfecto para reuniones, cumpleanos o una cena distinta.",
    imageClass: "product-image-relleno"
  }
];

const steps = [
  "Elegis los productos que queres pedir.",
  "Escribis por WhatsApp con el mensaje ya preparado.",
  "Coordinamos disponibilidad, cantidad y entrega."
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Navegacion principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">AB</span>
          <span>Caprichos AB</span>
        </a>

        <nav className="nav-links" aria-label="Secciones">
          <a href="#productos">Productos</a>
          <a href="#pedido">Como pedir</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="nofollow noopener noreferrer">
          Hacer pedido
        </a>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-content">
          <p className="eyebrow">Budines y panes caseros a pedido</p>
          <h1>Caprichos caseros para compartir sin complicarte.</h1>
          <p className="hero-copy">
            Budines clasicos, budines con chips de chocolate, panes caseros y
            panes rellenos preparados con una estetica simple: buen sabor,
            buen aroma y porciones para disfrutar.
          </p>

          <div className="hero-actions" aria-label="Acciones principales">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="nofollow noopener noreferrer">
              Hacer pedido por WhatsApp
            </a>
            <a className="secondary-button" href="#productos">
              Ver productos
            </a>
          </div>

          <div className="hero-note" aria-label="Mensaje predeterminado">
            <span>Mensaje listo:</span>
            <strong>Holaa me gustaria hacer un pedido.</strong>
          </div>
        </div>

        <div className="hero-image-wrap" aria-label="Productos caseros de Caprichos AB">
          <Image
            src="/images/caprichosab-bakery-hero.png"
            alt="Budines, panes caseros y pan relleno sobre una mesa de cocina"
            width={1824}
            height={1024}
            priority
            className="hero-image"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="products-section section-shell" id="productos">
        <div className="section-heading">
          <p className="eyebrow">Productos</p>
          <h2>Elegidos de horno casero</h2>
          <p>
            Una carta corta y clara, con opciones dulces y saladas para pedir
            por WhatsApp.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <Image
                  src="/images/caprichosab-bakery-hero.png"
                  alt={product.name}
                  width={456}
                  height={320}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className={product.imageClass}
                />
              </div>
              <div className="product-card-content">
                <p className="product-tag">A pedido</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>{product.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="order-section section-shell" id="pedido">
        <div className="order-card">
          <div>
            <p className="eyebrow">Como pedir</p>
            <h2>Un boton, un mensaje y coordinamos.</h2>
            <p>
              El enlace de WhatsApp abre una conversacion con el mensaje por
              defecto para que solo tengas que sumar cantidades o consultas.
            </p>
          </div>

          <ol className="order-list">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <a className="primary-button order-button" href={whatsappUrl} target="_blank" rel="nofollow noopener noreferrer">
            Enviar pedido
          </a>
        </div>
      </section>

      <section className="contact-section section-shell" id="contacto">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Seguinos o escribinos directo.</h2>
          </div>

          <div className="contact-actions">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label="Contactar por WhatsApp para hacer un pedido">
              WhatsApp
            </a>
            <a className="secondary-button" href="https://www.instagram.com/caprichosab_/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Abrir Instagram de Caprichos AB">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
