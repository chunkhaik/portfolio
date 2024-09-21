import Link from 'next/link';
import { cn } from '@/lib/utils';

type LinkTextProps = {
	href: string;
	label: string;
	currentPath: string;
};

export function LinkText({ href, label, currentPath }: LinkTextProps) {
    const isActive = currentPath === href;
    return (
		<Link
			href={href}
			className={cn(
				'text-sm font-medium transition-colors text-foreground/40 hover:text-foreground/90 hidden sm:inline-block',
				isActive
					? 'text-foreground underline underline-offset-4'
					: 'text-foreground/60'
			)}>
			{label}
		</Link>
	);
}
