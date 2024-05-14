import getKey from '@/utils/keyGenerator';
import { AccordionCustom } from '@/components/accordion';

type BrewSettings = {
	Method: string;
	Ratio?: string;
	'Brew Time': string;
	'Grind Size': string;
	'Water Temp': string;
    Review: string;
};

type Details = {
	Varietal: string;
	Origin: string;
	Roaster: string;
	Process: string;
	Roast: string;
	Altitude: string;
};

type Cafe = {
	Name: string;
	Price: string;
};

type Taste = {
	Aroma: string;
	Acidity: string;
	Body: string;
	'Tasting Notes': string;
};

export type CoffeeBean = {
	'Blend Name': string;
	Details: Details
	Cafe?: Cafe;
	Taste: Taste
	Brew?: BrewSettings[];
	Comments: string;
	Rating: 0 | 1 | 2 | 3 | 4 | 5;
};

type CoffeeBeanProps = {
	coffeeBean: CoffeeBean;
	coffeeBeanIdx: number;
	coffeeBeanCount: number;
};

export function Beans({
	coffeeBean,
	coffeeBeanIdx,
	coffeeBeanCount,
}: CoffeeBeanProps) {
	return (
		<div className='coffee-details relative pb-8'>
			{coffeeBeanIdx !== coffeeBeanCount ? (
				<span
					className='absolute top-4 hidden left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-slate-800 md:block'
					aria-hidden='true'
				/>
			) : null}
			<div className='relative flex space-x-3'>
				<div className='flex min-w-0 flex-1 justify-between space-x-4'>
					<div className='space-y-3 w-full'>
						<div className='overflow-hidden rounded-md bg-slate-50 dark:bg-zinc-900 dark:outline-1 dark:outline-slate-800 dark:outline  px-6 py-4 shadow max-w-3xl'>
							<h1 className='font-medium font-montserrat text-xl'>
								{coffeeBean.Details.Varietal == '-' ? (
									<div>
										House Blend, {coffeeBean['Blend Name']}
									</div>
								) : (
									coffeeBean.Details.Varietal
								)}{' '}
							</h1>

							<div className='font-light italic mt-2'>
								&quot;{coffeeBean.Comments}&quot;,{' '}
								{coffeeBean.Rating >= 3 ? (
									<span className='text-green-700 font-bold'>
										{coffeeBean.Rating}/5
									</span>
								) : (
									<span className='text-red-700 font-bold'>
										{coffeeBean.Rating}/5
									</span>
								)}
							</div>

							<div className=''>
								{Object.entries(coffeeBean.Taste).map(
									([key, value]) => {
										if (value !== '-') {
											return (
												<div key={getKey()}>
													<span className='font-semibold'>
														{key} :{' '}
													</span>{' '}
													{value}
												</div>
											);
										}
									}
								)}
							</div>

							<AccordionCustom
								title='Bean Details'
								content={
									<div className=''>
										{Object.entries(coffeeBean.Details).map(
											([key, value]) => {
												if (value !== '-') {
													return (
														<div key={getKey()}>
															<span className='font-semibold'>
																{key} :{' '}
															</span>{' '}
															{value}
														</div>
													);
												}
											}
										)}
									</div>
								}
							/>

							<AccordionCustom
								title='Cafe Details'
								content={
									<div className='mt-2'>
										{coffeeBean.Cafe &&
											Object.entries(coffeeBean.Cafe).map(
												([key, value]) => {
													if (value !== '') {
														return (
															<div key={getKey()}>
																<span className='font-semibold'>
																	{key} :{' '}
																</span>{' '}
																{value}
															</div>
														);
													}
												}
											)}
									</div>
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
