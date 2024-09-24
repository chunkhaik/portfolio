import { PhotographyEvent } from '@/app/photography/photography'

export function PhotographyIntro({
	projectDetails,
}: {
	projectDetails?: PhotographyEvent;
}) {
	return (
		<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between mb-6'>
			<div className='flex-1 space-y-3'>
				<h1 className='inline-block text-slate-600 dark:text-slate-300 font-black text-3xl sm:text-4xl lg:text-5xl'>
					{projectDetails?.eventTitle || 'Photography'}
				</h1>
				<p className='text-xs sm:text-sm text-muted-foreground'>
					{projectDetails?.eventDescription || 'Documenting how I see things around me.'}
				</p>
			</div>
		</div>
	);
}
