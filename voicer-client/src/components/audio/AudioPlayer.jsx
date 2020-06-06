import React, {useState} from 'react'


const AudioPlayer = ({samples}) => {

  const [sampleIndex, setSampleIndex] = useState(0)

  const nexthandler = (e) => {
    e.preventDefault()
    setSampleIndex(sampleIndex+1)
  } 

  const prevhandler = (e) => {
    e.preventDefault()
    setSampleIndex(sampleIndex - 1)
  } 

  return(<>

    <div className="title">
      <p>{`${samples[sampleIndex].title}`}</p>
    </div>

    <div className="carousel">

        <button
          onClick={(e)=>prevhandler(e)}
          disabled={sampleIndex === 0}
        >&larr;</button>

      <div className="description">
        <p>{samples[sampleIndex].description}</p>
        <p>Attributes</p>
      </div>

        <button
          onClick={(e)=>nexthandler(e)}
          disabled={sampleIndex === sampleIndex.length - 1}
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