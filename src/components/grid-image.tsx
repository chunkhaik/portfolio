'use client';

import { SearchResult } from '@/components/photography-cloudinary';
import { ReactNode } from 'react';

const MAX_COLUMNS = 4;

export function ImageGrid({
	images,
	getImage,
}: {
	images: SearchResult[];
	getImage: (imageData: SearchResult) => ReactNode;
}) {
	function getColumns(colIndex: number) {
		return images.filter((_, idx) => idx % MAX_COLUMNS === colIndex);
	}

	return (
		<div className='grid grid-cols-4 gap-2'>
			{[0, 1, 2, 3].map((colIndex) => (
				<div key={colIndex} className='flex flex-col gap-2'>
					{getColumns(colIndex).map(getImage)}
				</div>
			))}
		</div>
	);
}
