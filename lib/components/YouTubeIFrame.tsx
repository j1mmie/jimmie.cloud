// Note: YouTubeIFrame component with custom embeded video id, width, and height.
// Default width and height are 560 and 315 respectively.

import React from 'react'

interface YouTubeIFrameProps {
  videoId:string,
  title:string,
  width?:number
  height?:number,
  startTime?:string
}

function convertTimeStringToSeconds(timeString:string) {
  const [minutes, seconds] = timeString.split('m')
  return parseInt(minutes) * 60 + parseInt(seconds.slice(0, -1))
}

const YouTubeIFrame:React.FC<YouTubeIFrameProps> = ({
  videoId,
  title,
  width = 560,
  height = 315,
  startTime = undefined,
}) => {
  let src = `https://www.youtube.com/embed/${videoId}`

  if (startTime) {
    const startSecs = convertTimeStringToSeconds(startTime)
    src += `?start=${startSecs}`
  }

  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeIFrame
