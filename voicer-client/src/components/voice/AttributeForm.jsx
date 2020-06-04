import React, { useState, useContext } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"
import { InputGroup, FormControl } from "react-bootstrap"

const AttributeForm = () => {
  const [tags, setTags] = useState([])

  const { refreshAppHandler, url } = useContext(DataContext)


  const makeTag = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value])
      e.target.value = ""
    }
  }

  const stopSubmit = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(tags)
    axios
      .post(`${url}/api/attribute`, tags)
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
      <form onSubmit={stopSubmit}>
        <div className="container">
          <div className="tag-container">
            {tags.map((tag) => (
              <Tag name={tag} />
            ))}
            <InputGroup className="mb-3 tags-text">
              <FormControl
                // {...tagsInput}
                placeholder="Language"
                onKeyUp={makeTag}
                className="tag-input"
              />
            </InputGroup>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add Tags to Profile
        </button>
      </form>
    </>
  )
}

const Tag = (props) => {
  return (
    <>
      <span className="tag">
        {props.name}
        <i className="material-icons">close</i>
      </span>
    </>
  )
}

export default AttributeForm
