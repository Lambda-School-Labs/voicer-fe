import React, { useContext } from "react"
import {
  Form,
  FormGroup,
  FormLabel,
  FormText,
  FormControl,
} from "react-bootstrap"
import { axiosWithAuth } from "../axiosWithAuth/axiosWithAuth"
import { useInputControl } from "../../hooks/useInputControl"
import { DataContext } from "../../context/DataContext"

const AddJobForm = () => {
  const { url } = useContext(DataContext)

  const titleInput = useInputControl("")
  const descriptionInput = useInputControl("")
  const payrateInput = useInputControl("")

  const jobInfo = {}

  jobInfo.title = titleInput.value
  jobInfo.description = descriptionInput.value
  jobInfo.payrate = payrateInput.value

  const addJob = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post(`${url}/api/jobs`, jobInfo)
      .then((res) => {
        console.log(jobInfo)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Form onSubmit={addJob}>
        <FormGroup>
          <FormLabel>Title</FormLabel>
          <FormControl
            {...titleInput}
            type="text"
            placeholder="Enter the title of your job here..."
          ></FormControl>
          <FormText className="text-muted">
            This will show up as the header of your job posting.
          </FormText>
        </FormGroup>

        <FormGroup>
          <FormLabel>Description</FormLabel>
          <FormControl
            {...descriptionInput}
            as="textarea"
            rows="3"
            placeholder="Describe the job and desired attributes here..."
          ></FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Payrate</FormLabel>
          <FormControl
            {...payrateInput}
            placeholder="Enter the hourly payrate..."
          ></FormControl>
          <FormText className="text-muted">
            Pro tip: The more you pay the more applicants you will receive.
          </FormText>
        </FormGroup>

        <button type="submit">Submit</button>
      </Form>
    </>
  )
}

export default AddJobForm
