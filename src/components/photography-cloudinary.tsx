'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';
import Link from 'next/link';

export type SearchResult = {
	album_name: string;
	cloudinary_folder: string;
	public_id: string;
	tags: string[];
	url: string;
};


export function CloudinaryImage(
	props: {
		imageData: SearchResult;
		onUnheart?: (unheartedResource: SearchResult) => void;
		isMainAlbum: boolean;
	} & Omit<CldImageProps, 'src'>
) {
	const { imageData, onUnheart, isMainAlbum, ...restProps } = props;
	const albumName = imageData.album_name;
	const albumFolder = `/photography/${imageData.cloudinary_folder}`;

	return (
		<div className='relative group'>
			{isMainAlbum? (
				<Link href={`${albumFolder}`}>
					<div className='relative cursor-pointer'>
						<CldImage {...restProps} src={imageData.public_id} />
						<div className='absolute inset-0 bg-white dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
							<p className='text-slate-500 dark:text-slate-300 text-lg font-bold'>
								{albumName}
							</p>
						</div>
					</div>
				</Link>
			) : (
				// No link or overlay for non-main albums
				<CldImage {...restProps} src={imageData.public_id} />
			)}
		</div>
	);
}