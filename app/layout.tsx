import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ad.titude Affairs",
  description: "E-commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <StateContext>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </StateContext>
      </body>
    </html>
  );
}
