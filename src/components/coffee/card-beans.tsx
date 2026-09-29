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

export function BeansCard({ title, content }: AccordionProps) {
    return (
		<Accordion
			type='single'
			className='text-sm sm:text-md lg:text-base'
			collapsible>
			<AccordionItem value={title}>
				<AccordionTrigger>{title}</AccordionTrigger>
				<AccordionContent>{content}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}