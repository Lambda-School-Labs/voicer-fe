import React, {useState} from 'react'
import AttributeForm from "../voice/AttributeForm"


const AudioPlayer = ({samples, crud}) => {

  const [sampleIndex, setSampleIndex] = useState(0)
  const [sampleLength] = useState(samples.length)

  const nexthandler = (e) => {
    e.preventDefault()
    sampleIndex === (sampleLength - 1) ? setSampleIndex(0) : setSampleIndex(sampleIndex+1)
  } 

  const prevhandler = (e) => {
    e.preventDefault()
    sampleIndex === 0 ? setSampleIndex(sampleLength - 1) : setSampleIndex(sampleIndex - 1)
  } 
console.log("Samples", samples)
  return(<>
    <div className="title">
      <p>{`${sampleIndex+1}/${sampleLength} ${samples[sampleIndex].title}`} <span>{crud ? <i className="material-icons">add</i> : ""}</span></p>
    </div>
    <div className="carousel">
        <button
          onClick={(e)=>prevhandler(e)}
        >&larr;</button>
      <div className="description">
        <p>{samples[sampleIndex].description}</p>
        
      </div>
      <div className="attributes-container">
        <AttributeForm crud={crud} proptags={samples[sampleIndex].tags} id={samples[sampleIndex].id}/>
      {/* {samples[sampleIndex].tags.map(t => <span className='attribute'>{t}</span>)} */}
      </div>

        <button
          onClick={(e)=>nexthandler(e)}
        >&rarr;</button>
    </div>
    <audio 
      src={samples[sampleIndex].s3_location}
      className="player"
      preload="auto" 
      controls
      controlsList="nodownload"
    />
  </>)
  
}

export default AudioPlayer