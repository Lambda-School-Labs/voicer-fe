import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import GateKeeper from "./components/GateKeeper/GateKeeper"
import NavBar from "./components/navbar/NavBar"
import Marketplace from "./components/marketplace/Marketplace"
import Voice from "./components/voice/Voice"

import { DataContext } from "./context/DataContext"

import "./App.scss"

function App() {
  const token = GateKeeper()
  // const [url] = useState("localhost:3000")
  const [url] = useState("https://voicer-lambda-app.herokuapp.com")

  //global reset
  const refreshAppHandler = () => {
    window.location.reload()
  }

  //end global reset

  //UI elements

  return (
    <DataContext.Provider value={{ token, refreshAppHandler, url }}>
      <Router>
        <NavBar />
        <main>
          <Route exact path="/" component={Marketplace} />
          <Route exact path="/voice/" component={Voice} />
          <Route exact path="/voice/:displayName" component={Voice} />
          <Route exact path="/job/:jobId" component={Marketplace} />
        </main>
      </Router>
    </DataContext.Provider>
  )
}

export default App
