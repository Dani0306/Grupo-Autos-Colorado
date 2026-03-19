import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const outfit = localFont({
  src: [
    {
      path: "../fonts/Outfit-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Outfit-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Outfit-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Outfit-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Outfit-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Outfit-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Outfit-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Outfit-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Outfit-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo Autos Colorado | Compra y Venta de Vehículos",
  description:
    "Compra y vende tu vehículo con confianza. Somos una empresa familiar con años de experiencia en el mercado automotriz colombiano. Precios justos, trámites transparentes y atención personalizada.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
