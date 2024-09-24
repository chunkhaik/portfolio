import { Beans, CoffeeBean } from '@/components/coffee-beans';
import { CoffeeIntro } from '@/components/coffee-introduction';
import { BrewingNotes } from '@/components/coffee-brewing';
import getKey from '@/utils/keyGenerator';
import { createClient } from '@/utils/supabase/server';
import { Suspense } from 'react';
import Loading from '../loading';

export default async function Coffee() {
	const supabase = createClient();
	const coffeeBeans = await supabase
		.from('coffee_beans')
		.select()
		.then((data) => {
			let coffeeBeansList = JSON.parse(JSON.stringify(data.data));
			coffeeBeansList = coffeeBeansList.map(
				(coffeeBean: { coffee_bean: any }) => coffeeBean.coffee_bean
			);
			return coffeeBeansList;
		});

	return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<CoffeeIntro />
			<BrewingNotes />
			<div className='flex-1 my-4'>
				<h2 className='inline-block text-slate-600 dark:text-slate-300 font-black text-2xl sm:text-2xl lg:text-3xl'>
					Coffee Beans
				</h2>
				<br />
				<Suspense fallback={<Loading title='Coffee' />}>
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
				</Suspense>
			</div>
		</div>
	);
}
