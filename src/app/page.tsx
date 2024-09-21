import AboutMe from "@/components/about";
import { Metadata } from "next";
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description
}

export default async function HomePage() {
	return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex flex-row gap-4 justify-between'>
				<AboutMe />
			</div>
		</div>
	);
}
