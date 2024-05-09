'use client'

import exp from "constants";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface BlogCardPaginationProps {
    totalPages: number;
    className?: string;
}

export function BlogCardPagination({totalPages, className}: BlogCardPaginationProps) {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    
    const currPage = Number(searchParams.get('page') || 1);
    const prevPage = currPage - 1;
    const nextPage = currPage + 1;

    const createPageURL = (pageNumber: number|string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', String(pageNumber));
        return `${pathName}?${params.toString()}`;
    }
	console.log(prevPage, totalPages, prevPage<=totalPages)

    return (
		<Pagination className={className}>
			<PaginationContent>
				{prevPage >= 1 ? (
					<PaginationItem>
						<PaginationPrevious href={createPageURL(prevPage)} />
					</PaginationItem>
				) : null}

				{Array(totalPages)
					.fill('')
					.map((_, index) => (
						<PaginationItem
							className='hidden sm:inline-block'
							key={`page-button-${index}`}>
							<PaginationLink
								isActive={currPage === index + 1}
								href={createPageURL(index + 1)}>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}

				{prevPage <= totalPages && prevPage!=0 ? (
					<PaginationItem>
						<PaginationNext href={createPageURL(nextPage)} />
					</PaginationItem>
				) : null}
			</PaginationContent>
		</Pagination>
	);
}