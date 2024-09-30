const TagSelection = ({ tags, selectedTags, handleTagSelection }) => (
    <div>
        <h3 className="text-lg font-semibold mb-4">Select Tags:</h3>
        <div className="grid grid-cols-1 gap-4">
            {tags.map((tag) => (
                <div key={tag._id} className="flex items-center space-x-2 border border-gray-300 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="appearance-none checked:bg-blue-600 checked:border-transparent form-checkbox h-5 w-5 border-gray-300 rounded focus:ring focus:ring-blue-300"
                            checked={selectedTags.includes(tag._id)}
                            onChange={() => handleTagSelection(tag._id)}
                        />
                        <span className="ml-2 text-gray-700">{tag.title}</span>
                    </label>
                </div>
            ))}
        </div>
    </div>
);

export default TagSelection;