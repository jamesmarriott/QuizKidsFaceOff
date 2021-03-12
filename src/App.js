//import dependencies
import React from "react"
import { NavLink, Switch, Route, useLocation} from "react-router-dom"

//import pages
import MainMenu from "./pages/MainMenu"
import Header from "./pages/Header"
import Footer from "./pages/Footer"

function App() {
  let isHome = false;

  let { pathname} = useLocation()
  console.log(pathname)

  if (pathname === "/") {
    isHome = true
  }

  console.log(pathname, isHome)

  return (
    <div className="main-container">
    <MainMenu />
    <Footer/>
    </div>
  )
}
export default App;