import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import ThemeToggle from '@/components/theme-toggle';
import { LinkButton } from '@/components/ui/link-button';

const IconConfig = {
	lightColor: 'fill-black',
	darkColor: 'fill-white',
	size: 'w-6 h-6',
}

export function SiteHeader() {
    return (
		<header className='z-10 sticky top-0 w-full border-b border-border dark:bg-zinc-900 bg-slate-50'>
			<div className='container flex h-14 max-w-screen-2xl items-center'>
				<MainNav />
				<div className='flex flex-1 items-center justify-end space-x-2'>
					<nav className='flex items-center'>
						<div className='mr-2 cursor-pointer'>
							<ThemeToggle />
						</div>
						<LinkButton href={siteConfig.socials.github} icon={Icons.gitHub} label='GitHub' />
						<LinkButton href={siteConfig.socials.instagram} icon={Icons.instagram} label='Instagram' />
						<LinkButton href={siteConfig.socials.linkedin} icon={Icons.linkedin} label='LinkedIn' />
						<MobileNav />
					</nav>
				</div>
			</div>
		</header>
	);
}