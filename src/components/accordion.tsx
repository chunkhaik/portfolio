import React from 'react';
import getKey from '@/utils/keyGenerator';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

type AccordionProps = {
	title: string;
	content: React.ReactNode;
};

export function AccordionCustom({ title, content }: AccordionProps) {
    return (
        <Accordion type='single' collapsible>
            <AccordionItem value={getKey()}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}