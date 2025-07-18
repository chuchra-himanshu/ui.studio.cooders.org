import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout, GlobalLayout } from "./layouts";
import {
  Community,
  Dashboard,
  Notebook,
  SignIn,
  SolveX,
  Studio,
} from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route path="" Component={Dashboard} />
          <Route path="studio" Component={Studio} />
          <Route path="community" Component={Community} />
          <Route path="solvex" Component={SolveX} />
          <Route path="notebook" Component={Notebook} />
        </Route>
        <Route path="/" Component={AuthLayout}>
          <Route path="signin" Component={SignIn} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
