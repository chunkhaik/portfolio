'use client';

import { SearchResult } from '@/components/photography-cloudinary';
import { ReactNode } from 'react';

export function ImageGrid({
	images,
	getImage,
	isMainAlbum,
}: {
	images: SearchResult[];
	getImage: (imageData: SearchResult) => ReactNode;
	isMainAlbum: boolean;
}) {

	function getColumns(colIndex: number) {
		return images.filter((_, idx) => idx % columns === colIndex);
	}
	const columns = isMainAlbum ? 4 : 2;

	return (
		<div className={`grid grid-cols-${columns} gap-2`}>
			{Array.from({ length: columns }).map((_, colIndex) => (
				<div key={colIndex} className='flex flex-col gap-2'>
					{getColumns(colIndex).map(getImage)}
				</div>
			))}
		</div>
	);
}
