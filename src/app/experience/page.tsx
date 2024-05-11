import { Event, Experience } from "@/components/experience";
import { experience } from './experience';
import getKey from "@/utils/keyGenerator";

export default function HomePage() {
	// return (
	// 	<div className='container max-w-4xl py-6 lg:py-10'>
	// 		<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between'>
	// 			<div className='flex-1 space-y-4'>
	// 				<h1 className='inline-block font-black text-4xl lg:text-5xl'>
	// 					Experience
	// 				</h1>
	// 				<hr className='my-8' />
					// <div>
					// 	{experience.map((event: Event, eventIdx: number) => (
					// 		<Experience
					// 			key={getKey()}
					// 			event={event}
					// 			eventIdx={eventIdx}
					// 			eventCount={experience.length - 1}
					// 		/>
					// 	))}
					// </div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
    return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between'>
				<div className='flex-1 space-y-4'>
					<h1 className='inline-block font-black text-4xl lg:text-5xl'>
						Experience
					</h1>
					{/* <p className='text-xl text-muted-foreground'>
						A collection of my thoughts and ideas. 💡
					</p> */}
				</div>
			</div>
			<hr className='mt-8' />
			<div className="mt-4">
				{experience.map((event: Event, eventIdx: number) => (
					<Experience
						key={getKey()}
						event={event}
						eventIdx={eventIdx}
						eventCount={experience.length - 1}
					/>
				))}
			</div>
		</div>
	);
}
