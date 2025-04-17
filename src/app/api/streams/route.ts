import { prisma } from "@/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'


const StreamSchema = z.object({
  streamerId : z.string(),
  url : z.string()
})
const YTRegex = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|shorts\/)?[a-zA-Z0-9_-]{11,100}/;




export async function POST(req : NextRequest){
const ValidData = StreamSchema.safeParse(await req.json())
  if(!ValidData.success){
    return NextResponse.json({msg : "Invalid Link or Invalid Streamer"},{status :411})
  }

  try {

    const checkUrl = YTRegex.test(ValidData.data.url)
    if(!checkUrl){
   return NextResponse.json({msg : 'The Link is Not Valid'})}
    const extractId = ValidData.data.url.split('?v=')[1]

    const res = await axios.get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${extractId}&format=json`)

    const title = res.data.title
    const thumbnail = res.data.thumbnail_url

   
    const stream = await prisma.stream.create({
      data : {
        userId : ValidData.data.streamerId,
        url : ValidData.data.url,
        type : 'Youtube',
        extractedId : extractId,
        title : title ,
        thumbnail : thumbnail || '/images.png'
      },
      select : {
        id : true , 
        title : true,
        thumbnail : true
      }
    })

    return NextResponse.json({msg : 'Stream Created',stream},{status : 201})
  } catch (error) {
    return NextResponse.json({msg : 'Signup First'},{status :411})
  }
}

export async function GET(){
  try {
    const streams = await prisma.stream.findMany({
    })
    if(streams.length>0){
      return NextResponse.json({msg : 'The Available Streams are:', streams})
    }
   
      return NextResponse.json({msg : 'There are no currently Available Streams'})
  } catch (error) {
    
    return NextResponse.json({msg : 'There are no currently Available Streams'})
  }
 
}
