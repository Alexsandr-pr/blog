import React from 'react'
import ParentBlock from '../ParentBlock'
import Post from './Post'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'



const LatestPost = ({post}) => {
    return (
        <ParentBlock  title={"Latest Posts"}>
            <div className="flex flex-col gap-6 mb-12">
                {
                    post.map((item, index) => {
                        return <Post key={index} {...item}/>
                    })
                }
            </div>
            <Link className="button" href="/blog">
                View Blog
                <ChevronRight className='w-4 h-4 mt-0.5'/>
            </Link>
        </ParentBlock>
    )
}

export default LatestPost