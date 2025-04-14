import { prisma } from "@/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'

const UpvoteSchema = z.object({
  StreamerId : z.string()
})

export async function POST(req : NextRequest) {
  const serverSession = await getServerSession()

  const user = await prisma.user.findFirst({
    where : {
      email : serverSession?.user?.email as string
    }
  })
  
  if(!user){
    return NextResponse.json({msg : 'Unauthenticated'},{status : 411})
      }
    
try {
  const Validdata = UpvoteSchema.safeParse(await req.json())

  if(Validdata.success)
  await prisma.upvote.create({
    data : {
      userId : user.id,  
      StreamerId : Validdata.data?.StreamerId  
    }
  })
} catch (error) {
  return NextResponse.json({msg : "Already Upvoted"})
}
 
}