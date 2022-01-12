import React from "react";
import Post from "./Post";
const Feed = ({ posts }) => {
  return (
    <section className="feed">
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0 20px 0",
          fontSize: "3rem",
        }}
      >
        New Feed
      </h1>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </section>
  );
};

export default Feed;
