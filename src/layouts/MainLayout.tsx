import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const MainLayout = () => {
  return (
    <>
      <div className="p-4 flex items-center justify-center w-screen h-dvh">
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};
