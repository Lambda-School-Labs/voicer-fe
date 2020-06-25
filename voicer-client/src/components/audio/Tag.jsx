import React from "react"


import useStyles from '../voice/VoiceStyle'
import Chip from '@material-ui/core/Chip'

const Tag = ({ tags, setTags, proptags, name, id }) => {
  const classes = useStyles()

  return (
  <Chip
    classes={{
      root: classes.chip,
      label: classes.chip,
    }}
    label={name}
    key={name}
    color='secondary'
  />
  )
}

export default Tag