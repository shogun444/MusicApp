import { Button } from "@/components/ui/button"
import MusicList from "../Components/musiclist"
import Nowplaying from "../Components/Nowplaying"
import SendRequest from "../Components/SendRequest"

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-neutral-500 to-neutral-200 p-6 flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col mt-5 justify-center items-center">
          <h1 className="text-neutral-800 text-3xl font-semibold text-center">
            Drop the Link. Fuel the Party.
          </h1>

          <div className="flex gap-4 justify-center items-center w-full max-w-3xl mt-8">
            <SendRequest />
          </div>

          <h1 className="font-semibold text-sm mt-10 text-center px-4 max-w-2xl">
            Paste a YouTube song, watch it climb or crash. One vote can change the vibe.
          </h1>
        </div>

        {/* Now Playing and Upcoming Songs */}
        <div className="flex flex-col justify-center items-center flex-grow">
          <div>
            <h1 className="font-bold text-neutral-700 text-center text-2xl m-7">Now Playing</h1>
            <Nowplaying />
          </div>

          <div className="m-2">
            <h1 className="font-bold text-neutral-700 text-center text-2xl mt-10">Upcoming Songs</h1>
            <MusicList />
          </div>
        </div>
      </div>
    </>
  )
}
