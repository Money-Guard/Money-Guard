import { Outlet } from "react-router";
import Header from "../Header";
import Navigation from "../Sidebar/Navigation";

const DashboardLayout = () => {
  
  return (
    <div>
      <Header/>
      <main>
        <Navigation/>
        <div className="bg-gradient-to-b from-[#2a1b3d] to-[#1b1b3d]">
          <Outlet />
        </div>
        
      </main>
    </div>
  );
};

export default DashboardLayout;
