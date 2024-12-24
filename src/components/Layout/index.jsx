import React, { Suspense } from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      {/* Nav felan burada olucak */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
