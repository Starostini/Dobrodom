import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../Routes";
import Missing from "../pages/Missing";
import { Context } from "..";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  console.log(user.isAuth);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default AppRouter;
