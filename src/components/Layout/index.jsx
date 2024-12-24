import React, { Suspense } from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      {/* Nav felan burada olucak */}
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};

export default Layout;
