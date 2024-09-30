"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";

const buttonToShow = 3; 

const Pagination = ({
    dataLenght,
    elementsToShow,
    setPage,
    page
}) => {
    const [block] = useAutoAnimate();

    const totalPages = Math.ceil(dataLenght / elementsToShow);

    const buttonsArray = Array.from({ length: totalPages }, (_, index) => index);

    const half = Math.floor(buttonToShow / 2);
    let start = Math.max(page - half - 1, 0);
    let end = Math.min(start + buttonToShow, totalPages);

    if (end - start < buttonToShow) {
        start = Math.max(0, end - buttonToShow);
    }

    const buttonsArrayToShow = buttonsArray.slice(start, end);

    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div ref={block} className='flex gap-[5px] items-center'>
            {page !== 1 && (
                <button onClick={prevPage} className={`flex text-sm font-normal uppercase text-grey-dark items-center justify-center w-8 h-8 rotate-90 rounded-md`}>
                    <img src="/icons/chevron.svg" alt="previous" />
                </button>
            )}
            
            {buttonsArrayToShow.map(item => (
                <button 
                    key={item} 
                    onClick={() => setPage(item + 1)} 
                    className={`flex text-sm font-normal uppercase text-grey-dark items-center justify-center w-8 h-8  rounded-md ${page - 1 === item ? " bg-accent text-white" : " bg-grey-light-01"}`}>
                    {item + 1}
                </button>
            ))}
            {page !== totalPages && (
                <>
                    <button className={`flex text-sm font-normal uppercase text-grey-dark items-center justify-center w-8 h-8 bg-grey-light-01 rounded-md`}>
                        <img src="/icons/points.svg" alt="points" />
                    </button>
                    <button onClick={nextPage} className={`flex text-sm font-normal uppercase text-grey-dark items-center justify-center w-8 h-8 -rotate-90 rounded-md`}>
                        <img src="/icons/chevron.svg" alt="next" />
                    </button>
                </>
            )}
        </div>
    );
};

export default Pagination;
