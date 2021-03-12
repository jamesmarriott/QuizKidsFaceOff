import React from "react"
import { NavLink, Switch, Route, useLocation } from "react-router-dom"
import "../styles/homestyles.css"
import Header from "./Header"
import GamePlay from "./GamePlay"
import Questions from "./Questions"
import About from "./About"

function MainMenu() {

    let isHome = false;

    let { pathname} = useLocation()
    console.log(pathname)

    if (pathname === "/") {
      isHome = true
    }

    return(
      <>
        {isHome && <Header/>}
        <div className="bnt-container">
        {/* <h1><NavLink to="/">Home</NavLink></h1> */}
        {isHome && <button className="main-btn"><NavLink to="/gameplay">Play</NavLink></button>}
        {isHome && <button className="main-btn btn-sm"><NavLink to="/questions">View Questions</NavLink></button>}
        {isHome && <button className="main-btn btn-sm"><NavLink to="/about">About</NavLink></button>}
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/gameplay">
            <GamePlay/>
          </Route>
          <Route exact path="/questions">
            <Questions/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        </div>
      </>
      )
}

export default MainMenu