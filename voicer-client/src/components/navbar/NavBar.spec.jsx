import React from 'react'
import { render } from '@testing-library/react'
import NavBar from './NavBar'
import GateKeeper from "../GateKeeper/GateKeeper"
import { DataContext } from "../../context/DataContext"
import { BrowserRouter as Router } from "react-router-dom"

const token = GateKeeper()

function renderWithContext(ui, context) {
    return {
        ...render(<context.Provider value={{ token }} >{ui}</context.Provider>)
    }
}

test('renders NavBar component', async() => {
    const {debug, getByText} = await renderWithContext(
        <Router>
            <NavBar />
        </Router>, DataContext)
        debug()
        expect(getByText(/marketplace/i)).toBeInTheDocument()
})