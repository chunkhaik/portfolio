'use client'

import { Event, Experience } from "@/components/experience";
import { experience } from './experience';
import { Button } from '@/components/ui/button';
import getKey from "@/utils/keyGenerator";
import React, { useState } from "react";

export default function HomePage() {

	const [isConcise, setIsConcise] = useState(false);
	const toggleExperience = () => setIsConcise(!isConcise);

    return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex flex-row gap-4 justify-between'>
				<div className='flex-1 space-y-4'>
					<h1 className='inline-block font-black text-3xl sm:text-4xl lg:text-5xl'>
						Experience
					</h1>
				</div>
				<div className='space-y-4'>
					<Button
						onClick={toggleExperience}
						className='dark:bg-slate-300 bg-slate-800 w-15 sm:w-20 text-xs sm:text-base'>
						{isConcise ? 'Expand' : 'Concise'}
					</Button>
				</div>
			</div>
			<hr className='mt-5 sm:mt-8' />
			<div className='mt-4'>
				{experience.map((event: Event, eventIdx: number) => (
					<Experience
						key={getKey()}
						event={event}
						eventIdx={eventIdx}
						eventCount={experience.length - 1}
						isConcise={isConcise}
					/>
				))}
			</div>
		</div>
	);
}
