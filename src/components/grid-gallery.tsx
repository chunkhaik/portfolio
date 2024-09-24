'use client';

import { ImageGrid } from '@/components/grid-image';
import { SearchResult, CloudinaryImage } from '@/components/photography-cloudinary';

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
	return (
		<ImageGrid
			images={images}
			getImage={(imageData: SearchResult) => {
				return (
					<CloudinaryImage
						key={imageData.public_id}
						imageData={imageData}
						width='400'
						height='300'
						alt='an image of something'
					/>
				);
			}}
		/>
	);
}
