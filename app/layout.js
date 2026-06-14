import "./globals.css";

export const metadata = {
  title: "Caprichos AB | Reposteria y comidas caseras",
  description:
    "Budines, cookies, tartas de fruta, cheesecake, brownies, alfajores, panes, pizzas prelistas y sorrentinos hechos a pedido.",
  metadataBase: new URL("https://caprichosab.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }]
  },
  openGraph: {
    title: "Caprichos AB | Reposteria y comidas caseras",
    description:
      "Productos caseros hechos a pedido: opciones dulces, panes rellenos, pizzas prelistas y sorrentinos.",
    images: ["/images/caprichosab-bakery-hero.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
