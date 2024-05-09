import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/header";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans"});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
};

export const viewports: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: dark)", color: 'black'},
    {media: "(prefers-color-scheme: light)", color: 'white'},
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[4.0rem]">
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable)}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <SiteHeader /> 
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
