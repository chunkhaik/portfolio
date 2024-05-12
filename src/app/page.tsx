import AboutMe from "@/components/about";
import { Metadata } from "next";
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description
}

export default async function HomePage() {
	return (
		<div className='container max-w-6xl pt-6 lg:py-10'>
			<AboutMe />
		</div>
	);
}
