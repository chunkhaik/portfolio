'use client';

import {
	CloudinaryImage,
	SearchResult,
} from '@/components/photography/cloudinary-image';

export default function GalleryGrid({
	images,
	isMainAlbum,
}: {
	images: SearchResult[];
	isMainAlbum: boolean;
}) {
	const gridClass = isMainAlbum
		? 'grid gap-2 grid-cols-2 lg:grid-cols-3'
		: 'grid gap-2 grid-cols-1 lg:grid-cols-2';

	return (
		<div className={gridClass}>
			{images.map((image) => (
				<CloudinaryImage
					key={image.public_id}
					imageData={image}
					width='400'
					height='300'
					alt='an image of something'
					isMainAlbum={isMainAlbum}
				/>
			))}
		</div>
	);
}
