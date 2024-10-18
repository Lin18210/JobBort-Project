import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import './app.css'

function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default App;
