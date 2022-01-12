import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  return (
    <main>
      <article className="postPage">
        {post && (
          <section>
            <h2 className="postTitle">{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button>Edit Post</button>
            </Link>

            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </section>
        )}
        {!post && (
          <section>
            <h2>Post Not Found</h2>
            <p>
              <Link to="/">Visit Our Page</Link>
            </p>
          </section>
        )}
      </article>
    </main>
  );
};

export default PostPage;
