import type { Metadata } from "next";
import { Geist, Geist_Mono, Road_Rage, Roboto, Alatsi } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400"
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900']
});

const alatsi = Alatsi({
  variable: "--font-alatsi",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Event ticket Generator",
  description: "A platform for generating event tickets",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roadRage.variable} ${roboto.variable} ${alatsi.variable} antialiased bg-[#02191D] `}
      >
        <div className="max-w-[1440px] mx-auto min-h-screen relative">
          <Navbar />
          <div className="w-full h-full flex  pt-14 pb-28 px-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
