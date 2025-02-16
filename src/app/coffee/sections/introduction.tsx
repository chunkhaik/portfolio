export function CoffeeIntro() {
	return (
		<div>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between'>
				<div className='flex-1 space-y-3'>
					<h1 className='inline-block text-slate-600 dark:text-slate-300 font-black text-3xl sm:text-4xl lg:text-5xl'>
						Coffee
					</h1>
					<div className='flex flex-col gap-1'>
						<p className='text-md sm:text-xl'>
							Random assortment of all things coffee.
						</p>
						<p className='text-xs sm:text-sm italic text-muted-foreground'>
							Inspired to use this blog-style to keep track of my
							coffee experiences by a good friend of mine, do
							check out him out{' '}
							<a
								href='https://kelvinou.com/coffee'
								className='text-blue-500'>
								here.
							</a>
						</p>
					</div>
				</div>
			</div>
			<hr className='mt-6' />
		</div>
	);
}
