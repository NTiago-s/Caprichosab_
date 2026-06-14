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
    <html className="scroll-smooth [scrollbar-gutter:stable]" lang="es">
      <body className="min-h-screen overflow-x-hidden bg-[#170207] font-[Trebuchet_MS,Segoe_UI,sans-serif] text-[#fff8ed] antialiased [scrollbar-gutter:stable]">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(45,4,13,0.82),rgba(23,2,7,0.93)),url('/images/fondo.webp'),radial-gradient(circle_at_top_right,rgba(255,232,220,0.18),transparent_24rem),linear-gradient(180deg,#3a0712_0%,#170207_58%,#21030a_100%)] bg-[length:auto,min(100%,720px)_auto,auto,auto] bg-[position:center_top,center_top,right_top,center_top] bg-repeat-y" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,232,220,0.12),transparent_1.5px),linear-gradient(rgba(255,232,220,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,232,220,0.025)_1px,transparent_1px)] bg-[length:56px_56px,56px_56px,56px_56px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.52),transparent_82%)]" />
        {children}
      </body>
    </html>
  );
}
