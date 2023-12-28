import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Menus from "./Pages/Menus"
import News from "./Pages/News"
import Contact from "./Pages/Contact"
import AllMenus from "./Pages/AllMenus"

const App = () => {
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