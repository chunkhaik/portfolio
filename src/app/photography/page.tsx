import GalleryGrid from '@/components/grid-gallery';
import { PhotographyIntro } from '@/components/photography-introduction';
import { SearchResult } from '@/components/photography-cloudinary';
import cloudinary from 'cloudinary';
import { eventsList } from './photography';
import { shuffleArray } from '@/utils/array-shuffle';
import { Suspense } from 'react';
import Loading from '../loading';

export default async function GalleryPage({
	searchParams: { search },
}: {
	searchParams: {
		search: string;
	};
}) {

	let results: SearchResult[] = [];
	const IS_MAIN_ALBUM = true;

	for (const event of eventsList) {
		const subfolder = event.cloudinaryFolder;
		const folderExpression = ` AND folder:portfolio-website/${subfolder}`;

		const eventResults = (await cloudinary.v2.search
			.expression(
				`resource_type:image${
					search ? ` AND tags=${search}` : ''
				}${folderExpression}`
			)
			.sort_by('created_at', 'desc')
			.with_field('tags')
			.max_results(40)
			.execute()) as { resources: SearchResult[] };
		
			eventResults.resources.forEach((resource) => {
				resource.album_name = event.eventTitle;
				resource.cloudinary_folder = event.cloudinaryFolder;
			});

		results = results.concat(eventResults.resources);
	}

	return (
		<div className='container max-w-4xl py-8 lg:py-10'>
			<div className='flex flex-col'>
				<div className='mb-6'>
					<PhotographyIntro />
				</div>
				<Suspense fallback={<Loading title='Photography' />}>
					<GalleryGrid
						images={shuffleArray(results)}
						isMainAlbum={IS_MAIN_ALBUM}
					/>
				</Suspense>
			</div>
		</div>
	);
}
