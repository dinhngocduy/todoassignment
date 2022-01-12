import React from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";
const NewPost = () => {
  const { postTitle, setPostTitle, postBody, setPostBody, handleSubmit } =
    useContext(DataContext);
  return (
    <main>
      <h1>New Post</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          required
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Content</label>
        <textarea
          type="text"
          required
          id="postTitle"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
