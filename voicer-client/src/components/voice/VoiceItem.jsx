import React, { useState, useEffect } from "react"

import AudioPlayer from "../audio/AudioPlayer"
import EditProfile from "./EditProfile"
import AudioUploader from "../audio/AudioUploader"
import AddJobForm from "../addJobForm/AddJobForm"
import AttributeForm from "./AttributeForm"

import useStyles from './VoiceStyle'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'

const VoiceItem = ({ data, token, bio, currentDisplayName }) => {
  const [edit, setEdit] = useState(false)
  const [crud, setCrud] = useState(false)

  const classes = useStyles()

  //if logged in and your record => you can edit
  useEffect(() => {
    if (token && token.display_name === currentDisplayName) {
      setCrud(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //useEffect(()=> {console.log(`crud: ${crud} edit: ${edit}`)},[crud, edit])

  return edit ? (
    <article className="voiceItem">
      {crud && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault()
              setEdit(!edit)
            }}
          >
            cancel edit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              setEdit(!edit)
            }}
          >
            submit edit
          </button>
          <EditProfile profileData={data} token={token} />
        </>
      )}
    </article>
  ) : (
    <Card className={classes.voiceCard}>
      {crud && (
        <button
          onClick={(e) => {
            e.preventDefault()
            setEdit(!edit)
          }}
        >
          Edit My Info
        </button>
      )}

      <CardContent className="profileHeader">

        <Avatar
          className={classes.voiceAvatar}
          alt={data.display_name}
          src={data.avatar}
        />

        <div className="profileInfo">


          <Typography variant="h6">
            {data.display_name}
          </Typography>

          <Rating name="read-only" value={data.rating} readOnly />

          <Typography>
            {data.jobsCompleted} Jobs Completed
          </Typography>


          {bio && <p>{data.location}</p>}
          {bio && <button>Invite to Apply</button>}
        </div>

        <div className="profileSamples">
          {data.samples[0] !== undefined && (
            <AudioPlayer samples={data.samples} />
          )}
          {crud && <AudioUploader />}
          {crud && <AddJobForm />}
          {crud && <AttributeForm />}
        </div>

      </CardContent>
      {bio && (
        <div className="profileBio">
          <p>{data.bio}</p>
        </div>
      )}
    </Card>
  )
}

export default VoiceItem
