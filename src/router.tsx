import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import { MainLayout } from "./layouts/MainLayout";

// Pages
import { LoginPage } from "./models/auth/pages/LoginPage";
import { SignUpPage } from "./models/auth/pages/SignUpPage";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="singUp" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
