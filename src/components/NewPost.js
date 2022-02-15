import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const NewPost = () => {
  const {
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    handleSubmit,
    postCategory,
    setPostCategory,
  } = useContext(DataContext);
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>New Post</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          required
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postCategory">Category</label>
        <input
          type="text"
          required
          id="postCategory"
          value={postCategory}
          placeholder="Low Priority/High Priority/Medium Priority"
          onChange={(e) => setPostCategory(e.target.value)}
        />
        <label>Content</label>
        <textarea
          type="text"
          required
          id="postTitle"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
