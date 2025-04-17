import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma"

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  if (!email) return NextResponse.json({ msg: "No email provided" }, { status: 400 })

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) return NextResponse.json({ msg: "User not found" }, { status: 404 })

  return NextResponse.json({ streamerId: user.id })
}
