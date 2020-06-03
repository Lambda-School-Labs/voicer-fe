import React, { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "../../context/DataContext"
import axios from "axios"
import JobsCard from "./JobsCard"

import useStyles from './MarketPlaceStyle'
// import { jobs } from "../../fakedata/jobs"
import AddJobForm from "../addJobForm/AddJobForm"

import Hero from "../hero/Hero"

export default function Marketplace(props) {
  const [jobMatchesDB, setJobMatchesDB] = useState(true)
  const [data, setData] = useState([])
  const { token, url, refreshApp } = useContext(DataContext)

  const classes = useStyles()
  const jobId = useParams().jobId

  console.log(props)

  useEffect(() => {
    if (jobId) {
      console.log("we are in 'detailed job mode")
      axios
        .get(`${url}/api/jobs/${jobId}`)
        .then((result) => {
          console.log(result.data)
          setData([result.data])
          if ([result.data][0] !== "") {
            console.log("FIRST")
            setJobMatchesDB(true)
          } else {
            console.log("SECOND")
            setJobMatchesDB(false)
          }
        })
        .catch((err) => {
          console.log(err)
          setJobMatchesDB(true)
        })
    } else {
      axios
        .get(`${url}/api/jobs`)
        .then((result) => {
          console.log("THIRD")

          console.log(result)
          setData(result.data.found)
          setJobMatchesDB(false)
        })
        .catch((err) => {
          console.log(err)
          setJobMatchesDB(false)
        })
    }
  }, [refreshApp])

  /*
  ------------------------------------------------------------

  This section adds the logic for what to display.
  - if no jobId --> show all jobs
  - if jobId isn't in the DB --> display a helpful error message
  - if jobId is in the DB --> show that specific job only 

  -------------------------------------------------------------
  */

  let display
  if (jobId === undefined) {
    display = <MultipleJobs data={data} />
  }
  if (jobId !== undefined && jobMatchesDB) {
    display = <SingleJob data={data} token={token} />
  }
  if (jobId !== undefined && !jobMatchesDB) {
    display = <JobDoesntExist />
  }

  return (
    <section className={classes.marketplace}>
      {display}
    </section>
  )
}

const JobDoesntExist = () => {
  return (
    <article>
      The job you are looking for does not exist
    </article>
  )
}

const MultipleJobs = (props) => {
  return (
    <>
      {props.data.map((job) => (
        <a key={job.id} href={`/job/${job.id}`}>
          <JobsCard data={job} />
        </a>
      ))}
    </>
  )
}

const SingleJob = (props) => {
  console.log(props)
  return (
    <>
      {props.data.map((job) => (
        <JobsCard key={job.id} data={job} token={props.token} />
      ))}
    </>
  )
}
