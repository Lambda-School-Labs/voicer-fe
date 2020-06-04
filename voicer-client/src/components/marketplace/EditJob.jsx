import React, { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { axiosWithAuth } from "../axiosWithAuth/axiosWithAuth"
import { withRouter } from "react-router-dom"
import {
  Button,
  FormLabel,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap"
import { useInputControl } from "../../hooks/useInputControl"

const EditJob = ({ setEdit, data, token, history }) => {
  // ----------------------------------------------------------------
  // ***********DESCRIPTION***************
  // This component displays when the creator_id of the job
  // and the id of the current token match. It allows users to
  // edit their job posts or delete them entirely.
  // ----------------------------------------------------------------

  const { url, refreshAppHandler } = useContext(DataContext)
  const jobUpdate = {}

  const titleInput = useInputControl(data.title)
  const descriptionInput = useInputControl(data.description)
  const payrateInput = useInputControl(data.payrate)

  jobUpdate.title = titleInput.value
  jobUpdate.description = descriptionInput.value
  jobUpdate.payrate = payrateInput.value

  const submitForm = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .put(`${url}/api/jobs/${data.id}`, jobUpdate)
      .then((res) => {
        console.log(res)
        // window.location.reload()
        refreshAppHandler()
      })
      .catch((err) => {
        console.log(err)
      })

    console.log("submitted form")
    // setEdit(false)
  }

  const cancelForm = (e) => {
    console.log("cancelled form")
    setEdit(false)
  }

  const deleteForm = (e) => {
    window.confirm("Are you sure you want to delete this job?")
      ? // *** NEED TO KEEP COMMENTED OUT UNTIL BACKEND BUG IS FIXED,****
        // *** ELSE WE CANT TEST COMPONENT ANYMORE ***

        // axiosWithAuth()
        //     .delete(`${url}/api/jobs/${data.id}`)
        //     .then((res) => {
        //       console.log(`${url}/api/jobs/${data.id}`)
        //       console.log(res)
        //       history.push("/")
        //     })
        //     .catch((err) => {
        //       console.log(err)
        //       console.log(`${url}/api/jobs/${data.id}`)
        //     })
        history.push("/")
      : console.log("Didn't delete")
  }

  return (
    <Form onSubmit={submitForm}>
      <InputGroup>
        <FormLabel>Title</FormLabel>
        <FormControl {...titleInput} placeholder="Enter new title here" />
      </InputGroup>

      <InputGroup>
        <FormLabel>Description</FormLabel>
        <FormControl
          {...descriptionInput}
          placeholder="Edit the project here"
        />
      </InputGroup>

      <InputGroup>
        <FormLabel>Payrate</FormLabel>
        <FormControl {...payrateInput} placeholder="Edit payrate" />
      </InputGroup>

      <Button type="submit">Submit</Button>
      <Button onClick={cancelForm}>Cancel</Button>
      <Button onClick={deleteForm}>Delete Job</Button>
    </Form>
  )
}

export default withRouter(EditJob)
