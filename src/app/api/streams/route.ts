import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
//@ts-ignore
import  youtubesearchapi from "youtubesearchapi"
const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
const createStreamerSchema = z.object({
  userId : z.string(),
  url : z.string(),
})
export async function POST(req:NextRequest){
  try {
    const validData = createStreamerSchema.safeParse(await req.json())
    if(validData.success){
      const isYt =  regex.test(validData.data.url)
      if(!isYt){
        return NextResponse.json({msg : "Please enter a valid Youtube Link!"})
    }
    const   eId  = validData.data.url.split('?v=')[1]
     const res = await    youtubesearchapi.GetVideoDetails(eId)
     console.log(res)
 const Stream =  await prisma.stream.create({
        data : {
          
          userId : validData.data.userId,
          url : validData.data.url,
          type : "Youtube",
          extractedId : eId
        }
      })
      return NextResponse.json({msg : 'StreamCreated',id : Stream.id},{status : 200})
    }
    
   }
    
   
   catch (error) {
    return NextResponse.json({msg : 'Error while adding a Stream'},{status : 411})
  }



}

export async function GET(req : NextRequest) {
  const streamer = req.nextUrl.searchParams.get('streamerId')

  const stream = await prisma.stream.findMany({
    where : {
      userId : streamer?? ""}
  })

  return NextResponse.json({
    stream
  })
}