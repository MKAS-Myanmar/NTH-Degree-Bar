import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Menus from "./Pages/Menus"
import Contact from "./Pages/Contact"
import AllMenus from "./Pages/AllMenus"
import { useContext, useEffect } from "react"
import { StateContext } from "./Context/Context"
import Activity from "./Pages/Activity"
import About from "./Pages/About"
import NavBar from "./Components/NavBar"

const App = () => {
  const { theme } = useContext(StateContext);


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");

    }
  }, [theme]);


  return (

    <div className="">
      <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menus/" element={<AllMenus/>}/>
      <Route path="/menus/:name" element={<Menus/>}/>
      <Route path="/activity" element={<Activity/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </div>
  )
}

export default App