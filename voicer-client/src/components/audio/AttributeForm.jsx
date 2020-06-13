import React, { useState, useContext } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"
import { InputGroup, FormControl } from "react-bootstrap"
import Tag from './Tag'

const AttributeForm = ({proptags, id, crud}) => {
  const [tags, setTags] = useState(proptags)

  const { url } = useContext(DataContext)

  const makeTag = (e) => {
    e.preventDefault()
    if (e.key === "Enter") {
      // if the tag is already in tags, don't do anything
      if (tags.includes(e.target.value)) {
        e.target.value = ""
      } else {
        setTags([...tags, e.target.value])
        e.target.value = ""
      }
    }
  }

  const stopSubmit = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (tags.length > 7 ) {
      alert('Tags limited to 7 per sample, please delete some')
    } else {
      tags.forEach((tag) => {
        let obj = {
          id: id,
          title: tag
        }
  
        axios
          .post(`${url}/api/attribute`, obj)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }
  }
  return (
    <>
      {crud 
      ?
        (
          <>
        <form onSubmit={stopSubmit}>
        <div className="container">
          <div className="tag-container">
            {tags.map((tag) => (
              <Tag name={tag} crud={crud} id={id} tags={tags} setTags={setTags} proptags={proptags} />
            ))}
            <InputGroup className="mb-3 tags-text">
              <FormControl
                onKeyUp={makeTag}
                className="tag-input"
              />
            </InputGroup>
          </div>
        </div>

      </form>
              <button onClick={handleSubmit}>
              Add Tags to Profile
            </button>
            </>
        )
      :
      <div className="tag-container">
      {tags.map((tag) => (
              <Tag name={tag}  />
            ))}
      </div>
      }
    </>
  )
}


export default AttributeForm
