import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeSwitch } from "@/components/theme-switch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Template",
    template: "%s | Next.js Template",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="system" disableTransitionOnChange enableSystem>
          <nav className="grid place-items-center">
            <ThemeSwitch />
          </nav>
          <main>{children}</main>
          <footer className="grid place-items-center">Footer</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
