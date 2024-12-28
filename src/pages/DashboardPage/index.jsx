import { Outlet } from "react-router";
import Modal from "../../components/Modal/index"
export default function index() {
  return (
    <>
      <Outlet />
      <Modal/>
    </>
  );
}
