import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdminLayout,
  AuthLayout,
  DashboardLayout,
  GlobalLayout,
} from "./layouts";
import {
  Admin,
  AdminAuthentication,
  AdminCommunity,
  AdminMockAPI,
  AdminNotebook,
  AdminSolveX,
  AdminStudio,
  Calendar,
  ChangePassword,
  Community,
  Dashboard,
  EmailVerification,
  ForgetPassword,
  Kanban,
  MockAPI,
  Notebook,
  SignIn,
  SignUp,
  SolveX,
  Studio,
  TwoFactorAuthentication,
} from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route path="" Component={DashboardLayout}>
            <Route path="" Component={Dashboard} />
            <Route path="kanban" Component={Kanban} />
            <Route path="calendar" Component={Calendar} />
          </Route>
          <Route path="studio" Component={Studio} />
          <Route path="community" Component={Community} />
          <Route path="solvex" Component={SolveX} />
          <Route path="notebook" Component={Notebook} />
          <Route path="mockapi" Component={MockAPI} />
          <Route path="admin" Component={AdminLayout}>
            <Route path="" Component={Admin} />
            <Route path="auth" Component={AdminAuthentication} />
            <Route path="studio" Component={AdminStudio} />
            <Route path="community" Component={AdminCommunity} />
            <Route path="solvex" Component={AdminSolveX} />
            <Route path="notebook" Component={AdminNotebook} />
            <Route path="mockapi" Component={AdminMockAPI} />
          </Route>
        </Route>
        <Route path="/" Component={AuthLayout}>
          <Route path="signin" Component={SignIn} />
          <Route path="signup" Component={SignUp} />
          <Route path="forgot-password" Component={ForgetPassword} />
          <Route path="change-password" Component={ChangePassword} />
          <Route path="verify-email" Component={EmailVerification} />
          <Route path="2fa" Component={TwoFactorAuthentication} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
