import Input from "@/components/Input";

const PostTitleDescription = ({ title, setTitle, description, setDescription }) => (
    <div>
        <Input
            type="text"
            value={title}
            setValue={setTitle}
            placeholder="Enter post title"
            required
            className="border p-2"
        />
        <Input
            type={"textarea"}
            value={description}
            setValue={setDescription}
            placeholder="Enter post description"
            required
            className="border p-2"
        />
    </div>
);
export default PostTitleDescription