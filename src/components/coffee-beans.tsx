import getKey from '@/utils/keyGenerator';
import { BeansCard } from '@/components/card-beans';
import { CoffeeBeanProps } from '@/types/coffee'

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
							<h1 className='font-medium font-montserrat text-md sm:text-xl'>
								{coffeeBean['Blend Name'] !== '-' ? (
									<>House Blend, {coffeeBean['Blend Name']}</>
								) : (
									coffeeBean.Details.Varietal
								)}
							</h1>

							{/* Comments + Rating */}
							<div className='font-light italic mt-2 text-sm sm:text-md lg:text-base'>
								{coffeeBean.Comments},{' '}
								<span
									className={`font-bold ${
										coffeeBean.Rating >= 3
											? 'text-green-700'
											: 'text-red-700'
									}`}>
									{coffeeBean.Rating}/5
								</span>
							</div>

							{/* Coffee Taste */}
							<div className='text-sm sm:text-md lg:text-base'>
								{Object.entries(coffeeBean.Taste)
									.filter(([_, details]) => details !== '-')
									.map(([label, details]) => (
										<div key={label}>
											<span className='font-semibold'>
												{label}:
											</span>{' '}
											{details}
										</div>
									))}
							</div>

							{/* Coffee Bean Details */}
							<BeansCard
								title='Bean Details'
								content={
									<>
										{Object.entries(coffeeBean.Details)
											.filter(
												([_, details]) =>
													details !== '-'
											)
											.map(([title, details]) => (
												<div key={getKey()}>
													<span className='font-semibold'>
														{title}:{' '}
													</span>
													{details}
												</div>
											))}
									</>
								}
							/>

							{/* Cafe Details */}
							<BeansCard
								title='Cafe Details'
								content={
									coffeeBean.Cafe && (
										<div className='mt-2'>
											{Object.entries(coffeeBean.Cafe)
												.filter(
													([_, details]) =>
														details !== ''
												)
												.map(([title, details]) => (
													<div key={getKey()}>
														<span className='font-semibold'>
															{title}:{' '}
														</span>
														{details}
													</div>
												))}
										</div>
									)
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
