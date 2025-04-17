import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Disc3, ListMusic, Star, ThumbsUp, Youtube } from "lucide-react";
import { Redirect } from "./Components/Redirect";


export default function Home() {

const features=[{
  icon : <Disc3 className="p-2 rounded-full bg-neutral-700 " size={36}/>,
  heading : '  Ad-Free Playback',
  description : 'Enjoy uninterrupted music without any ads or distractions. Pure musical bliss.'
},
{
  icon : <ListMusic  className="p-2 rounded-full bg-neutral-700 " size={36}/>,
  heading : 'Personalized Playlists',
  description : 'Create and share custom playlists with your favorite tracks from different sources.'
},
{
  icon : <ThumbsUp className="p-2 rounded-full bg-neutral-700 " size={36}/>,
  heading : 'Community Voting',
  description : 'Upvote or downvote songs to decide what plays next. Democratic music selection.'
},
{
  icon : <Youtube className="p-2 rounded-full bg-neutral-700 " size={36}/>,
  heading : 'YouTube Integration',
  description : 'Simply paste YouTube links to add songs to the queue. '
},{
  icon : <Star className="p-2 rounded-full bg-neutral-700 " size={36}/>,
  heading : '24/7 Support',
  description : 'Get help whenever you need it with our dedicated support team.'
},
{
  icon: <Clock className="p-2 rounded-full bg-neutral-700" size={36} />,
  heading: 'Scheduled Queues',
  description: 'Plan and schedule song queues in advance for parties, workouts, or chill sessions.'
}


]


  const items = [{
    number :   '10k+',
    features : 'Active Users'
  },
  {
    number :   '50k+',
    features : 'Songs Shared'
  },
  {
    number :   '100%',
    features : 'Ad-Free'
  },
  {
    number :   '24/7',
    features : 'Music Streaming'
  }]
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-6 py-12 overflow-hidden">

      
      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-7xl text-neutral-50 pt-20  font-semibold">
          Stream Music Together, Ad-Free
        </h1>
        <h2 className="mt-9 font-semibold text-xl text-neutral-300">
          Share your favorite YouTube songs, play them without ads, and let the community vote on what plays next.
        </h2>

        <div className="space-x-8 mt-7">
          <Button className="text-lg " size={'lg'}>Get Started <span className="pl-3 "><ArrowRight/></span></Button>
          <Button className="text-zinc-600 text-lg " variant={'outline'} size={'lg'}>How it Works</Button>
        </div>
      </div>

<div className="flex justify-center items-center mt-20 p-40 space-x-40">
{items.map((itm,index)=>(<div className="flex flex-col justify-center items-center" key={ index}>
  <h1 className="text-neutral-400 font-semibold text-3xl">{itm.number}</h1><h1 className="text-neutral-500 font-semibold text-2xl">{itm.features}</h1></div>))}
</div>
     

      <div className="flex flex-col justify-center items-center w-full">

        <h1 className="text-7xl text-neutral-50 pt-20  font-semibold">   Elevate Your Music Experience</h1>
   
       
      <h1 className="mt-9 font-semibold text-xl text-neutral-300">Discover what makes VibeLink different from other music platforms. Our unique features create a community-driven music experience.</h1>
      </div>

      <div className="grid grid-cols-3 ml-15  justify-center items-center mt-20 p-4 gap-20">
  {features.map((itm, index) => (
    <div
      className="  w-100 px-3 py-5  rounded-md border-1 shadow-lg border-neutral-700"
      key={index}
    >
   
        <span>{itm.icon }</span>
        <h1 className="text-neutral-300 font-semibold text-2xl mt-6">{itm.heading}</h1>

      <h1 className="text-neutral-500 font-semibold mt-2 text-lg">{itm.description}</h1>
    </div>
  ))}
</div>

    </div>
  );
}
