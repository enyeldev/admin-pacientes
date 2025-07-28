import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const DashboardLayout = () => {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};
