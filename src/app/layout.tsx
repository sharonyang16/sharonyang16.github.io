import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased m-auto  min-h-full flex flex-col max-w-[1184px] px-10 bg-white text-black dark:bg-black dark:text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
