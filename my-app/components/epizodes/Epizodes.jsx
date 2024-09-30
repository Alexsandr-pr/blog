"use client"
import { useState } from "react";
import Epizod from "./Epizod";
import Pagination from "../Pagination";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const posts = Array.from({ length: 23 }, (_, index) => ({
    id: index + 1,
    category: "Business",
    date: "Jan 18, 2021",
    title: `${index + 1} - How to rapidly test any experience!`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...",
})).reverse();

const Epizodes = () => {
    const [elementsToShow] = useState(3)
    const [page, setPage] = useState(1);
    const pageTo = (elementsToShow * page);
    const pageFrom = (page - 1) * elementsToShow;
    const postsToShow = posts.slice(pageFrom, pageTo);

    const [block] = useAutoAnimate();
    
    return (
        <div ref={block} className="">
            <div className="flex flex-col gap-12 md:gap-16 mb-12 md:mb-16">
                {
                    postsToShow.map((item, index) => {
                        return (
                            <Epizod key={`${item.id}-${index}`} {...item}/>
                        )
                    })
                }
            </div>
            <Pagination dataLenght={posts.length} page={page} elementsToShow={elementsToShow} setPage={setPage}/>
        </div>
    )
}

export default Epizodes