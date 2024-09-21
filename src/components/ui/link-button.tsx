import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

type SocialLinkProps = {
	href: string;
	icon: React.ElementType;
	label: string;
};

export function LinkButton({ href, icon: Icon, label }: SocialLinkProps) {
	return (
		<Link
			href={href}
			target='_blank'
			rel='noreferrer'
			className={cn(
				buttonVariants({ variant: 'ghost' }),
				'w-10 px-0 hidden hover:bg-transparent sm:inline-flex cursor-default'
			)}>
			<Icon className='w-6 h-6 fill-foreground/40 dark:fill-white hover:fill-foreground/70 hover:cursor-pointer' />
			<span className='sr-only'>{label}</span>
		</Link>
	);
}
