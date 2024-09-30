"use client"

import Input from "@/components/Input";
import ParentBlock from "@/components/ParentBlock";
import Post from "@/components/posts/Post";
import axios from "axios";
import { useState } from "react";

const Page = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(search)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/post/search?search=${search}`)

           setSearchResults(response.data); 
        } catch (error) {
            console.error("Ошибка поиска:", error);
        }
    };

    return (
        <main className='max-w-[702px] main mx-auto px-4'>
            <div className="flex flex-col w-full gap-10 py-12 md:pt-16 md:pb-16">
                <ParentBlock title={"Search"}>
                    <p className="text-lg font-normal text-primary -mt-3 min-w-full mb-11">Share your insights, thoughts, and experiences with us...</p>
                    <form action="#" className="flex md:min-w-[700px] flex-col gap-10 h-auto" onSubmit={e => onSubmit(e)}>
                        <div className="flex flex-col gap-7 ">
                            <Input required value={search} setValue={setSearch} placeholder="" type="text" name="search" label="Search*" />
                        </div>
                        <button type="submit" >
                            Search
                        </button>
                    </form>
                </ParentBlock>
                <ParentBlock  title={"Search result"}>
                    <div className="flex flex-col gap-6 mb-12">
                        {
                            searchResults.length > 0 
                                ? searchResults.map((item, index) => <Post key={index} {...item}/>)
                                : <p>No results found.</p>
                        }
                    </div>
                </ParentBlock>
            </div>
        </main>
    );
}

export default Page;
