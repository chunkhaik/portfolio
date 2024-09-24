'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';

export type SearchResult = {
	public_id: string;
	tags: string[];
	url: string;
};


export function CloudinaryImage(
	props: {
		imageData: SearchResult;
		onUnheart?: (unheartedResource: SearchResult) => void;
	} & Omit<CldImageProps, 'src'>
) {
	const { imageData, onUnheart, ...restProps } = props;

	return (
		<div className='relative'>
			<CldImage {...restProps} src={imageData.public_id} />
		</div>
	);
}