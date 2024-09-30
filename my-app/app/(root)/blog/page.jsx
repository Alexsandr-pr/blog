import { getData } from "@/lib/actions/blog";
import Blog from "./_components/Blog";


const Page = async () => {
    const data = await getData();
    
    return (
        <main className='max-w-[702px] main mx-auto px-4'>
            <div className="flex flex-col gap-16 py-12 md:pt-24 md:pb-16">
                {data ? (
                    <Blog title={"Blog"} data={data} />
                ) : (
                    <p>Error fetching data.</p>
                )}
            </div>
        </main>
    );
};

export default Page;
