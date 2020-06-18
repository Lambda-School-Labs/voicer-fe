import React from 'react'
import axios from 'axios'
import { render } from '@testing-library/react'
import Marketplace, { JobDoesntExist, MultipleJobs, SingleJob } from './Marketplace'
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

test('renders Marketplace component', async() => {
    axios.get.mockResolvedValue({data: {found: ['HEY']}})
    const {debug, getByTestId} = await renderWithContext(
        <Router>
            <Marketplace />
        </Router>, DataContext)
        debug()
        expect(getByTestId(/marketplace/i)).toBeInTheDocument()
})

test('renders JobDoesntExist component', async() => {
    const {debug, getByText} = await render(<JobDoesntExist />)
        expect(getByText(/The job you are looking for does not exist/i)).toBeInTheDocument()
        // expect()
    })

test('renders MultipleJobs component', async() => {
    const {debug, getByText} = await render(<MultipleJobs data={[{id: 1}]} />)
        expect(getByText(/Job poster:/i)).toBeInTheDocument()
})

test('renders SingleJob component', async() => {
    const {debug, getByText} = await render(<SingleJob data={[{id: 1}]} />)
        expect(getByText(/Job poster:/i)).toBeInTheDocument()
    })