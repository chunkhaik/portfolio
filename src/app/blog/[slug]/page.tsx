import { posts } from '#content';
import { MDXContent } from '@/components/blog/mdx-content';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateStaticParams() {
	return posts.map((post) => ({ slug: post.slugAsParams }));
}

export function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Metadata {
	const post = posts.find((post) => post.slugAsParams === params.slug);
	return { title: post?.title, description: post?.description };
}

export default function PostPage({ params }: { params: { slug: string } }) {
	const post = posts.find((post) => post.slugAsParams === params.slug);
	if (!post) notFound();

	return (
		<article className='container max-w-4xl py-6 lg:py-10'>
			<h1 className='inline-block text-slate-600 dark:text-slate-300 font-black text-3xl sm:text-4xl lg:text-5xl'>
				{post.title}
			</h1>
			{post.description ? (
				<p className='mt-2 text-sm sm:text-base text-muted-foreground'>
					{post.description}
				</p>
			) : null}
			<div className='mt-2 text-xs sm:text-sm text-muted-foreground'>
				<time dateTime={post.date}>{formatDate(post.date)}</time>
			</div>
			<hr className='my-8' />
			<div className='prose dark:prose-invert'>
				<MDXContent code={post.body} />
			</div>
		</article>
	);
}
