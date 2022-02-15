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
        CURRENT MISSIONS
      </h1>

      <Post posts={posts} />
    </section>
  );
};

export default Feed;
