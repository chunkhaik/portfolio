import {LoadingSpinner } from '@/components/ui/loading-spinner'

export default function Loading({ title }: { title: string }) {
	
	console.log(title)

	return (
		<div className='container max-w-4xl py-8 lg:py-10'>
			<div className='flex flex-col justify-center items-center min-h-[150px]'>
				<div className='flex justify-center items-center'>
					<LoadingSpinner />
				</div>
			</div>
		</div>
	);
}