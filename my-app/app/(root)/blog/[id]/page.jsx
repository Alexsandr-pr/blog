import { getData, getPostById } from "@/lib/actions/blog";
import Blog from "../_components/Blog";
import Line from "@/components/Line";
import { convertDate } from "@/lib/utils";

import "./post-content.css"
import Tags from "@/components/Tags";


export async function generateMetadata({ params }) {
  const post = await getPostById(params.id);
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const contentBlocks = post.contentBlocks;

  const h2Headings = Array.from(contentBlocks[0].matchAll(/<h2>(.*?)<\/h2>/g)).map((match) => match[1].trim());
  const h3Headings = Array.from(contentBlocks[0].matchAll(/<h3>(.*?)<\/h3>/g)).map((match) => match[1].trim());

  return {
    title: post.title,
    description: `${post.description} ${h2Headings} ${h3Headings}`,
  };
}


const Page = async ({ params }) => {
    const { id } = params;
    const data = await getData();
    const post = await getPostById(id);
    if (!post) {
        notFound();
    }

      return (
            <main className="max-w-[702px] main mx-auto px-4">
                <div className="flex flex-col items-center py-12 md:py-16 lg:py-24">
                {
                post?.fileUrl ? (
                    <img
                    alt={post.title || "image"}
                    className="mb-10"
                    src={post.fileUrl}
                    width={180}
                    height={180}
                    />
                ) : null
                    }
                    <h1 className="title mb-2">{post?.title}</h1>
                    <p className="text-sm capitalize text-gray">{convertDate(post?.createdAt)}</p>
                </div>
            
                <div className="flex flex-col gap-10 mb-12">
                <Line />
                    <p className="text">{post?.description}</p>
                    <Line />
                    <div dangerouslySetInnerHTML={{ __html: post.contentBlocks }} className="post-content">
                    
                    </div>
                </div>
                <Line />
                <Tags tags={post?.tags}/>    
                <Line />
                <div className="flex flex-col pb-16">
                    {data ? (
                    <Blog title={"Related Post"} data={data} />
                    ) : (
                    <p>No related posts.</p>
                    )}
                </div>
            </main>
    );
    };

export default Page;