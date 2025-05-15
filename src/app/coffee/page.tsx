import { Beans } from '@/components/coffee-beans';
import { CoffeeBean } from '@/types/coffee'
import { CoffeeIntro } from './sections/introduction';
import { BrewingNotes } from './sections/brewing';
import getKey from '@/utils/keyGenerator';
import { Suspense } from 'react';
import coffeeBeans from './data.json' assert { type: 'json' };

export default async function Coffee() {
	const coffeeBeansList = coffeeBeans as CoffeeBean[];

	return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<CoffeeIntro />
			<BrewingNotes />
			<div className='flex-1 my-4'>
				<h2 className='inline-block text-slate-600 dark:text-slate-300 font-black text-2xl sm:text-2xl lg:text-3xl'>
					Coffee Beans
				</h2>
				<br />
				<div className='mt-4'>
					{coffeeBeansList.map(
						(beans: CoffeeBean, coffeeBeansIdx: number) => (
							<Beans
								key={getKey()}
								coffeeBean={beans}
								coffeeBeanIdx={coffeeBeansIdx}
								coffeeBeanCount={coffeeBeansList.length - 1}
							/>
						)
					)}
				</div>
			</div>
		</div>
	);
}
