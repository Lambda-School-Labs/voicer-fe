import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Tag from './Tag'
import { DataContext } from "../../context/DataContext"

let tags = [""]
let tag = "Spanish"
let id = 1
let proptags = ['English', 'Spanish', "Canadian"]
let crud = true
let url = ""

// beforeEach(() => {
//     // rock on
//   })

test('renders tags', () => {
    
let setTags = (newTags) => { tags = newTags }
    const {getByText} = render(
        <DataContext.Provider value={{ url }} >
            <Tag name={tag} crud={crud} id={id} tags={tags} setTags={setTags} proptags={proptags} />
        </DataContext.Provider>
    )
    const element = getByText(/Spanish/i)
    expect(element).toBeInTheDocument() 
        
})

test('tag deletes on click to <i> tag', () => {
    let setTags = (newTags) => { tags = newTags }

    const {getByText} = render(
        <DataContext.Provider value={{ url }} >
            <Tag name={tag} crud={crud} id={id} tags={tags} setTags={setTags} proptags={proptags} />
        </DataContext.Provider>
    )

    const element = getByText(/delete/i)
    fireEvent(element, new MouseEvent('click', {
        bubbles: true
    }))


})

test('deletes', () => {
    let setTags = (newTags) => { tags = newTags }

    const {getByText} = render(
        <DataContext.Provider value={{ url }} >
            <Tag name={tag} crud={crud} id={id} tags={tags} setTags={setTags} proptags={proptags} />
        </DataContext.Provider>
    )
    
    const element2 = getByText(/spanish/i)
    expect(element2).not.toBeInTheDocument()
})
