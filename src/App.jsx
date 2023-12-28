import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Menus from "./Pages/Menus"
import News from "./Pages/News"
import Contact from "./Pages/Contact"
import AllMenus from "./Pages/AllMenus"
import { useContext, useEffect } from "react"
import { StateContext } from "./Context/Context"

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
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menus/" element={<AllMenus/>}/>
      <Route path="/menus/:name" element={<Menus/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
  )
}

export default App