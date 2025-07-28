import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import { MainLayout } from "./layouts/MainLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
