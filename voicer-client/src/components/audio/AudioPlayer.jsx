import React, {useState} from 'react'


const AudioPlayer = ({samples}) => {

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

  return(<>
    <div className="title">
      <p>{`${sampleIndex+1}/${sampleLength} ${samples[sampleIndex].title}`}</p>
    </div>
    <div className="carousel">
        <button
          onClick={(e)=>prevhandler(e)}
        >&larr;</button>
      <div className="description">
        <p>{samples[sampleIndex].description}</p>
        <p>Attributes</p>
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
      controlslist="nodownload"
    />
  </>)
  
}

export default AudioPlayer