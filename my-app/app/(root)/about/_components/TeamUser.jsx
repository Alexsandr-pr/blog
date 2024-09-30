import Image from "next/image"
import Link from "next/link"


const TeamUser = ({
    imagePath,
    name, 
    position,
    description
}) => {
    return (
        <div className="rounded-md flex flex-wrap md:flex-row gap-4 md:gap-10">
            <Image src={imagePath} width={300} height={300} alt={name}/>
            <div className="pb-5 flex flex-col">
                <div className="mb-3">
                    <p className="text-accent mb-1 text-xs  tracking-[1.92px] font-semibold uppercase ">{position}</p>
                    <p className="text-lg font-normal text-primary ">{name}</p>
                </div>
                <p className="text-lg font-normal text-grey-dark mb-6">{description}</p>
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