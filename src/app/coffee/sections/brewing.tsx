export function BrewingNotes(){
	return (
		<div className='flex-1 my-4'>
			<h2 className='inline-block text-slate-600 dark:text-slate-300 font-black text-xl sm:text-2xl lg:text-3xl'>
				Brewing Notes
			</h2>
			<br />
			<div className='mb-4 italic text-xs sm:text-sm lg:text-md text-muted-foreground'>
				<span className='text-green-600'>Green</span> for settings I
				vary through trial-and-error,{' '}
				<span className='text-red-600'>Red</span> for settings I keep
				generally constant.
			</div>
			<div className='flex flex-col gap-3 text-sm sm:text-md lg:text-base'>
				<div>
					<span className='font-bold text-green-600'>
						Grind Size :
					</span>{' '}
					Easiest method of controlling extraction, typically start
					with 2.0 for percolation brews and 2.4 for immersion brews
					on the{' '}
					<a
						href='https://madebyknock.com/products/aergrind'
						className='text-blue-500'>
						Aergrind by Knock
					</a>{' '}
					as a baseline, and adjust accordingly.
				</div>
				<div>
					<span className='font-bold text-green-600'>
						Water Temperature :
					</span>{' '}
					I typically start at 90-95°C for light to medium roasts for
					percolation brew, and around 85°C for immersions as
					baselines, and adjust accordingly.
				</div>
				<div>
					<span className='font-bold text-green-600'>
						Coffee Dose :
					</span>{' '}
					Generally 12-18g, but a fixed 12g when brewing with the
					Aeropress.
				</div>
				<div>
					<span className='font-bold text-green-600'>
						Grind Size :
					</span>{' '}
					I start at 2.0 for percolation brews and 2.4 for immersion
					brews on the Aergrind by Knock as a baseline, and adjust
					accordingly.
				</div>
				<div>
					<span className='font-bold text-green-600'>
						Agitation :
					</span>{' '}
					Yet to refine, will work on it.
				</div>
				<div>
					<span className='font-bold text-red-600'>
						Coffee:Water Ratio :
					</span>{' '}
					1:16 ratio for percolation brews and 1:17.5 for immersions.
				</div>
			</div>
			<hr className='mt-8' />
		</div>
	);
}
