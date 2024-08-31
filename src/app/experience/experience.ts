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
		jobTitle: 'Software Engineer',
		location: 'TikTok',
		duration: 'May 2024 - Aug 2024',
		summary:
			"Worked on the company's money platform, focusing mainly on the tax/invoice system.",
		blurb: "TikTok is the world's leading destination for short-form mobile videos.",
		points: [
			'Accelerated development cycles by **refactoring and modularizing code to eliminate geolocation-specific dependencies**, achieving a 10% reduction in development time and enhancing deployment efficiency across new data centers.',
			'Performed an **migration of a core database to a sharded architecture**, enabling future expansion to handle up to 30TB of data with minimal downtime and ensured stability by coordinating closely with dependent services.',
			'**Developed internal documentation** that reduced onboarding time and improved cross-team collaboration, facilitating smoother upstream and downstream integration with our services.',
		],
		techStack: [
			IconType.go,
			IconType.kubernetes, 
			IconType.apache,
			IconType.grpc,
			IconType.redis,
		],
	},
	{
		jobTitle: 'Software Engineer',
		location: 'Scooterson',
		duration: 'May 2023 - Aug 2023',
		summary:
			"Worked on the company's core infrastructure and early stage product features.",
		blurb: 'Scooterson is a Singapore based startup which builds smart electric scooters.',
		points: [
			'Worked on the migration to a **microservices-based backend**, optimizing the system’s scalability and enabling expansion to serve a larger traffic volume.',
			'Collaborated on **optimizing SQL queries** and implementing **Redis caching**, resulting in faster data retrieval and reduced load times by over 15%.',
			'Integrated **JWT-based authentication** into existing APIs, contributing to enhanced user data protection.',
		],
		techStack: [
			IconType.python,
			IconType.typescript,
			IconType.django,
			IconType.express,
			IconType.redis,
		],
	},
	{
		jobTitle: 'Undergraduate Teaching Assistant',
		location: 'NUS School of Computing',
		duration: 'Aug 2022 - Present',
		summary:
			'Taught undergraduates in intermediate-level computer science courses',
		blurb: '',
		points: [
			'Taught classes for Data Structures and Algorithms and Operating Systems.',
			'Guided students to reason about the design of algorithms, and offer feedback on system level code.',
			'Offer assistance to academic faculty in developing course materials throughout the semester.',
		],
		techStack: [IconType.python, IconType.java, IconType.c],
	},
];