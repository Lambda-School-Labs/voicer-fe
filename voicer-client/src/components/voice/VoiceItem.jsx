import React, { useState, useEffect, useContext } from "react"
import { DataContext } from "../../context/DataContext"
import VoiceCard from './VoiceCard'
import FullWidthTabs from "./ProfileTabPanel"

const VoiceItem = ({ data, bio, currentDisplayName, reset }) => {

  const [crud, setCrud] = useState(false)

  const { token } = useContext(DataContext)

  //if logged in and your record => you can edit
  useEffect(() => {
    if (token && token.display_name === currentDisplayName) {
      setCrud(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return crud ? (
    <FullWidthTabs
      crud={crud}
      data={data}
      token={token}
      bio={bio}
      currentDisplayName={currentDisplayName}
      reset={reset}
    />
  ) : (
    <VoiceCard
      data={data}
      token={token}
      bio={bio}
      currentDisplayName={currentDisplayName}
    />
  )
}

export default VoiceItem