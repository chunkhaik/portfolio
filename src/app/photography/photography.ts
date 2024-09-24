export type PhotographyEvent = {
	eventTitle: string;
	eventDescription: string;
	cloudinaryFolder: string;
};

export const eventsList: PhotographyEvent[] = [
    // {
	// 	eventTitle:
	// 	eventDescription:
	// 	cloudinaryFolder:
	// },
	{
		eventTitle: 'Thaipusam',
		eventDescription:
			'A Hindu festival celebrated by the Tamil community in Singapore.',
		cloudinaryFolder: 'thaipusam',
	},
	{
		eventTitle: 'Taiwan',
		eventDescription: 'Beauty of TW',
		cloudinaryFolder: 'taiwan'
	},
];