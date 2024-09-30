import axios from "axios";

export const createPost = async (title, description, selectedTags, contentBlocks, file) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", JSON.stringify(selectedTags));
    formData.append("contentBlocks", JSON.stringify(contentBlocks));

    if (file) {
        formData.append("file", file);
    }

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/post`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
}
export const getData = async (limit) => {
    try {
        
        const url = `${process.env.NEXT_PUBLIC_SERVER_API}/api/post/all${limit ? `?limit=${limit}` : ''}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
export const getPostById = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/api/post/one/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export const getTags = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/api/tag`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
