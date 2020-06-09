import React, { useState, useEffect } from "react"
import AudioPlayer from "../audio/AudioPlayer"
import EditProfile from "./EditProfile"
import AudioUploader from "../audio/AudioUploader"
import AddJobForm from "../addJobForm/AddJobForm"
import AttributeForm from "./AttributeForm"

const VoiceItem = ({ data, token, bio, currentDisplayName }) => {
  const [edit, setEdit] = useState(false)
  const [crud, setCrud] = useState(false)

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
    <article className="voiceItem">
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
      <div className="profileHeader">
        <div className="profileImage">{/* photo placeholder */}</div>
        <div className="profileInfo">
          <h2>{`${data.first_name} ${data.last_name}`}</h2>
          <h3>{data.display_name}</h3>
          {bio && <p>{data.location}</p>}
          <div className="stars">
            <span role="img" aria-label="Stars">
              ⭐️⭐️⭐️⭐️⭐️
            </span>
          </div>
          <p>{data.jobsCompleted} Jobs Completed</p>
          {bio && <button>Invite to Apply</button>}
        </div>
        <div className="profileSamples">
          {data.samples[0] !== undefined && (
            <AudioPlayer samples={data.samples} edit={edit} />
          )}
          {crud && <AudioUploader />}
          {crud && <AddJobForm />}
        </div>
      </div>
      {bio && (
        <div className="profileBio">
          <p>{data.bio}</p>
        </div>
      )}
    </article>
  )
}

export default VoiceItem
