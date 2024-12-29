import { Outlet } from "react-router";
import Header from "../Header";
import Navigation from "../Sidebar/Navigation";
import Balance from "../Sidebar/Balance";

const DashboardLayout = () => {
  
  return (
    <div>
      <Header/>
      <main>
        <Navigation/>
        <Balance/>
        <div className="bg-gradient-to-b from-[#2a1b3d] to-[#1b1b3d]">
          <Outlet />
        </div>
        
      </main>
    </div>
  );
};

export default DashboardLayout;
