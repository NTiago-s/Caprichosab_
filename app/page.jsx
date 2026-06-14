import Image from "next/image";

const whatsappUrl =
  "https://wa.me/3756460227?text=Holaa%20me%20gustaria%20hacer%20un%20pedido.";

const sweetProducts = [
  {
    name: "Budines",
    description: "Clasicos, humedos y listos para merienda o mesa dulce.",
    image: "/images/products/budines.webp"
  },
  {
    name: "Budines con chips",
    description: "Con chips de chocolate y miga tierna en cada porcion.",
    image: "/images/products/budines-con-chips.webp"
  },
  {
    name: "Cookies",
    description: "Dulces, doradas y pensadas para acompanar cafe o mates.",
    image: "/images/fondo.webp"
  },
  {
    name: "Tartas de fruta",
    description: "Frescas, coloridas y con terminacion casera.",
    image: "/images/products/tartas-de-fruta.webp"
  },
  {
    name: "Cheesecake",
    description: "Cremoso, suave y con base dulce para servir frio.",
    image: "/images/products/cheesecake.webp"
  },
  {
    name: "Brownies",
    description: "Intensos, chocolatosos y en porciones para compartir.",
    image: "/images/products/brownies.webp"
  },
  {
    name: "Alfajores",
    description: "Rellenos generosos con sabor artesanal.",
    image: "/images/products/alfajores.webp"
  }
];

const savoryProducts = [
  {
    name: "Pan casero relleno",
    description: "Pan tierno con rellenos dulces o salados.",
    image: "/images/products/pan-casero-relleno.webp"
  },
  {
    name: "Dulce y salado",
    description: "Opciones para mesas mixtas, reuniones y pedidos especiales.",
    image: "/images/fondo.webp"
  },
  {
    name: "Pancitos de leche",
    description: "Suaves, esponjosos y rendidores para acompanar.",
    image: "/images/products/pancitos-de-leche.webp"
  },
  {
    name: "Pizzas prelistas",
    description: "Listas para terminar en casa y resolver comidas rapido.",
    image: "/images/products/pizzas-prelistas.webp"
  },
  {
    name: "Sorrentinos",
    description: "Pastas caseras para freezer, almuerzo o cena.",
    image: "/images/products/sorrentinos.webp"
  }
];

const productGroups = [
  { id: "dulces", title: "Dulces", label: "Reposteria", products: sweetProducts },
  { id: "salados", title: "Salados y caseros", label: "Horno y cocina", products: savoryProducts }
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
          <p className="eyebrow">Dulce, salado y casero a pedido</p>
          <h1>Caprichos caseros para compartir sin complicarte.</h1>
          <p className="hero-copy">
            Budines, cookies, tartas, cheesecake, brownies, alfajores, panes,
            pizzas prelistas y sorrentinos preparados para pedidos chicos,
            reuniones y mesas completas.
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
          <h2>Una carta casera para dulce y salado</h2>
          <p>
            Productos simples de elegir y faciles de pedir por WhatsApp, con
            preparaciones para merienda, cumpleanos, reuniones o freezer.
          </p>
        </div>

        <div className="product-groups">
          {productGroups.map((group) => (
            <section className="product-group" key={group.title} aria-labelledby={`grupo-${group.id}`}>
              <div className="product-group-heading">
                <p className="product-tag">{group.label}</p>
                <h3 id={`grupo-${group.id}`}>{group.title}</h3>
              </div>

              <div className="product-grid">
                {group.products.map((product, index) => (
                  <article className="product-card" key={product.name}>
                    <div className="product-card-cover">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={420}
                        height={280}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="product-card-content">
                      <span className="product-number">{String(index + 1).padStart(2, "0")}</span>
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
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
