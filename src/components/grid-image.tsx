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

	const columns = isMainAlbum ? 4 : 2;
	const gridClass = 'grid-cols-' + columns;

	function getColumns(colIndex: number) {
		return images.filter((_, idx) => idx % columns === colIndex);
	}

	console.log(columns, gridClass);

	return (
		<div className={cn(
			'grid gap-2', gridClass
		)}>
			{Array.from({ length: columns }).map((_, colIndex) => (
				<div key={colIndex} className='flex flex-col gap-2'>
					{getColumns(colIndex).map(getImage)}
				</div>
			))}
		</div>
	);
}
