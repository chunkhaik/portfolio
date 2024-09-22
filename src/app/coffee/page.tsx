import { Beans, CoffeeBean } from '@/components/section-coffee-beans';
import { BrewingNotes } from '@/components/section-coffee-brewing';
import getKey from "@/utils/keyGenerator";
import { createClient } from '@/utils/supabase/server';

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
				<div className='flex-1 space-y-3'>
					<h1 className='inline-block text-slate-600 font-black text-3xl sm:text-4xl lg:text-5xl'>
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
			<div className='flex-1 my-4'>
				<h2 className='inline-block text-slate-600 font-black text-xl sm:text-2xl lg:text-3xl'>
					Brewing Notes
				</h2>
				<br />
				<div className='mb-4 italic text-xs sm:text-sm lg:text-md text-muted-foreground'>
					<span className='text-green-600'>Green</span> for settings I
					vary through trial-and-error,{' '}
					<span className='text-red-600'>Red</span> for settings I
					keep generally constant.
				</div>
				<BrewingNotes />
			</div>
			<hr className='mt-8' />
			<div className='flex-1 my-4'>
				<h2 className='inline-block text-slate-600 font-black text-2xl sm:text-2xl lg:text-3xl'>
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