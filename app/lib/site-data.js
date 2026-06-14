export const whatsappUrl =
  "https://wa.me/3756460227?text=Holaa%20me%20gustaria%20hacer%20un%20pedido.";

export const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#pedido", label: "Como pedir" },
  { href: "#contacto", label: "Contacto" }
];

export const orderSteps = [
  "Elegis los productos que queres pedir.",
  "Escribis por WhatsApp con el mensaje ya preparado.",
  "Coordinamos disponibilidad, cantidad y entrega."
];

export const sweetProducts = [
  {
    name: "Budines",
    description: "Clasicos, humedos y listos para merienda o mesa dulce.",
    image: "/images/products/budin.webp",
    detailImage: "/images/products/budin.webp",
    detailImageClass: "origin-bottom object-bottom [transform:scale(1.55)]",
    detailTitle: "Sabores disponibles",
    options: ["Naranja", "Limon", "Chips", "Banana", "Banana y nuez", "Mandarina y chips"]
  },
  {
    name: "Budines con chips",
    description: "Con chips de chocolate y miga tierna en cada porcion.",
    image: "/images/products/budines-con-chips.webp",
    detailTitle: "Sabores disponibles",
    options: []
  },
  {
    name: "Cookies",
    description: "Dulces, doradas y pensadas para acompanar cafe o mates.",
    image: "/images/products/cookies.webp",
    detailTitle: "Variedades disponibles",
    options: []
  },
  {
    name: "Tartas de fruta",
    description: "Frescas, coloridas y con terminacion casera.",
    image: "/images/products/tarta-frutas.webp",
    detailTitle: "Sabores disponibles",
    options: ["Durazno", "Frutilla", "Frutos Rojos", "Mixtos"]
  },
  {
    name: "Cheesecake",
    description: "Cremoso, suave y con base dulce para servir frio.",
    image: "/images/products/cheesecake.webp",
    detailTitle: "Sabores disponibles",
    options: ["Durazno", "Frutilla", "Frutos Rojos"]
  },
  {
    name: "Brownies",
    description: "Intensos, chocolatosos y en porciones para compartir.",
    image: "/images/products/brownies.webp",
    detailTitle: "Opciones disponibles",
    options: ["Tradicional", "Torta brownie", "Galleta brownie"]
  },
  {
    name: "Alfajores",
    description: "Rellenos generosos con sabor artesanal.",
    image: "/images/products/alfajores.webp",
    detailTitle: "Rellenos disponibles",
    options: ["Alfacookies", "Alfacoquitos", "Fulbito", "Bon o Bon", "Milka mousse"]
  }
];

export const savoryProducts = [
  {
    name: "Panes caseros",
    description: "Pan casero tierno y sabor casero.",
    image: "/images/products/pan.webp",
    detailTitle: "Opciones disponibles",
    options: ["Pancitos de leche" , "Pancitos saborizados", "Pan rellenos dulce o salado"] 
  },
  {
    name: "Pizzas prelistas",
    description: "Listas para terminar en casa y resolver comidas rapido.",
    image: "/images/products/pizza.webp",
    detailImageClass: "origin-bottom object-bottom [transform:scale(1.32)]",
    detailTitle: "Opciones disponibles",
    options: ["Clasica (salsa, muzzarella, aceitunas)", "Especial (salsa, muzzarella, jamon, tomate, aceituna)"]
  },
  {
    name: "Sorrentinos",
    description: "Pastas caseras para freezer, almuerzo o cena.",
    image: "/images/products/sorrentinos.webp",
    detailImage: "/images/products/sorrentinos.webp",
    detailImageClass: "origin-bottom object-bottom [transform:scale(1.14)]",
    detailTitle: "Rellenos disponibles",
    options: ["Carne", "Jamon y queso", "Ricota", "Verdura", "Pollo"]
  }
];

export const productGroups = [
  { id: "dulces", title: "Dulces", label: "Reposteria", products: sweetProducts },
  { id: "salados", title: "Salados y caseros", label: "Horno y cocina", products: savoryProducts }
];
