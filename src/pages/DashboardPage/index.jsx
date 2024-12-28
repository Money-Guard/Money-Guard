import { Outlet } from "react-router";
import StatisticsTab from "../../components/StaticDashboard/StaticTab/StatisticsTab";
export default function index() {
  return (
    <>
      <div>DashboardPage</div>
      <StatisticsTab />
      <Outlet />
    </>
  );
}
