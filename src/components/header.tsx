import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import ThemeToggle from '@/components/theme-toggle';

const IconConfig = {
	lightColor: 'fill-black',
	darkColor: 'fill-white',
	size: 'w-6 h-6',
}

export function SiteHeader() {
    return (
		<header className='z-10 sticky top-0 w-full border-b border-border dark:bg-slate-900 bg-slate-50'>
			<div className='container flex h-14 max-w-screen-2xl items-center'>
				<MainNav />
				<div className='flex flex-1 items-center justify-end space-x-2'>
					<nav className='flex items-center'>
						<div className='mr-2 cursor-pointer'>
							<ThemeToggle />
						</div>
						<Link
							href={siteConfig.socials.github}
							target='_blank'
							rel='noreferrer'>
							<div
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									' w-10 px-0 hidden sm:inline-flex'
								)}>
								<Icons.gitHub className='w-6 h-6 dark:fill-white' />
								<span className='sr-only'>GitHub</span>
							</div>
						</Link>
						<Link
							href={siteConfig.socials.instagram}
							target='_blank'
							rel='noreferrer'>
							<div
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									'w-10 px-0 hidden sm:inline-flex'
								)}>
								<Icons.instagram className='w-6 h-6 dark:fill-white' />
								<span className='sr-only'>Instagram</span>
							</div>
						</Link>
						<Link
							href={siteConfig.socials.linkedin}
							target='_blank'
							rel='noreferrer'>
							<div
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									'w-10 px-0 hidden sm:inline-flex'
								)}>
								<Icons.linkedin className='w-6 h-6 dark:fill-white' />
								<span className='sr-only'>Linkedin</span>
							</div>
						</Link>
						<MobileNav />
					</nav>
				</div>
			</div>
		</header>
	);
}