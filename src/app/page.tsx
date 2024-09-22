import { Metadata } from "next";
import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description
}

export default function HomePage() {
	return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex-1 space-x-4'>
				<h1 className='inline-block font-black text-3xl sm:text-4xl lg:text-5xl text-slate-600'>
					Experience
				</h1>
			</div>
			<hr className='my-8' />
			<div className='flex flex-col items-center gap-8 md:flex-col md:items-center'>
				<div className='min-w-48 max-w-48 flex flex-col gap-2 items-center'>
					<Avatar className='h-48 w-48'>
						<AvatarImage
							src='/avatar.jpg'
							alt={siteConfig.author}
						/>
						<AvatarFallback>CK</AvatarFallback>
					</Avatar>
				</div>
				<p className='text-base sm:text-lg py-4 text-left md:text-center'>
					A technology enthusiast keen on building{' '}
					<span className='font-bold text-amber-600 dark:text-amber-400 '>
						high performant{' '}
					</span>
					products and solving challenging engineering tasks. Learning
					to solve complex problems with elegant, simplistic
					solutions.
					<br />
					<br />
					When I&apos;m not coding, I&apos;m probably at the gym (I
					try to at least) or{' '}
					<a href='/coffee' className='text-blue-500'>
						brewing coffee
					</a>
					. You can also catch me doing street photography around
					Singapore, or wherever I happen to be based. <br />
				</p>
			</div>
			<hr />
		</div>
	);
}
