import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
const {url} = await req.json()
try {
  const StreamerId = await prisma.stream.findFirst({
    where : {
      url : url
    }
  })
  const id = StreamerId?.id
  return NextResponse.json({msg : 'The Id is',id})
} catch (error) {
  return NextResponse.json({msg : 'The song with this url Id doesnot exist'})
}

}