import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/header";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans"});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
};

const viewports: Viewport = {
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
		<html lang='en' className='scroll-pt-[4.0rem]' suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen font-sans antialiased bg-slate-50 dark:bg-zinc-900 text-zinc-500 dark:text-slate-300',
					inter.variable
				)}>
				<Providers>
					<div className='relative flex min-h-dvh flex-col' >
						<SiteHeader />
						<main className='flex-1'>{children}</main>
						<SiteFooter />
					</div>
				</Providers>
			</body>
		</html>
  );
}
