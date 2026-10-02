import { IconType } from '@/components/icons';
import { Event } from '@/components/experience/experience';

export const experience: Event[] = [
	{
		jobTitle: 'Software Engineer',
		location: 'TikTok',
		duration: 'June 2025 - Current',
		summary:
			"Building revenue critical in-app payment systems handling 3M+ daily transactions.",
		points: [
			'Worked on in-app purchase (IAP) solutions across TikTok LIVE and other business lines, handling **3M+ daily transactions** and **1K peak QPS** across a **15 - microservice** module',
			'Own Apple and Google payment integrations, handling server-to-server callbacks, idempotent event propagation, and periodic polling for payment recovery',
			'Worked on **real-time reconciliation system from 0 to 1** using DB binlogs to detect fund discrepancies, logic errors, and invalid channel behaviour',
			'Revamped core services, reducing business-line onboarding from **3 person-days of code changes to 15 minutes** of configuration',
		],
		techStack: [
			IconType.go,
			IconType.kubernetes,
			IconType.apache,
			IconType.grpc,
			IconType.redis,
			IconType.rocketmq,
			IconType.kafka,
			IconType.clickhouse,
		],
	},
	{
		jobTitle: 'Software Engineer Intern',
		location: 'TikTok',
		duration: 'May 2024 - Oct 2024',
		summary:
			"Worked on the company's money platform, focusing mainly on the tax/invoice system.",
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
		jobTitle: 'Software Engineer (Intern)',
		location: 'Scooterson',
		duration: 'May 2023 - Aug 2023',
		summary:
			"Worked on the company's core infrastructure and early stage product features.",
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
		jobTitle: 'Teaching Assistant',
		location: 'NUS',
		duration: 'Aug 2022 - May 2025',
		summary:
			'Taught undergraduates in intermediate-level computer science courses',
		points: [
			'Taught classes for Data Structures and Algorithms and Operating Systems.',
			'Guided students to reason about the design of algorithms, and offer feedback on system level code.',
			'Offer assistance to academic faculty in developing course materials throughout the semester.',
		],
		techStack: [IconType.python, IconType.java, IconType.c],
	},
];