import "./App.css";
import AppRoutes from "./components/Routes/AppRoutes";
import Header from "./components/Header/index";
import CurrencyTab from "./components/Sidebar/Currency/index";


function App() {
  return (
    <>
     
      <AppRoutes />
      <Header />
      <CurrencyTab />
    </>
  );
}

export default App;
