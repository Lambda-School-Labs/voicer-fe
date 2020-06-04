import React, { useEffect, useState } from "react"
import EditJob from "./EditJob"

import useStyles from './MarketPlaceStyle'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const JobsCard = ({ token, data }) => {
  const [edit, setEdit] = useState(false)
  const [crud, setCrud] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    if (token && token.user_id === data.creator) {
      setCrud(true)
    }
  }, [])

  console.log(crud, edit)

  return edit ? (
    <Card className={classes.jobCard}>
      {crud && (
        <>
          <EditJob data={data} token={token} setEdit={setEdit} />
        </>
      )}
    </Card>
  ) : (
    <Card className={classes.jobCard}>
      {crud && (
        <Button
          onClick={(e) => {
            e.preventDefault()
            setEdit(!edit)
          }}
        >
          Edit job info
        </Button>
      )}

      <Card className={classes.jobTitle}>
        <Typography variant="p" component="h3">
          {data.title}
        </Typography>
      </Card>

      <Card className={classes.midCard}>
        <CardContent className={classes.jobBody}>
          <div>
            <img
              className={classes.jobImage}
              src={`https://picsum.photos/id/${data.id}/87/87?grayscale`}
              alt="Stock image for beautification"/>
          </div>
          <div className={classes.jobInfo}>
            <Typography variant="body1" >This job pays ${data.payrate}/hour</Typography>
            <Typography variant="body2" >Job poster: {data.creator_id}</Typography>
          </div>
        </CardContent>

        <Card className={classes.jobDescription}>
          <Typography variant="body1">
            {data.description}
          </Typography>
        </Card>
      </Card>
    </Card>
  )
}

export default JobsCard
