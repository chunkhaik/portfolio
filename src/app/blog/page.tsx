import  {posts} from '#/site/content'
import { BlogCard } from '@/components/card-blog';
import { BlogCardPagination } from '@/components/blog-card-pagination';
import { sortPostsByDate } from '@/lib/utils';
import { Metadata } from 'next';

const POSTS_PER_PAGE = 5;

export const metadata: Metadata = {
	title: 'Blog Posts',
	description: 'Blog posts by Me',
}

interface BlogProps {
	searchParams: {
		page?: string;
	}
}

export default async function Blog({searchParams}: BlogProps) {
    
	const currPage = Number(searchParams?.page || 1);
    const disp = sortPostsByDate(posts.filter((post) => post.published));

	const totalPages = Math.ceil(disp.length / POSTS_PER_PAGE);
	const displayPosts = disp.slice(
		POSTS_PER_PAGE * (currPage - 1),
		POSTS_PER_PAGE * currPage
	)

    return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between'>
				<div className='flex-1 space-y-4'>
					<h1 className='inline-block font-black text-3xl sm:text-4xl lg:text-5xl'>
						Blog
					</h1>
					<p className='text-md sm:text-xl text-muted-foreground'>
						A collection of my thoughts and ideas. 💡
					</p>
				</div>
			</div>
			<hr className='mt-8' />
			{disp?.length > 0 ? (
				<ul className='flex flex-col'>
					{displayPosts.map((post) => {
						const { slug, date, title, description } = post;
						return (
							<li key={slug}>
								<BlogCard
									slug={slug}
									date={date}
									title={title}
									description={description ?? ''}
								/>
							</li>
						);
					})}
				</ul>
			) : (
				<p>Nothing to see here</p>
			)}

			<BlogCardPagination className='mt-4' totalPages={totalPages} />
		</div>
	);
}