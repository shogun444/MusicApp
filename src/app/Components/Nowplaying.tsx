
'use client'

import { AudioLines, Pause, Play, SkipBack, SkipForward } from "lucide-react"
import ReactPlayer from "react-player/youtube"
import React from 'react'

export default function Nowplaying(){
  return(<>
  <div className="  ">
<ReactPlayer
controls
></ReactPlayer>

  
  </div>
  
  </>)
}

/*

<div className="flex items-center justify-center w-fit rounded-2xl  bg-white">
  <div className="flex flex-col bg-neutral-100 rounded-xl w-fit p-4 gap-4">

    <div className="flex items-center gap-4">
      <img
        className="w-20 h-20 rounded-md object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAds2r3JMk7KwWBX6G2yt4opAckx908Ma-Cg&s"
        alt="cover"
      />
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg">My Eyes</h1>
        <h2 className="text-sm text-gray-600">Travis Scott</h2>
      </div>
      <span className="ml-auto">
        <AudioLines />
      </span>
    </div>


    <div className="flex justify-center items-center gap-6">
      <span className="cursor-pointer">
        <SkipBack />
      </span>
      <span className="cursor-pointer">
        <Play />
      </span>
      <span className="cursor-pointer">
        <SkipForward />
      </span>
    </div>
  </div>
</div>
*/
