import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/icons/favicon-dark.ico",
        href: "/assets/icons/favicon-dark.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/icons/favicon-light.ico",
        href: "/assets/icons/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: light)",
        rel: "apple-touch-icon",
        url: "/assets/icons/apple-touch-icon-dark.png",
        href: "/assets/icons/apple-touch-icon-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        rel: "apple-touch-icon",
        url: "/assets/icons/apple-touch-icon-light.png",
        href: "/assets/icons/apple-touch-icon-light.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-open-sauce antialiased">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
