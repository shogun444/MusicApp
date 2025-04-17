'use client'

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useSession } from "next-auth/react"
import { prisma } from "@/prisma"
import { url } from "inspector"
import { Circle, LoaderCircle } from "lucide-react"

export default  function SendRequest() {
  const [loading,setLoading] = useState(false)
const InputRef = useRef<HTMLInputElement>(null)
const session = useSession()
async function AddSong(){
  
  try {
    setLoading(true)
    const userId  = await axios.post('/api/getUserId',{
      email : session.data?.user?.email
    })
    const Id = userId.data.streamerId
      if(userId){
         await axios.post('api/streams',{
          streamerId : Id,
          url : InputRef.current?.value
        })
      }
      setLoading(false)

  } catch (error) {
    
  }
  finally { 
    setLoading(false)
  }
}



  return (
    <>
    
      <input
        ref={InputRef}
        placeholder="Paste a Song URL here"
        type="text"
        className="w-full p-4 rounded-2xl border-2 border-neutral-400 shadow-sm text-lg"
       
      />
      <Button  onClick={AddSong} size={'lg'} >
       {loading ?  <h1 className="flex justify-center items-center ">Please wait <LoaderCircle className="animate-spin ml-3"/></h1>: 'Add to Queue'} 
      </Button>
    </>
  )
}
