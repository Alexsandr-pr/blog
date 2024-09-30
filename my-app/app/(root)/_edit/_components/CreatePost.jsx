"use client";

import TagSelection from "./TagSelection";
import PostTitleDescription from "./PostTitleDescription";
import ContentEditor from "./ContentEditor";
import TagCreate from "./TagCreate";
import Line from "@/components/Line";
import { createPost } from "@/lib/actions/blog";
import { useState } from "react";




const CreatePost = ({tags}) => {
    const [selectedTags, setSelectedTags] = useState([]); 
    const [contentBlocks, setContentBlocks] = useState(''); 
    const [file, setFile] = useState(null); 
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState(''); 

   
    const handleTagSelection = (tagId) => {
        setSelectedTags((prev) =>
            prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const postData = await createPost(title, description, selectedTags, contentBlocks, file);
            console.log("Post successfully created:", postData);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <main className="max-w-[702px] mx-auto px-4 py-8">
            <form onSubmit={handleSubmit} className="flex w-[700px] flex-col gap-6">
                <TagSelection
                    tags={tags}
                    selectedTags={selectedTags}
                    handleTagSelection={handleTagSelection}
                />
                <Line/>
                <input  type="file" onChange={(e) => setFile(e.target.files[0])} />
                <Line/>
                <PostTitleDescription
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                />
                  <Line/>
                <ContentEditor
                    contentBlocks={contentBlocks}
                    setContentBlocks={setContentBlocks}
                />
                  <Line/>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Submit Post
                </button>
            </form>

            <Line/>
            <TagCreate/>
        </main>
    );
};

export default CreatePost;
