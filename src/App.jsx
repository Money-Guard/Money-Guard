import "./App.css";
import AppRoutes from "./components/Routes/AppRoutes";
import Header from "./components/Header/index";
import Navigation from "./components/Sidebar/Navigation";


function App() {
  return (
    <>
     
      <AppRoutes />
      <Header />
      <Navigation/>
    </>
  )
}

export default App;
