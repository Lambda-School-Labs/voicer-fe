import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import GateKeeper from "./components/GateKeeper/GateKeeper"
import NavBar from "./components/navbar/NavBar"
import Marketplace from "./components/marketplace/Marketplace"
import Voice from "./components/voice/Voice"

import { DataContext } from "./context/DataContext"

import "./App.scss"

function App() {

  //Material UI Dark Mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',

          primary: {
            main: '#375b6d'
          },
          secondary: {
            main: '#ffa770'
          },
          error: {
            main: '#f44336'
          },
          warning: {
            main: '#ff9800'
          },
          info: {
            main: '#2196f3'
          },
          success: {
            main: '#4caf50'
          },

          contrastThreshold: 3,
          tonalOffset: 0.2
        },

        overrides: {
          MuiMenu: {
            paper: {
              backgroundColor: '#ffa770',
            },
          },
        },
      }),
    [prefersDarkMode],
  )
  //End Material UI Dark Mode

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
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <main>
            <Route exact path="/" component={Marketplace} />
            <Route exact path="/voice/" component={Voice} />
            <Route exact path="/voice/:displayName" component={Voice} />
            <Route exact path="/job/:jobId" component={Marketplace} />
          </main>
        </Router>
      </ThemeProvider>
    </DataContext.Provider>
  )
}

export default App
