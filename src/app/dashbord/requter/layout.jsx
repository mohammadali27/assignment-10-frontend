import { Menu } from "@/components/DashbordSidbar/Dashbord";
import React from "react";

const DashBoredLayoutPage = ({ children }) => {
  return (
    <div className="flex min-h-screen">
        <Menu />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashBoredLayoutPage;
