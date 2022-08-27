import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(e) {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    };

    create(newPost);
    setPost({ title: "", body: "" });
  }

  return (
    <form>
      <MyInput
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Название поста"
      />
      <MyInput
        type="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Подтвердить</MyButton>
    </form>
  );
};

export default PostForm;
