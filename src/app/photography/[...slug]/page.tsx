import GalleryGrid from '@/components/photography/grid-gallery';
import { PhotographyIntro } from '@/components/photography/introduction';
import { CloudinaryNotice } from '@/components/photography/cloudinary-notice';
import { SearchResult } from '@/components/photography/cloudinary-image';
import cloudinary from 'cloudinary';
import { eventsList } from '../photography';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotorgraphyPageProps {
	params: {
		slug: string[];
	};
	searchParams?: {
		tag?: string;
	};
}

export function generateStaticParams() {
	if (process.env.STATIC_EXPORT !== 'true') return [];

	return eventsList.map((event) => ({ slug: [event.cloudinaryFolder] }));
}

async function getImagesFromParams(folderPath: string, tag?: string) {
	const tagExpression = process.env.STATIC_EXPORT === 'true' || !tag ? '' : ` AND tags=${tag}`;
	const expression = `resource_type:image AND folder:portfolio-website/${folderPath}${tagExpression}`;
	const response = await cloudinary.v2.search
		.expression(expression)
		.max_results(40)
		.execute();

	return response.resources as SearchResult[];
}

export default async function Page({ params, searchParams }: PhotorgraphyPageProps) {
	const eventTitle = params.slug.join('/');
	const eventTag = process.env.STATIC_EXPORT === 'true' ? undefined : searchParams?.tag;
	const projectDetails = eventsList.find(
		(event) => event.eventTitle === eventTitle || event.cloudinaryFolder === eventTitle
	);
	if (!projectDetails) {
		redirect('/photography');
	}

	if (!process.env.CLOUDINARY_CLOUD_NAME && !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
		return <CloudinaryNotice projectDetails={projectDetails} />;
	}

	const images = await getImagesFromParams(projectDetails.cloudinaryFolder, eventTag);
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