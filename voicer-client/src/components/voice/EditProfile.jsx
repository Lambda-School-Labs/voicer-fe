import React, {useContext } from "react"
import axios from "axios"
import { useInputControl } from "../../hooks/useInputControl"
import { DataContext } from "../../context/DataContext"
import { Button, InputGroup, FormControl } from "react-bootstrap"


export default function EditProfile({ profileData, token }) {
  // last_name
  // first_name
  // account_balance
  // bio
  // display_name
  // location

  const initialState = profileData
  //   const userInfo = initialState
  const userInfo = {}

  const { refreshAppHandler, url } = useContext(DataContext)

  const displayNameInput = useInputControl(initialState.display_name)
  //const passwordInput = useInputControl("")
  const firstNameInput = useInputControl(initialState.first_name)
  const lastNameInput = useInputControl(initialState.last_name)
  const emailInput = useInputControl(initialState.email)
  const bioInput = useInputControl(initialState.bio)

  userInfo.display_name = displayNameInput.value
  //userInfo.password = passwordInput.value
  userInfo.first_name = firstNameInput.value
  userInfo.last_name = lastNameInput.value
  userInfo.email = emailInput.value
  userInfo.bio = bioInput.value
  userInfo.id = initialState.id

  console.log(`${url}/api/users/${userInfo.id}`)

  const doSubmit = (e) => {
    e.preventDefault()
    console.log(userInfo)
    axios
      .put(`${url}/api/users/${userInfo.id}`, userInfo)
      .then((res) => {
        console.log(res)
        refreshAppHandler()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <section onChange={console.log(userInfo)}>
        <form onSubmit={doSubmit}>
          <InputGroup className="mb-3">
            <FormControl {...firstNameInput} placeholder="Your first name" />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl {...lastNameInput} placeholder="Your last name" />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl {...emailInput} placeholder="Email" />
          </InputGroup>

          <InputGroup>
            <FormControl
              {...bioInput}
              className="mb-3"
              placeholder="Biography"
            />
          </InputGroup>
          <Button variate="primary" type="submit">
            SUPER SUBMIT
          </Button>
        </form>
      </section>
    </>
  )
}
