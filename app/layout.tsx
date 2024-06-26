import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Buku Saku Inflasi",
  description: "Data Warning relatifitas harga inflasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* <Navbar /> */}
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        <Footer />
        </body>
      </html>
  );
}
