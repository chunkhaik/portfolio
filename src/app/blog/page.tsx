import  {posts} from '#/site/content'
import { BlogCard } from '@/components/blog-card';
import { sortPostsByDate } from '@/lib/utils';

export default async function Blog() {
    
    const disp = sortPostsByDate(posts.filter((post) => post.published));
    return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between'>
				<div className='flex-1 space-y-4'>
					<h1 className='inline-block font-black text-4xl lg:text-5xl'>
						Blog
					</h1> 
					<p className='text-xl text-muted-foreground'>aiubaisuda</p>
				</div>
			</div>
			<hr className='mt-8' />
			{disp ?.length > 0 ? 
            (
				<ul className='flex flex-col'>
					{disp.map((post) => {
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
		</div>
	);
}