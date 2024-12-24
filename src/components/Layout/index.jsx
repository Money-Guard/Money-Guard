import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      {/* Nav falan burada olucak */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
