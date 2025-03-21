import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import "./theme-config.css"
import NavBar from "./NavBar";
import { Suspense } from "react";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from '@radix-ui/themes';


const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const pacifico = localFont({
  variable: "--font-pacifico",
  src: '../public/fonts/Pacifico.ttf',
})

export const metadata: Metadata = {
  title: "Erfan Poursoleimani",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.variable} 
      style={{fontFamily: "inter"}}>
      <Theme accentColor="violet">
          <NavBar/>
          <main className="p-7">
            <Suspense fallback={'./loading'}>
              {children}
            </Suspense>
          </main>
        </Theme>
      </body>
    </html>
  );
}
