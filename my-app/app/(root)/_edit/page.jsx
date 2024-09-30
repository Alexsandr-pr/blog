import { getTags } from "@/lib/actions/blog";
import CreatePost from "./_components/CreatePost";



const Page = async () => {
    const tags = await getTags()
    return (
        <CreatePost tags={tags}/>
    )
}
export default Page;