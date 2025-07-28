import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import { AuthLayout } from "./models/auth/layouts/AuthLayout";
import { DashboardLayout } from "./models/dashboard/layouts/DashboardLayout";

// Pages
import { LoginPage } from "./models/auth/pages/LoginPage";
import { SignUpPage } from "./models/auth/pages/SignUpPage";
import { DashboardPage } from "./models/dashboard/pages/DashboardPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="singUp" element={<SignUpPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
