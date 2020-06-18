import React from 'react'
import axios from 'axios'
import { render, act } from '@testing-library/react'
import Voice from '../voice/Voice'
import GateKeeper from "../GateKeeper/GateKeeper"
import { DataContext } from "../../context/DataContext"
import { BrowserRouter as Router } from "react-router-dom"

jest.mock('axios')

const token = GateKeeper()

function renderWithContext(ui, context) {
    return {
        ...render(<context.Provider value={{ token }} >{ui}</context.Provider>)
    }
}

test('renders Voice component', async() => {
    axios.get.mockResolvedValue({data: {found: ['HEY']}})
    const {debug, getTestById} = await act(() => {
        renderWithContext(
            <Router>
                <Voice />
            </Router>, DataContext)
        }) 
        debug()
        expect(getTestById(/voice/i)).toBeInTheDocument()
})