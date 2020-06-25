import React, { useState, useContext, useEffect } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"

import Tag from './Tag'

import useStyles from '../voice/VoiceStyle'
import ChipInput from 'material-ui-chip-input'

const AttributeForm = ({ proptags, id, crud, reset }) => {
  const [tags, setTags] = useState([])
 
  const {url} = useContext(DataContext)
  const classes = useStyles()

  const handleSubmit = (tag) => {
    if (tags.length > 6 ) {
      alert('Tags limited to 6 per sample, please delete some')
    } else {
        let obj = {
          id: id,
          title: tag.charAt(0).toUpperCase() + tag.slice(1)
        }
  
        axios
          .post(`${url}/api/attribute`, obj)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            reset()
          })
    }
  }

  const deleteTag = (tag) => {
      axios
        .delete(`${url}/api/avs`, {data: {id:id, title:tag}} )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          reset()
        })
  }

  useEffect(() => {
    setTags(proptags)
  }, [proptags])

  return (
    <>
      {crud ? (
        <>
          <ChipInput
            classes={{
              root: classes.chip,
              label: classes.chip,
            }}
            // inputValue={tags}
            value={tags}
            onAdd={handleSubmit}
            onDelete={deleteTag}
            color='secondary'
          />
        </>
      ) : (
        <div>
          {tags && tags.map((tag) => (
                <Tag name={tag}  />
              ))}
        </div>
      )}
    </>
  )
}

export default AttributeForm
