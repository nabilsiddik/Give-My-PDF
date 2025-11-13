import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
  variable: "--font-sanse",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Give My PDF",
  description: "All in one PDF analysis, summarize and converting platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${fontSans.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar/>
        <div className="flex-1">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
