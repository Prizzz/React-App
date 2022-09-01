import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="/*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouter;
