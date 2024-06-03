import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biplab's Portfolio",
  description:
    "Welcome to Biplab's Portfolio - a showcase of innovative full-stack solutions, dynamic web scraping, and robust automation. With a strong foundation in the MERN stack and a passion for crafting seamless user experiences, I turn complex problems into elegant web applications. Dive in to explore my professional journey and the projects that mark my expertise in driving digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
