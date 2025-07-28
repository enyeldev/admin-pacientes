import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import { MainLayout } from "./layouts/MainLayout";

// Pages
import { LoginPage } from "./models/auth/pages/LoginPage";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
