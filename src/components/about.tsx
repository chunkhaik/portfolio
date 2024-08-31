import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';

export default function AboutMe() {
	return (
		<div>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
				<div className='flex-1 space-x-4'>
					<h1 className='inline-block font-black text-3xl sm:text-4xl lg:text-5xl'>
						About Me
					</h1>
				</div>
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
					I&apos;m a technology enthusiast keen on building{' '}
					<span className='font-bold text-amber-600 dark:text-amber-400 '>
						high performant{' '}
					</span>
					products and solving complex engineering tasks. I
					particularly appreciate the beauty behind
					<span> parallelism and concurrency</span>, with new found
					interest in Deep Learning as well. <br />
					<br />
					When I&apos;m not coding, I&apos;m probably at the gym (I
					try to at least) or{' '}
					<a href='/coffee' className='text-blue-500'>
						brewing coffee
					</a>
					. You can also catch me doing street photography around
					Singapore, or wherever I happen to be based. <br />
					<br />
					Let&apos;s connect! 🚀
				</p>
			</div>
			<hr />
		</div>
	);
}
