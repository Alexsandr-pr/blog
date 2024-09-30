import Image from "next/image"


const Epizod = ({
    title,
    description,
    date,
    category
}) => {
    
    return (
        <div  className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5 md:gap-3 ">
                <div className="flex">
                    {
                        
                    }
                    <div className="flex items-center gap-3 text-sm font-normal capitalize text-gray">
                        <p>{category}</p>
                        <span>|</span>
                        <p>{date}</p>           
                    </div>
                </div>
                <h2 className="title-2">{title}</h2>
                <p className="text-base font-normal leading-normal text-grey-dark">{description}</p>
            </div>
            <button className="flex  tracking-[1.92px]  items-center gap-2.5 text-xs font-semibold uppercase text-accent">
                <Image src={"/icons/play-button.svg"} alt="play button" width={24} height={24}/>
                listen now
            </button>
        </div>
    )
}

export default Epizod