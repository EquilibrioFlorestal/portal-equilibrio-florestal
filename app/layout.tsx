import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
//const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Portal",
  description: "Portal de acesso Equilíbrio Florestal",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#EBEBEB" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
