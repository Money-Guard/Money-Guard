import "./App.css";
import AppRoutes from "./components/Routes/AppRoutes";
import Header from "./components/Header/index";
import Balance from "./components/Sidebar/Balance";


function App() {
  return (
    <>
     
      <AppRoutes />
      <Header />
      <Balance />
    </>
  );
}

export default App;
