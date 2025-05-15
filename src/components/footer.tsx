import { siteConfig } from '@/config/site';
import { Mail } from 'lucide-react';
import { Icons } from './icons';

export function SiteFooter() {
	return (
		<footer>
			<div className='mb-6 mt-14 flex flex-col items-center'>
				<div className='mb-3 flex space-x-4'>
					<a
						target='_blank'
						rel='noreferrer'
						href='mailto:chunkhai.k@gmail.com'
						className='fill-foreground/40 text-foreground/40 hover:text-foreground/70'>
						<span className='sr-only'>Mail</span>
						<Mail className='h-6 w-6' />
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href={siteConfig.socials.github}
						className='fill-foreground/40 hover:fill-foreground/70'>
						<span className='sr-only'>GitHub</span>
						<Icons.gitHub className='w-6 h-6 dark:fill-white' />
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href={siteConfig.socials.linkedin}
						className='fill-foreground/40 hover:fill-foreground/70'>
						<span className='sr-only'>Linkedin</span>
						<Icons.linkedin className='w-6 h-6 dark:fill-white' />
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href={siteConfig.socials.instagram}
						className='fill-foreground/40 hover:fill-foreground/70'>
						<span className='sr-only'>Instagram</span>
						<Icons.instagram className='w-6 h-6 dark:fill-white' />
					</a>
				</div>
				<div className='mb-2 flex space-x-2 text-sm text-foreground/40'>
					2025 © {siteConfig.author}
				</div>
			</div>
		</footer>
	);
}
