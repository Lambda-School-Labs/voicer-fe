import React, { useState, useContext, useEffect } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"
import { InputGroup, FormControl } from "react-bootstrap"

const AttributeForm = ({proptags, id, crud}) => {
  console.log("crud", crud)
  const [tags, setTags] = useState([])

  const { refreshAppHandler, url } = useContext(DataContext)

  const makeTag = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value])
      e.target.value = ""
    }
  }

  useEffect(() => {
    setTags(proptags)
  },[proptags])

  const stopSubmit = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(tags)
    tags.forEach((tag) => {
      let obj = {
        id: id,
        title: tag
      }
      console.log(obj)

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
  return (
    <>

      {crud 
      ?
        (
        <form onSubmit={stopSubmit}>
        <div className="container">
          <div className="tag-container">
            {tags.map((tag) => (
              <Tag name={tag} crud={crud} />
            ))}
            <InputGroup className="mb-3 tags-text">
              <FormControl
                // {...tagsInput}
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

const Tag = (props, {crud}) => {
  const [hover, setHover] = useState(false)

  const deleteTag = (e) => {
    //code goes here
  }

  return (
    <>
      <span className="tag">
        {props.name}


        {<i className="material-icons tag-delete-icon">delete</i> }
        
      </span>
    </>
  )
}

export default AttributeForm
