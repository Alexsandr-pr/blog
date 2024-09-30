"use client"
import Pagination from '@/components/Pagination';
import ParentBlock from '@/components/ParentBlock';
import Post from '@/components/posts/Post';
import { useState } from 'react';


const Blog = ({data, title}) => {

    const [elementsToShow] = useState(10)
    const [page, setPage] = useState(1);
    const pageTo = (elementsToShow * page);
    const pageFrom = (page - 1) * elementsToShow;
    const postsToShow = data.slice(pageFrom, pageTo);

    return (
        <ParentBlock  title={title}>
            <div className="flex flex-col gap-8 mb-12">
                {
                    postsToShow.map((item, index) => {
                        return <Post key={index} {...item}/>
                    })
                }
            </div>
            <Pagination dataLenght={data.length} page={page} elementsToShow={elementsToShow} setPage={setPage}/>
        </ParentBlock>
    )
}

export default Blog