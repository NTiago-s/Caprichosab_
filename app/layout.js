import "./globals.css";

export const metadata = {
  title: "Caprichos AB | Budines y panes caseros",
  description:
    "Budines, budines con chips de chocolate, panes caseros y panes rellenos hechos a pedido.",
  metadataBase: new URL("https://caprichosab.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }]
  },
  openGraph: {
    title: "Caprichos AB | Budines y panes caseros",
    description:
      "Productos caseros hechos a pedido: budines, budines con chips de chocolate, panes caseros y panes rellenos.",
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
