import GalleryGrid from '@/components/photography/grid-gallery';
import { PhotographyIntro } from '@/components/photography/introduction';
import { CloudinaryNotice } from '@/components/photography/cloudinary-notice';
import { SearchResult } from '@/components/photography/cloudinary-image';
import cloudinary from 'cloudinary';
import { eventsList } from '../photography';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotorgraphyPageProps {
	params: {
		slug: string[];
	};
}

export function generateStaticParams() {
	// one page per event, both by title and by folder slug
	return eventsList.flatMap((event) => [
		{ slug: [event.cloudinaryFolder] },
		{ slug: event.eventTitle.split('/') },
	]);
}

async function getImagesFromParams(folderPath: string) {
	const expression = `resource_type:image AND folder:portfolio-website/${folderPath}`;
	const response = await cloudinary.v2.search
		.expression(expression)
		.max_results(40)
		.execute();

	return response.resources as SearchResult[];
}

export default async function Page({ params }: PhotorgraphyPageProps) {
	const eventTitle = params.slug.join('/');
	const projectDetails = eventsList.find(
		(event) => event.eventTitle === eventTitle || event.cloudinaryFolder === eventTitle
	);
	if (!projectDetails) {
		notFound();
	}

	if (!process.env.CLOUDINARY_CLOUD_NAME && !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
		return <CloudinaryNotice projectDetails={projectDetails} />;
	}

	const images = await getImagesFromParams(projectDetails.cloudinaryFolder);
	const IS_MAIN_ALBUM = false

	return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex flex-col'>
				<div className='flex items-center justify-left gap-6 b-4 h-full mb-6'>
					
					<Link href='/photography'>
						<Button
							className='bg-transparent border-transparent'
							variant='outline'
							size='icon'>
							<ChevronLeft className='h-4 w-4' />
						</Button>
					</Link>
					
					<PhotographyIntro projectDetails={projectDetails} />
				</div>
				<GalleryGrid images={images} isMainAlbum={IS_MAIN_ALBUM} />
			</div>
		</div>
	);
}