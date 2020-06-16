import React, { useState, useContext, useEffect } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"
import { InputGroup, FormControl } from "react-bootstrap"

const AttributeForm = ({proptags, id, crud}) => {
  const [tags, setTags] = useState(proptags)

  const { refreshAppHandler, url } = useContext(DataContext)

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

  // useEffect(() => {
  //   setTags(proptags)
  // },[proptags])

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
                // {...tagsInput}
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
      {tags && tags.map((tag) => (
              <Tag name={tag}  />
            ))}
      </div>
      }
    </>
  )
}

const Tag = (props) => {
  const {url} = useContext(DataContext)
  console.log(props.tags, props.proptags)


  const deleteTag = (e) => {
    e.preventDefault()
    // detetedTag is the text of the tag
    // node is the actual span element we need to remove 
    const deletedTag = e.target.parentNode.textContent.slice(0,-6)

    const i = props.tags.indexOf(deletedTag)

    const remove = (li, index) => {
      return [
        ...props.tags.slice(0,index),
        ...props.tags.slice(index+1, props.tags.length)
      ]
    }
  
    props.setTags(remove(props.tags, i))

    // Only make a .delete call if the added attribute is not temporary
    if (props.proptags.includes(deletedTag)) {
      // The attribute is not temporary, need to make an axio s
      const name = props.name 
      const id = props.id
  
      axios
        .delete(`${url}/api/avs`, {data: {id:id, title:name}} )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      // Tag is temporary, we do nothing
    }



  }

  return (
    <>
      <span className="tag">
        {props.name}
        {<i className="material-icons tag-delete-icon" onClick={deleteTag}>delete</i> }
      </span>
    </>
  )
}

export default AttributeForm
