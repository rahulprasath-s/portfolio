import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahulprasath Selvaraj | Portfolio",
  description: "M.Sc. Human and Artificial Intelligence student specializing in RAG systems, LLMs, and AI solutions. Portfolio showcasing projects, publications, and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const saved=localStorage.getItem("theme");const theme=saved||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.classList.toggle("dark",theme==="dark");document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch{}`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
