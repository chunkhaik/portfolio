import GalleryGrid from '@/components/grid-gallery';
import { PhotographyIntro } from '@/components/photography-introduction';
import { SearchResult } from '@/components/photography-cloudinary';
import cloudinary from 'cloudinary';
import { eventsList } from '../photography';
import { redirect } from 'next/navigation';

interface PhotorgraphyPageProps {
	params: {
		slug: string[];
	};
	searchParams: {
		tag?: string;
	};
}

async function getImagesFromParams(folderPath: string, search?: string) {
	const expression = `resource_type:image AND folder:portfolio-website/${folderPath}${
		search ? ` AND tags=${search}` : ''
	}`;
	const response = await cloudinary.v2.search
		.expression(expression)
		.max_results(40)
		.execute();

	return response.resources as SearchResult[];
}

export default async function Page({ params, searchParams }: PhotorgraphyPageProps) {
	const eventTitle = params.slug.join('/'); 
	const eventTag = searchParams?.tag || '';
	const projectDetails = eventsList.find(
		(event) => event.eventTitle === eventTitle || event.cloudinaryFolder === eventTitle
	);
	if (!projectDetails) {
		redirect('/photography');
	}

	const images = await getImagesFromParams(projectDetails.cloudinaryFolder, eventTag);

	return (
		<div className='container max-w-4xl py-8 lg:py-10'>
			<div className='flex flex-col'>
				<PhotographyIntro projectDetails={projectDetails} />
				<GalleryGrid images={images} />
			</div>
		</div>
	);
}