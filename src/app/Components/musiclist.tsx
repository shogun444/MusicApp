// MusicList.tsx

"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { ArrowDown, ArrowUp, AudioLines } from "lucide-react"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"


interface Props {
  src: string,
  title: string,
  artist: string
}

export default function MusicList() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await axios.get('http://localhost:3000/api/streams')
      setData(res.data.streams)
      console.log(res.data.streams)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }
  async function fetchSong() {
    const res =  await axios.get('api/streams')

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="p-4  bg-neutral-200 rounded-2xl m-3 items-center w-[70%] mx-auto">
      {loading ? (
        // Display Skeleton Loader
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="grid grid-cols-2 bg-neutral-300 p-3 px-35 m-10 rounded-xl shadow-lg items-center">
              <div className="flex items-center gap-4">
                <Skeleton width={180} height={100} borderRadius={8} />
                <div>
                  <Skeleton width={150} height={20} />
                  <Skeleton width={100} height={15} />
                </div>
              </div>
              <div className="flex justify-center">
                <Skeleton width={100} height={40} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Display the fetched data
        data.map((itm, index) => (
          <div key={index} className="grid grid-cols-3 bg-neutral-300 p-3 m-10 rounded-xl shadow-lg items-center">
            <div className="flex items-center gap-4">
           
              <img className="rounded-lg w-46 h-26 object-cover" src={itm.thumbnail} alt="Song Cover" />
              <div>
                <h1 className="font-semibold text-base ">  {itm.title}</h1>
                <h2 className="text-sm text-gray-700">{itm.artist}    <AudioLines /></h2>
            
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={()=>fetchSong}  className="bg-green-500 px-7 p-2 text-white hover:bg-green-500 rounded-lg shadow-lg font-semibold">Play</button>
            </div>

            <div className="flex gap-5 justify-center group:">
            <span className="p-2 border-1 rounded-xl shadow-lg hover:cursor-pointer hover:border-green-400  hover:text-green-400 "><ArrowUp/></span>
            <span className="p-2 border-1 rounded-xl shadow-lg hover:cursor-pointer   hover:border-red-400 hover:text-red-400"><ArrowDown/></span>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
