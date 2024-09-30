import { convertDate } from "@/lib/utils"
import Link from "next/link"


const Post = ({
    title,
    createdAt,
    fileUrl,
    _id,
    description
}) => {
    return (
        <article className="flex items-start gap-y-4 gap-x-10 group hover:cursor-pointer flex-wrap md:flex-nowrap">
            {
                fileUrl && <div className="w-[180px] h-[180px]">
                <img width={180} height={180} alt="image" src={fileUrl} className="w-full max-w-[180px] min-w-[180px] h-full rounded"/>
            </div>
            }
            
            <div className="flex flex-col  gap-y-3 gap-x-10 ">
                <div className="">
                    <h2 className="title-2 mb-4 transition group-hover:text-accent">{title}</h2>
                    {
                        !fileUrl && <p className="line-clamp-4 mb-2">
                            {description}
                        </p>
                    }
                    <p className="text-gray capitalize font-normal text-sm">{convertDate(createdAt)}</p>
                </div>
                <Link href={`/blog/${_id}`} className="text-sm font-semibold text-accent">
                    Read More
                </Link>
            </div>
        </article>
    )
}

export default Post