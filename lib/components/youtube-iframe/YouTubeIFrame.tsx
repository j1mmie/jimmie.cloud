// Note: YouTubeIFrame component with custom embeded video id, width, and height.
// Default width and height are 560 and 315 respectively.

import React from 'react'
import './YouTubeIFrame.scss'
import { youTubeFacadeDoc } from './YouTubeFacade'

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

const allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

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
  const params = new URLSearchParams()

  if (autoPlay) {
    params.set('autoplay', '1')
    params.set('mute', '1')
  }

  if (hideControls) {
    params.set('controls', '0')
    params.set('showinfo', '0')
    params.set('rel', '0')
    params.set('modestbranding', '1')
  }

  if (loop) {
    params.set('loop', '1')
    params.set('playlist', videoId)
  }

  if (startTime) {
    params.set('start', convertTimeStringToSeconds(startTime).toString())
  }

  let src = `https://www.youtube.com/embed/${videoId}`

  const query = params.toString()
  if (query) {
    src += `?${query}`
  }

  // Autoplaying embeds are meant to be moving when you see them, so they get
  // the real player straight away; lazy loading still keeps it off the
  // critical path until it's near the viewport
  const srcDoc = autoPlay ? undefined : youTubeFacadeDoc(videoId, src)

  const iframe = <iframe
    className="youtube-iframe"
    width={width}
    height={height}
    src={src}
    srcDoc={srcDoc}
    title={title}
    frameBorder="0"
    allow={allow}
    allowFullScreen
    loading="lazy"
  />

  return (
    <div className="youtube-iframe-container">
      {iframe}
    </div>
  )
}

export default YouTubeIFrame
