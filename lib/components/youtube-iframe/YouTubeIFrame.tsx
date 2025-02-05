// Note: YouTubeIFrame component with custom embeded video id, width, and height.
// Default width and height are 560 and 315 respectively.

import React from 'react'
import './YouTubeIFrame.scss'

interface YouTubeIFrameProps {
  videoId:string,
  title:string,
  width?:string
  height?:string,
  startTime?:string,
  autoPlay?:boolean,
  loop?:boolean,
  hideControls?:boolean
}

function convertTimeStringToSeconds(timeString:string) {
  const [minutes, seconds] = timeString.split('m')
  return parseInt(minutes) * 60 + parseInt(seconds.slice(0, -1))
}

const YouTubeIFrame:React.FC<YouTubeIFrameProps> = ({
  videoId,
  title,
  width  = '560',
  height = '315',
  startTime = undefined,
  autoPlay = false,
  loop = false,
  hideControls = false
}) => {
  let src = `https://www.youtube.com/embed/${videoId}`

  const allowList = [
    'accelerometer',
    'clipboard-write',
    'encrypted-media',
    'gyroscope',
    'picture-in-picture',
  ]

  const params = []

  if (autoPlay) {
    params.push('autoplay=1')
    params.push('mute=1')

    allowList.push('autoplay=1')
    allowList.push('mute=1')
  }

  if (hideControls) {
    params.push('controls=0')
    params.push('showinfo=0')
    params.push('rel=0')
    params.push('modestbranding=1')

    allowList.push('controls=0')
    allowList.push('mute=1')
    allowList.push('showinfo=0')
    allowList.push('rel=0')
    allowList.push('modestbranding=1')
  }


  if (loop) {
    params.push('loop=1')
    params.push(`playlist=${videoId}`)
    allowList.push('loop')

  }

  if (params.length > 0) {
    src += `?${params.join('&')}`
  }

  if (startTime) {
    const startSecs = convertTimeStringToSeconds(startTime)
    src += `?start=${startSecs}`
  }

  const allowStr = allowList.join('; ')

  const iframe = <iframe
    className="youtube-iframe"
    width={width}
    height={height}
    src={src}
    title={title}
    frameBorder="0"
    allow={allowStr}
    allowFullScreen
  />



  return (
    <div className="youtube-iframe-container">
      {iframe}
    </div>
  )
}

export default YouTubeIFrame
