import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from 'axios';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const convertDate = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
    const year = date.getUTCFullYear();

    return `${day}.${month}.${year}`;
};




export const quillModules = {
    toolbar: {
        container: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean'],
        ],
        handlers: {
        image: async function () {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();

            input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const imageUrl = response.data.url;
                const quill = this.quill;
                const range = quill.getSelection();
                quill.insertEmbed(range.index, 'image', imageUrl);
            } catch (error) {
                console.error("Error uploading image", error);
            }
            };
        },
        },
    },
};
