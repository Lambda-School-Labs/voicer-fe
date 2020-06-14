import React, { useContext } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"

const Tag = (props) => {
    const {url} = useContext(DataContext)  
  
    const deleteTag = (e) => {
      e.preventDefault()

      const deletedTag = e.target.parentNode.textContent.slice(0,-6)
      const i = props.tags.indexOf(deletedTag)

      const remove = (li, index) => {
        return [...props.tags.slice(0,index), ...props.tags.slice(index+1, props.tags.length)]
      }
    
      props.setTags(remove(props.tags, i))
  
      // Only make a .delete() call if the added attribute is not tempororary
      if (props.proptags.includes(deletedTag)) {
        // The attribute is not temporary, need to make an axios call
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
        // Tag was temporary, we do nothing. Rock on. 
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

  export default Tag