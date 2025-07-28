import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};
