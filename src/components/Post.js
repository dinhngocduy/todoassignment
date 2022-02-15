import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const Post = () => {
  const { posts, handleCheck, handleDelete, doneTasks } =
    useContext(DataContext);

  return posts.map((post) => (
    <section style={{ position: "relative" }}>
      <div className="checkBox">
        <input
          type="checkbox"
          checked={post.checked}
          onChange={() => handleCheck(post.id)}
        />
        <Link to={`/edit/${post.id}`}>
          <button className="btn btn-dark btn-lg btn-block">Edit Post</button>
        </Link>

        <button
          className="btn btn-dark btn-lg btn-block"
          onClick={() => handleDelete(post.id)}
        >
          Delete Post
        </button>
      </div>

      <article
        className="newFeed"
        key={post.id}
        style={post.checked ? doneTasks : { backgroundColor: "wheat" }}
      >
        <h2 className="postTitle">{post.title}</h2>
        <p className="postTime">Category: {post.category.toUpperCase()}</p>

        <p className="postBody">{post.body}</p>
      </article>
    </section>
  ));
};

export default Post;
