'use client';

import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { MobileNav } from '@/components/mobile-nav';
import ThemeToggle from '@/components/theme-toggle';
import { LinkButton } from '@/components/ui/link-button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LinkText } from './ui/link-text';
import { cn } from '@/lib/utils';

export function SiteHeader() {
	const pathname = usePathname();
    return (
		<header className='z-10 sticky top-0 w-full border-b border-border dark:bg-zinc-900 bg-slate-50'>
			<div className='container flex h-14 max-w-screen-2xl items-center'>
				<nav className='flex items-center space-x-4 lg:space-x-6'>
					<Link href='/' className='mr-6 flex items-center space-x-2'>
						<span
							className={cn(
								'transition-colors hover:text-primary hidden sm:inline-block',
								pathname === '/'
									? 'font-bold hover:text-foreground/90 underline underline-offset-4'
									: 'font-bold text-foreground/40'
							)}>
							{siteConfig.name}
						</span>
						<span
							className={cn(
								'transition-colors hover:text-primary inline-block sm:hidden',
								pathname === '/'
									? 'font-bold hover:text-foreground/90 underline underline-offset-4'
									: 'font-bold text-foreground/40'
							)}>
							CK
						</span>
					</Link>
					{/* <LinkText
						href='/experience'
						label='Experience'
						currentPath={pathname}
					/>
					<LinkText
						href='/coffee'
						label='Coffee'
						currentPath={pathname}
					/>
					<LinkText
						href='/photography'
						label='Photography'
						currentPath={pathname}
					/> */}
				</nav>
				<div className='flex flex-1 items-center justify-end space-x-2'>
					<nav className='flex items-center space-x-4 lg:space-x-6'>
						<div className='mr-2 cursor-pointer'>
							<ThemeToggle />
						</div>
						<LinkText
							href='/experience'
							label='Experience'
							currentPath={pathname}
						/>
						<LinkText
							href='/coffee'
							label='Coffee'
							currentPath={pathname}
						/>
						<LinkText
							href='/photography'
							label='Photography'
							currentPath={pathname}
						/>
						<MobileNav />
					</nav>
				</div>
			</div>
		</header>
	);
}