import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: {
    default: "City of Saugatuck, Michigan — Where the river meets the lake",
    template: "%s · City of Saugatuck",
  },
  description:
    "The official home of the City of Saugatuck, Michigan: Oval Beach, the Chain Ferry, Mt. Baldhead, city services, meetings and documents.",
  openGraph: {
    images: ["https://www.saugatuckcity.com/uploads/1/3/3/9/133977444/dsc-4725.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#12201d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-paper focus:px-4 focus:py-2">
          Skip to content
        </a>
        <SmoothScroll>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <Cursor />
          <div className="grain" aria-hidden />
        </SmoothScroll>
      </body>
    </html>
  );
}
