import React, { useEffect, useState } from "react"
import EditJob from "./EditJob"

const JobsCard = ({ token, data }) => {
  const [edit, setEdit] = useState(false)
  const [crud, setCrud] = useState(false)

  useEffect(() => {
    if (token && token.user_id === data.creator) {
      setCrud(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(crud, edit)

  return edit ? (
    <article className="jobCard">
      {crud && (
        <>
          <EditJob data={data} token={token} setEdit={setEdit} />
        </>
      )}
    </article>
  ) : (
    <article className="jobCard">
      {crud && (
        <button
          onClick={(e) => {
            e.preventDefault()
            setEdit(!edit)
          }}
        >
          Edit job info
        </button>
      )}
      <div className="jobTitle">
        <h3>{data.title}</h3>
      </div>
      <div className="jobBody">
        <div className="jobImage">
          <img
            className="jobCardStockImage"
            src={`https://picsum.photos/id/${data.id}/87/87?grayscale`}
            alt="future for attention"
          />
        </div>
        <div className="jobInfo">
          <p>This job pays ${data.payrate}/hour</p>
          <p>Job poster: {data.creator_id}</p>
          <button type="button" className="applyButton">
            Apply
          </button>
        </div>
      </div>
      <div className="jobDescription">
        <p>
          {data.description}
        </p>
      </div>
    </article>
  )
}

export default JobsCard
