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
		duration: 'May 2024 - Aug 2024',
		summary: 'Worked with the Global Live team to build scalable backend services to support TikTok Global Finance operations.',
		blurb: "TikTok is the world's leading destination for short-form mobile videos.",
		points: ['Joining the Tiktok Global Live team this summer.'],
		techStack: [IconType.python, IconType.go, IconType.mysql],
	},
	{
		jobTitle: 'Software Engineer Intern',
		location: 'Scooterson',
		duration: 'May 2023 - Aug 2023',
		summary: 'Worked on the development of a microservices-based Django backend to improve system scalability. and improve data retrieval speed.',
		blurb: 'Scooterson is a Singapore based startup which builds smart electric scooters.',
		points: [
			'Worked on the migration to a microservices-based Django backend, optimizing scalability and enhancing system flexibility.',
			'Developed a globally accessible database with secure REST APIs, resulting in rapid and secure data retrieval.',
		],
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
		duration: 'Aug 2022 - Present',
		summary: 'Guided undergraduate students about the design of algorithms and offered feedback on system level code.',
		blurb: '',
		points: [
			'Taught classes for Data Structures and Algorithms and Operating Systems.',
			'Guided students to reason about the design of algorithms, and offer feedback on system level code.',
			'Offer assistance to academic faculty in developing course materials throughout the semester.',
		],
		techStack: [IconType.python, IconType.java, IconType.c],
	},
	{
		jobTitle: 'Backend Engineer',
		location: "Google Developers' Student Club (GDSC)",
		duration: 'Aug 2023 - Jan 2024',
		summary: 'Developed a CRM system to monitor member profiles and track attendance for mental health discussion sessions for Resilience Collective (RC).',
		blurb: 'GDSC is a university based interest group for student developers to work on community projects together.',
		points: [
			'Contributed to the tech development initiatives for Resilience Collective (RC), in a team of student developers.',
			'Developed a robust CRM system to effectively monitor member profiles, track attendance, and enable real-time updates for our mental health discussion sessions within the non-profit organization.',
		],
		techStack: [
			IconType.typescript,
			IconType.express,
			IconType.mongodb,
			IconType.aws,
		],
	},
];