import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const EditPost = () => {
  const {
    editTitle,
    setEditTitle,
    editBody,
    setEditBody,
    handleEdit,
    posts,
    editCategory,
    setEditCategory,
  } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
      setEditCategory(post.category);
    }
  }, [post, setEditTitle, setEditBody]);
  return (
    <main>
      <h1>Edit Post</h1>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          required
          id="postTitle"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="postCategory">Category</label>
        <input
          type="text"
          required
          id="postCategory"
          value={editCategory}
          onChange={(e) => setEditCategory(e.target.value)}
        />
        <label htmlFor="postBody">Content</label>
        <textarea
          type="text"
          required
          id="postTitle"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={() => handleEdit(post.id)}
        >
          Edit
        </button>
      </form>
    </main>
  );
};

export default EditPost;
