import GalleryGrid from '@/components/grid-gallery';
import { PhotographyIntro } from '@/components/photography-introduction';
import { SearchResult } from '@/components/photography-cloudinary';
import cloudinary from 'cloudinary';
import { eventsList } from './photography';

export default async function GalleryPage({
	searchParams: { search },
}: {
	searchParams: {
		search: string;
	};
}) {

	let results: SearchResult[] = [];
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
				<PhotographyIntro />
				<GalleryGrid images={results} />{' '}
			</div>
		</div>
	);
}
