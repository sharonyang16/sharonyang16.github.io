import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import Header from "../components/layout/Header/Header";
import "@/styles/globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sharon Yang",
  description: "Sharon Yang's Personal + Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className}`}>
      <body
        className={`$${geist.variable} ${instrumentSerif.variable} antialiased m-auto  min-h-full flex flex-col max-w-[1184px] px-10 bg-white text-black dark:bg-black dark:text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
