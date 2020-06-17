import React, { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "../../context/DataContext"
import axios from "axios"
import VoiceItem from "./VoiceItem"

import useStyles from './VoiceStyle'

export default function Voice() {
  const [nameMatchesDB, setNameMatchesDB] = useState(true)
  const [data, setData] = useState([])
  const [voiceSearch, setVoiceSearch] = useState("")
  const [searchTags, setSearchTags] = useState("")
  const [strict, setStrict] = useState(true)

  const { token, url } = useContext(DataContext)

  const displayName = useParams().displayName
  const classes = useStyles()

  useEffect(() => {
    setSearchTags(`?tag=${voiceSearch.split(" ")}`)

    console.log("SEARCHTAGS", searchTags)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceSearch])

  useEffect(() => {
    if (displayName) {
      console.log("there is a param")
      axios
        .get(`${url}/api/users?display_name=${displayName}`)
        .then((result) => {
          console.log('XXXXXXXXXXXXXX', result.data)
          setData(result.data)

          if (result.data[0]) {
            setNameMatchesDB(true)
          } else {
            setNameMatchesDB(false)
          }
        })
        .catch((err) => {
          console.log(err)
          setNameMatchesDB(true)
        })
    } else {
      //parse search string into multiple search items
      //console.log(`sending to: ${url}/api/users${searchTags}`)
      axios
        .get(`${url}/api/users${searchTags}`)
        .then((result) => {

          setData(result.data)
          
          setNameMatchesDB(false)
        })
        .catch((err) => {
          console.log(err)
          setNameMatchesDB(true)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTags])



  return (
    <section className={classes.voicePage}>
      {!nameMatchesDB && displayName !== undefined && (
        <article className="error">
          The Display Name you specified is either unavailable, or doesn't exist
        </article>
      )}
      {displayName !== undefined && nameMatchesDB ? (
        <>
          {data.map((voice) => (
            <VoiceItem
              key={voice.display_name}
              data={voice}
              bio={true}
              token={token}
              currentDisplayName={displayName}
            />
          ))}
        </>
      ) : (
        <>
          <label>Search Attributes:</label>
          <input
            type="text"
            value={voiceSearch}
            onChange={(e) => {
              setVoiceSearch(e.target.value)
            }}
          />
          <div>
            <input
              type="radio"
              name="search"
              value="strict"
              checked
              onClick={() => {
                setStrict(true)
              }}
            />
            <label htmlFor="strict">Strict Search</label>
          </div>

          <div>
            <input
              type="radio"
              name="search"
              value="expansive"
              onClick={() => {
                setStrict(false)
              }}
            />
            <label htmlFor="expansive">Expansive Search</label>
          </div>

          {data.map((voice) => (
            <a key={voice.display_name} href={`/voice/${voice.display_name}`}>
              <VoiceItem data={voice} />
            </a>
          ))}
        </>
      )}
    </section>
  )
}
