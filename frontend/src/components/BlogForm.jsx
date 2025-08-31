import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../config";

// This BlogForm is used for editing and creating blogs

function BlogForm({ type, blogId, originalTitle, originalContent }) {
  const [title, setTitle] = useState(originalTitle || "");
  const [content, setContent] = useState(originalContent || "");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setTitle(originalTitle || "");
    setContent(originalContent || "");
  }, [originalTitle, originalContent]);

  const handleSubmitEditForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${BASE_URL}/blogs/${blogId}`,
        { title, content },
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const handleSubmitCreateForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/blogs`,
        { title, content },
        { withCredentials: true }
      );
      if (response?.data?.success) {
        setSuccessMessage("New blog has been created!  🎉");
      }
      console.log(successMessage);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <form
      className="flex flex-col w-full"
      onSubmit={
        type === "create" ? handleSubmitCreateForm : handleSubmitEditForm
      }
    >
      {successMessage && (
        <p className="text-center mb-4 font-semibold text-lg">
          {successMessage}
        </p>
      )}
      <label className="h-8 font-light">Title</label>
      <input
        className="border border-[#B3B3B3] h-12 px-6 rounded-md outline-black "
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="h-8 mt-8 font-light">Content</label>
      <textarea
        className="border border-[#B3B3B3] h-[50vh] outline-black p-6  rounded-md"
        placeholder="Write your new blog..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {title || content ? (
        <div className="w-full mt-10 flex gap-x-4">
          <button className="w-[10vw] h-[4vh] rounded-md font-semibold  hover:text-black hover:border hover:border-black">
            Cancel
          </button>
          <button
            className="w-[10vw] h-[4vh] rounded-md bg-black text-white font-semibold hover:bg-babyCorn hover:text-black hover:border hover:border-black"
            type="submit"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        </div>
      ) : null}
    </form>
  );
}

export default BlogForm;
