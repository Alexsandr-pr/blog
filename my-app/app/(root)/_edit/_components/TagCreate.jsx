import React, { useState } from 'react';
import axios from 'axios';
import Input from '@/components/Input';

const TagCreate = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/tag`, { title });
            console.log('Tag created:', response.data);
            setTitle(''); 
        } catch (error) {
            console.error('Error creating tag:', error);
        }
    };

    return (
        <div className='my-16'>
            <h2>Create a New Tag</h2>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <Input
                    className='w-full h-10'
                    type="text"
                    value={title}
                    setValue={setTitle}
                    placeholder="Enter tag title"
                    required
                />
                <button className='w-24 h-10 bg-blue-500 rounded' type="submit">Create Tag</button>
            </form>
        </div>
    );
};

export default TagCreate;