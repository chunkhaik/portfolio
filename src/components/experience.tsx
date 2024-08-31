import { Icons, IconType } from '@/components/icons'
import getKey from '@/utils/keyGenerator';
import ReactMarkdown from 'react-markdown';

export type Event = {
    jobTitle: string;
    location: string;
    duration: string;
	summary: string;
    blurb: string;
    points: string[];
    techStack: IconType[];
};

type EventProps = {
    event: Event;
    eventIdx: number;
    eventCount: number;
	isConcise: boolean;
};

export function Experience({ event, eventIdx, eventCount, isConcise }: EventProps) {
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
								<span className='font-bold text-amber-600 dark:text-amber-400'>
									{event.location}
								</span>
							</h1>
							<h1 className='text-amber-600 dark:text-amber-400 font-bold text-l'>
								{event.duration}
							</h1>
							{isConcise ? (
								<p className='mt-4'>
									{event.summary}
								</p>
							) : null}
							{isConcise ? null : (
								<div>
									<p className='font-inter text-base'>
										{event.blurb}
									</p>
									<ul className='list-disc pl-5 mt-4 md:mt-2'>
										{event.points.map((point) => (
											<li
												key={getKey()}
												className='mb-2 md:mb-1'>
												<ReactMarkdown>{point}</ReactMarkdown>
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
													className: 'w-8 h-8',
												})}
												<div className='opacity-0 group-hover:opacity-100 absolute inset-x-0 top-full text-center text-xs transition-opacity duration-100 ease-in-out'>
													{icon}
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}