import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "Go", body: "Description" },
    { id: 4, title: "React", body: "Description" },
  ]);
  return (
    <div className="App">
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
