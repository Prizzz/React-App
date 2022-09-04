import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../router/Routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.component />}></Route>
      ))}
      <Route path="/*" element={<Navigate to="/posts" />} />
    </Routes>
  );
};

export default AppRouter;
