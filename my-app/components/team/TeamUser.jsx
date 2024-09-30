import Image from "next/image"
import Link from "next/link"


const TeamUser = ({
    imagePath,
    name, 
    position
}) => {
    return (
        <div className="rounded-md bg-grey-light-01">
            <Image src={imagePath} width={300} height={300} alt={name}/>
            <div className="p-4 pb-5 flex flex-col gap-10">
                <div className="">
                    <p className="text-accent mb-2 text-xs  tracking-[1.92px] font-semibold uppercase ">{position}</p>
                    <p className="text-lg font-normal text-primary ">{name}</p>
                </div>
                <div className="flex items-center gap-4">
                    <Link prefetc="false" href="/">
                        <img src="/icons/linkedin.svg" alt="linkedin" />
                    </Link>
                    <Link prefetc="false" href="/">
                        <img src="/icons/github.svg" alt="github" />
                    </Link>
                    <Link prefetc="false" href="/">
                        <img src="/icons/twitter.svg" alt="twitter" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TeamUser