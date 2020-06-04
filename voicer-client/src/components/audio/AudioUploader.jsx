import React, { useState, useContext } from 'react'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { useInputControl } from '../../hooks/useInputControl'
import { Button, Card, InputGroup, FormControl, FormGroup, Col, FormText, FormLabel } from "react-bootstrap"
import { DataContext } from '../../context/DataContext'

const AudioUploader = () => {

	const { refreshAppHandler } = useContext(DataContext)

	const [media, setMedia] = useState({
		file: null
	})
	const titleInput = useInputControl('')
	const descriptionInput = useInputControl('')

	const doSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		// setMedia({...media, title: titleInput, description: descriptionInput})
		formData.append('file', media.file)
		formData.append('title', titleInput.value)
		formData.append('description', descriptionInput.value)
		console.log(formData)
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}
		axiosWithAuth()
		.post("/api/voice", formData, config)
			.then(res => {
				refreshAppHandler()
				// alert("File successfully uploaded")
			})
			.catch(err => {
				console.log(formData, config)
				return err
			})
	}

	const onChange = (e) => {
		setMedia({file:e.target.files[0]})
	}

	return (
		<section>
			<form onSubmit={doSubmit}>
				<Card.Header>
					<Card.Title>Voice sample upload</Card.Title>
				</Card.Header>

				<Card.Body>
					<FormGroup row="true">
						<FormLabel htmlFor="exampleFile" sm={2}>File</FormLabel>
						<Col sm={10}>
							<FormText color="muted">
								<input type="file" name="file" onChange={onChange} />
								<RegFields
									titleInput={titleInput}
									descriptionInput={descriptionInput}
								/>
							</FormText>
						</Col>
					</FormGroup>
				</Card.Body>

				<Card.Footer>
					<Button
						variate="primary"
						type="submit"
						style={{ width: "10rem", margin: "0 0 1.75rem" }}
					>Upload
					</Button>
				</Card.Footer>
			</form>
		</section>
	)
}

function RegFields(props) {
	  return (
		<>
		  <InputGroup className="mb-3">
			<FormControl {...props.titleInput} placeholder="Title" />
		  </InputGroup>
		  <InputGroup className="mb-3">
			<FormControl {...props.descriptionInput} placeholder="Description" />
		  </InputGroup>
		</>
	  )
}

export default AudioUploader