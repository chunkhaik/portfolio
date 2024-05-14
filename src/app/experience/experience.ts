import { IconType } from "@/components/icons";
import { Event } from "@/components/experience";

export const experience: Event[] = [
	// {
	// 	jobTitle:
	// 	location:
	// 	blurb:
	// 	points: [],
	// 	duration:
	// 	techStack: [

	// 	],
	// },
	{
		jobTitle: 'Backend Engineer Intern',
		location: 'TikTok',
		blurb: "TikTok is the world's leading destination for short-form mobile videos.",
		points: ['Joining the Tiktok Global Live team this summer.'],
		duration: 'May 2024 - Aug 2024',
		techStack: [IconType.python, IconType.go, IconType.mysql],
	},
	{
		jobTitle: 'Software Engineer Intern',
		location: 'Scooterson',
		blurb: 'Scooterson is a Singapore based startup which builds smart electric scooters.',
		points: [
			'Worked on the migration to a microservices-based Django backend, optimizing scalability and enhancing system flexibility.',
			'Developed a globally accessible database with secure REST APIs, resulting in rapid and secure data retrieval.',
		],
		duration: 'May 2023 - Aug 2023',
		techStack: [
			IconType.python,
			IconType.typescript,
			IconType.django,
			IconType.express,
			IconType.mysql,
		],
	},
	{
		jobTitle: 'Undergraduate Teaching Assistant',
		location: 'NUS School of Computing',
		blurb: '',
		points: [
			'Taught classes for Data Structures and Algorithms and Operating Systems.',
			'Guided students to reason about the design of algorithms, and offer feedback on system level code.',
			'Offer assistance to academic faculty in developing course materials throughout the semester.',
		],
		duration: 'Aug 2022 - Present',
		techStack: [IconType.python, IconType.java, IconType.c],
	},
	{
		jobTitle: 'Backend Engineer',
		location: "Google Developers' Student Club (GDSC)",
		blurb: 'GDSC is a university based interest group for student developers to work on community projects together.',
		points: [
			'Contributed to the tech development initiatives for Resilience Collective (RC), in a team of student developers.',
			'Developed a robust CRM system to effectively monitor member profiles, track attendance, and enable real-time updates for our mental health discussion sessions within the non-profit organization.',
		],
		duration: 'Aug 2023 - Jan 2024',
		techStack: [
			IconType.typescript,
			IconType.express,
			IconType.mongodb,
			IconType.aws,
		],
	},
];