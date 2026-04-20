import "./globals.css";

export const metadata = {
  title: "Saurabh Luxe — The Digital Atelier",
  description:
    "Curators of the finest olfactory experiences. Elevating the art of perfumery for the modern connoisseur.",
  keywords: "luxury perfume, niche fragrance, eau de parfum, extrait, oud, designer perfume",
  openGraph: {
    title: "Saurabh Luxe — The Digital Atelier",
    description: "A century of artisanal alchemy.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
