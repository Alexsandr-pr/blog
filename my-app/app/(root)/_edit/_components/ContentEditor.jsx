import { quillModules } from '@/lib/utils';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; 


const ContentEditor = ({ contentBlocks, setContentBlocks }) => (
    <ReactQuill
        value={contentBlocks}
        onChange={setContentBlocks}
        modules={quillModules} 
        placeholder="Enter your content here..."
    />
);

export default ContentEditor;