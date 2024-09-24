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
			'A festival celebrated by the Tamil Hindu community in Malaysia, images taken throught 2017-2019.',
		cloudinaryFolder: 'thaipusam',
	},
	{
		eventTitle: 'Taiwan',
		eventDescription: 'Land of 卤肉饭 and bubble teas.',
		cloudinaryFolder: 'taiwan'
	},
	{
		eventTitle: 'Birds',
		eventDescription: '"Birds suspended in serene grace, captured in time."', 
		cloudinaryFolder: 'birds',
	},
	{
		eventTitle: 'Unnamed',
		eventDescription: 'Random, yet weirdly satisfying shots.',
		cloudinaryFolder: 'misc',
	},
];