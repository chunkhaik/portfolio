import { posts } from '#content';
import { BlogCard } from '@/components/blog/card-blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Writing about engineering, coffee and whatever else.',
};

export default function BlogPage() {
	return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<h1 className='inline-block text-slate-600 dark:text-slate-300 font-black text-3xl sm:text-4xl lg:text-5xl'>
				Blog
			</h1>
			<hr className='my-8' />
			<div className='flex flex-col'>
				{posts
					.filter((post) => post.published)
					.map((post) => (
						<BlogCard
							key={post.slug}
							slug={post.slug}
							date={post.date}
							title={post.title}
							description={post.description ?? ''}
						/>
					))}
			</div>
		</div>
	);
}
