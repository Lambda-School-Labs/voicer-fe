import React, { useState, useContext } from "react"
import { Button, Card, InputGroup, FormControl } from "react-bootstrap"

import { useInputControl } from "../../../hooks/useInputControl.js"
import ValidateFields from "./validate.js"

import axios from "axios"

import { DataContext } from "../../../context/DataContext"

const LogRegFields = (props) => {
  const { refreshAppHandler, url } = useContext(DataContext)

  const [validate, setValidate] = useState([])

  const isReg = props.register
  let title = "Login"
  let notTitle = "Register"

  if (isReg) {
    title = "Register"
    notTitle = "Login"
  }

  const displayNameInput = useInputControl("")
  const passwordInput = useInputControl("")
  const firstNameInput = useInputControl("")
  const lastNameInput = useInputControl("")
  const emailInput = useInputControl("")

  const userInfo = {
    password: passwordInput.value,
    email: emailInput.value,
  }

  if (isReg) {
    userInfo.first_name = firstNameInput.value
    userInfo.last_name = lastNameInput.value
    userInfo.display_name = displayNameInput.value
  }

  const doSubmit = (e) => {
    console.log(userInfo)
    e.preventDefault()
    const make = []
    Object.keys(userInfo).forEach((key) => {
      if (userInfo[key] === "") {
        make.push(`Please fill out the ${key} field`)
      }
    })
    if (make.length !== 0) {
      setValidate(make)
      return
    } else {
      console.log("before axios")
      axios
        .post(
          title === "Register"
            ? `${url}/api/auth/register`
            : `${url}/api/auth/login`,
          userInfo
        )
        .then((res) => {
          // props.setDropDown(false)
          console.log(res)
          localStorage.setItem("token", res.data.token)
        })
        .catch((err) => {console.log(err)})

        .finally(() => {
          props.setLoginRegister(false)
          refreshAppHandler()
        })
    }
  }

  return (
    <section>
      <form onSubmit={doSubmit}>
        <Card.Header>
          <Card.Title bg="light">{title}</Card.Title>
        </Card.Header>
        <Card.Body style={{ padding: "2rem" }}>
          <RegFields
            displayNameInput={displayNameInput}
            firstNameInput={firstNameInput}
            lastNameInput={lastNameInput}
            isReg={isReg}
          />
          <InputGroup className="mb-3">
            <FormControl {...emailInput} placeholder="Email" />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl {...passwordInput} placeholder="Password" />
          </InputGroup>
        </Card.Body>
        <Card.Footer>
          <Button
            variate="primary"
            type="submit"
            style={{ width: "10rem", margin: "0 0 1.75rem" }}
          >
            Join!
          </Button>
          <ValidateFields validate={validate} />
        </Card.Footer>
      </form>
      <button onClick={(e) => props.loginRegisterHandler(e)}>
        I want to {notTitle} instead
      </button>
    </section>
  )
}

function RegFields(props) {
  if (props.isReg) {
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl {...props.firstNameInput} placeholder="First Name" />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl {...props.lastNameInput} placeholder="Last Name" />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl {...props.displayNameInput} placeholder="Display Name" />
        </InputGroup>
      </>
    )
  }
  return <></>
}

export default LogRegFields
