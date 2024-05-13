// import { coffeeBeans } from './coffee-beans';
import { Beans, CoffeeBean } from '@/components/coffee-beans';
import getKey from "@/utils/keyGenerator";
import { createClient } from '@/utils/supabase/server';
// import { getCoffeeBeans } from '@/utils/coffee-beans';

export default async function Coffee() {

	const supabase = createClient();
	const coffeeBeans = await supabase.from('coffee_beans').select().then( data => {
		let coffeeBeansList = JSON.parse(JSON.stringify(data.data));
		coffeeBeansList = coffeeBeansList.map(
			(coffeeBean: { coffee_bean: any }) =>
				coffeeBean.coffee_bean
		);
		return coffeeBeansList
	})

    return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between'>
				<div className='flex-1 space-y-4'>
					<h1 className='inline-block font-black text-4xl lg:text-5xl'>
						Coffee
					</h1>
					<p className='text-xl text-muted-foreground'>
						Random assortment of all things coffee.
					</p>
					<p className='font-light'>
						Inspired to use this blog-style to keep track of my
						coffee experiences by a good friend of mine, do check
						out him out{' '}
						<a
							href='https://kelvinou.com/coffee'
							className='text-blue-800'>
							here.
						</a>
					</p>
				</div>
			</div>
			<hr className='mt-8' />
			<div className='flex-1 my-4'>
				<h2 className='inline-block font-black text-2xl lg:text-3xl'>
					Brewing Notes
				</h2>
				<br />
				<div className='mb-4 font-extralight italic text-sm'>
					<span className='text-green-600'>Green</span> for settings I
					vary through trial-and-error,{' '}
					<span className='text-red-600'>Red</span> for settings I
					keep generally constant.
				</div>
				<span className='font-bold text-green-600'>Grind Size :</span>{' '}
				Easiest method of controlling extraction, typically start with
				2.0 for percolation brews and 2.4 for immersion brews on the{' '}
				<a
					href='https://madebyknock.com/products/aergrind'
					className='text-blue-800'>
					Aergrind by Knock
				</a>{' '}
				as a baseline, and adjust accordingly.
				<br />
				<span className='font-bold text-green-600'>
					Water Temperature :
				</span>{' '}
				I typically start at 90-95°C for light to medium roasts for
				percolation brew, and around 85°C for immersions as baselines,
				and adjust accordingly.
				<br />
				<span className='font-bold text-green-600'>
					Coffee Dose :
				</span>{' '}
				Generally 12-18g, but a fixed 12g when brewing with the
				Aeropress.
				<br />
				<span className='font-bold text-green-600'>Grind Size :</span> I
				start at 2.0 for percolation brews and 2.4 for immersion brews
				on the Aergrind by Knock as a baseline, and adjust accordingly.
				<br />
				<span className='font-bold text-green-600'>
					Agitation :
				</span>{' '}
				Yet to refine, will work on it.
				<br />
				<span className='font-bold text-red-600'>
					Coffee:Water Ratio :
				</span>{' '}
				1:16 ratio for percolation brews and 1:17.5 for immersions.
				<br />
			</div>
			<hr className='mt-8' />
			<div className='flex-1 my-4'>
				<h2 className='inline-block font-black text-2xl lg:text-3xl'>
					Coffee Beans
				</h2>
				<br />
				<div className='mt-4'>
					{coffeeBeans.map(
						(beans: CoffeeBean, coffeeBeansIdx: number) => (
							<Beans
								key={getKey()}
								coffeeBean={beans}
								coffeeBeanIdx={coffeeBeansIdx}
								coffeeBeanCount={coffeeBeans.length - 1}
							/>
						)
					)}
				</div>
			</div>
		</div>
	);
}