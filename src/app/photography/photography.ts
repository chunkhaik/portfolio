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
			'A Hindu festival celebrated by the Tamil community in Malaysia, images taken from 2017-2019.',
		cloudinaryFolder: 'thaipusam',
	},
	{
		eventTitle: 'Taiwan',
		eventDescription: 'Land of 卤肉饭 and bubble teas.',
		cloudinaryFolder: 'taiwan'
	},
	{
		eventTitle: 'Birds',
		eventDescription: '"Birds Suspended in Serene Grace, Captured in Time."', 
		cloudinaryFolder: 'birds',
	},
	{
		eventTitle: 'Unnamed',
		eventDescription: 'Random, yet weirdly satisfying shots.',
		cloudinaryFolder: 'misc',
	},
];