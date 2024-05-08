import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from './mobile-nav';

export function SiteHeader() {
    return (
		<header className='sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-14 max-w-screen-2xl items-center'>
				<MainNav />
				<div className='flex flex-1 items-center justify-end space-x-2'>
					<nav className='flex items-center'>
						<Link
							href={siteConfig.socials.github}
							target='_blank'
							rel='noreferrer'>
							<div
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									'w-10 px-0 hidden sm:inline-flex'
								)}>
								<Icons.gitHub className='w-4 h-4' />
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
								<Icons.instagram className='w-4 h-4' />
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
								<Icons.linkedin className='w-4 h-4' />
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