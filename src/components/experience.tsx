import { Icons, IconType } from '@/components/icons'
import getKey from '@/utils/keyGenerator';

export type Event = {
    jobTitle: string;
    location: string;
    blurb: string;
    points: string[];
    duration: string;
    techStack: IconType[];
};

type EventProps = {
    event: Event;
    eventIdx: number;
    eventCount: number;
};

export function Experience({ event, eventIdx, eventCount }: EventProps) {
    return (
		<div className='relative pb-8'>
			{eventIdx !== eventCount ? (
				<span
					className='absolute top-4 hidden left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-slate-800 md:block'
					aria-hidden='true'
				/>
			) : null}
			<div className='relative flex space-x-3'>
				<div className='flex min-w-0 flex-1 justify-between space-x-4'>
					<div className='space-y-3 w-full'>
						<div className='overflow-hidden rounded-md bg-slate-50 dark:bg-neutral-900 dark:outline-1 dark:outline-slate-800 dark:outline px-6 py-4 shadow dark:shadow-gray-600 max-w-3xl'>
							<h1 className='font-medium font-montserrat text-xl'>
								{event.jobTitle},{' '}
								<span className='font-bold text-teal-700 dark:text-amber-400'>
									{event.location}
								</span>
							</h1>
							<h1 className='text-teal-600 dark:text-amber-400 font-bold text-l'>
								{event.duration}
							</h1>
							<p className='font-inter text-base'>
								{event.blurb}
							</p>
							<ul className='list-disc pl-5 mt-4 md:mt-2'>
								{event.points.map((point) => (
									<li key={getKey()} className='mb-2 md:mb-1'>
										{point}
									</li>
								))}
							</ul>
							<h1 className='font-montserrat font-semibold text-xl mb-1'>
								Tech Stack
							</h1>
							<div className='flex space-x-4 mb-4'>
								{event.techStack.map((icon) => (
									<div
										key={getKey()}
										className='relative group'>
										{Icons[icon]({
											className: 'w-6 h-6',
										})}
										<div className='opacity-0 group-hover:opacity-100 absolute inset-x-0 top-full text-center text-xs transition-opacity duration-100 ease-in-out'>
											{icon}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}