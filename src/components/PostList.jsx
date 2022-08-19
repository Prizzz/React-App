import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
