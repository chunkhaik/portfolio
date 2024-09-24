'use client';

import { SearchResult } from '@/components/photography-cloudinary';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function ImageGrid({
	images,
	getImage,
	isMainAlbum,
}: {
	images: SearchResult[];
	getImage: (imageData: SearchResult) => ReactNode;
	isMainAlbum: boolean;
}) {

    const columns = isMainAlbum	
				? window.innerWidth >= 768 ? 3 : 2
				: window.innerWidth >= 768 ? 2 : 1;
    const gridClass = isMainAlbum
		? 'grid gap-2 grid-cols-2 lg:grid-cols-3'
		: 'grid gap-2 grid-cols-1 lg:grid-cols-2';

	function getColumns(colIndex: number) {
		return images.filter((_, idx) => idx % columns === colIndex);
	}

	return (
		<div className={gridClass}>
			{Array.from({ length: columns }).map((_, colIndex) => (
				<div key={colIndex} className='flex flex-col gap-2'>
					{getColumns(colIndex).map(getImage)}
				</div>
			))}
		</div>
	);
}
