import { getData, getTags } from '@/lib/actions/blog';
import React from 'react';
import Blog from './blog/_components/Blog';
import ParentBlock from '@/components/ParentBlock';
import Tags from '@/components/Tags';
import Line from '@/components/Line';
import LatestPost from '@/components/posts/LatestPost';


export const generateMetadata = async () => {
    const data = await getData();

    const firstHundredTitles = data?.slice(0, 100).map(post => post.title).join(', ');

    const firstPostTitle = data?.[0]?.title || 'Default Title';
    const firstPostDescription = firstHundredTitles || 'Default description of the post';

    return {
        title: firstPostTitle,
        description: firstPostDescription,
    };
};

const Page = async () => {
    const data = await getData();
    const tags = await getTags();
    const latestPost = await getData(20);

    return (
        <main className='max-w-[702px] main mx-auto px-4'>
            <div className="flex flex-col gap-10 py-12 md:pt-16 md:pb-16">
                {data ? (
                    <Blog title={"Popular "} data={data} />
                ) : (
                    <p>Error fetching data.</p>
                )}
            </div>
            <ParentBlock title={"A Wide Selection of Articles Across Various Topics"}>
                <p className="text">
                At InsightPost, you&apos;ll find articles on a wide range of topics, from technology and business 
                    to health, travel, and culture. Our collection is regularly updated with new content to keep you 
                    informed and engaged with the latest trends. Use our search feature to easily find articles by category 
                    and enjoy reading what truly interests you!
                </p>
                <Line />
                <Tags tags={tags} />
                <Line />
            </ParentBlock>
            <LatestPost post={latestPost} />
        </main>
    );
};

export default Page;
