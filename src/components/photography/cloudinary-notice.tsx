import { PhotographyIntro } from '@/components/photography/introduction';
import { PhotographyEvent } from '@/app/photography/photography';

export function CloudinaryNotice({
	projectDetails,
}: {
	projectDetails?: PhotographyEvent;
}) {
	return (
		<div className='container max-w-4xl py-8 lg:py-10'>
			<div className='flex flex-col'>
				<div className='mb-6'>
					<PhotographyIntro projectDetails={projectDetails} />
				</div>
				<p className='text-sm text-muted-foreground'>
					Photos unavailable — Cloudinary is not configured. Add{' '}
					<code>CLOUDINARY_URL</code> and{' '}
					<code>NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME</code> to{' '}
					<code>.env.local</code>, then restart the dev server.
				</p>
			</div>
		</div>
	);
}
