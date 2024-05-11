type CoffeeBeanProps = {
	coffeeBean: {
		Comments: string;
		Rating: number;
	};
};

export function CoffeeBeanReview({ coffeeBean }: CoffeeBeanProps) {
	const { Comments, Rating } = coffeeBean;

	const fullStars = Array(Rating).fill(0);
	const emptyStars = Array(5 - Rating).fill(0);

	return (
		<div className='max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg'>
			<div className='mb-4'>
				<h2 className='text-xl font-semibold'>Comments</h2>
				<p className='text-gray-600'>{Comments}</p>
			</div>
			<div className='mb-4'>
				<h2 className='text-xl font-semibold'>Rating</h2>
				<div className='flex'>
					{fullStars.map((_, index) => (
						<svg
							key={index}
							className='w-6 h-6 text-yellow-500'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<path d='M12 .587l3.668 7.431 8.332 1.21-6.001 5.849 1.42 8.283-7.419-3.896-7.419 3.896 1.42-8.283-6.001-5.849 8.332-1.21L12 .587z' />
						</svg>
					))}
					{emptyStars.map((_, index) => (
						<svg
							key={index + 5}
							className='w-6 h-6 text-gray-300'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<path d='M12 .587l3.668 7.431 8.332 1.21-6.001 5.849 1.42 8.283-7.419-3.896-7.419 3.896 1.42-8.283-6.001-5.849 8.332-1.21L12 .587z' />
						</svg>
					))}
				</div>
			</div>
		</div>
	);
};