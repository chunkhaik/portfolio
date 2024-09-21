'use client';

import { siteConfig } from '@/config/site';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LinkText } from './ui/link-text';

export function MainNav() {
	const pathname = usePathname();
	return (
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
			</Link>
			<LinkText
				href='/experience'
				label='Experience'
				currentPath={pathname}
			/>
			<LinkText href='/coffee' label='Coffee' currentPath={pathname} />
			<LinkText href='/blog' label='Blog' currentPath={pathname} />
		</nav>
	);
}
