// import { getServerSession } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "../../auth/[...nextauth]/route";
// import { prisma } from "@/prisma";

// export async function POST(req: NextRequest) {
//   const session: any = await getServerSession(authOptions);

//   if (!session || !session.user?.email) {
//     return NextResponse.json(
//       { msg: "You need to be logged in to upvote. Please sign in first." },
//       { status: 401 }
//     );
//   }

//   try {
//     const { url } = await req.json();

//     // Fetch the stream by its URL
//     const getStream = await prisma.stream.findFirst({
//       where: { url },
//     });

//     if (!getStream) {
//       return NextResponse.json({ msg: "Stream not found. Please check the URL." }, { status: 404 });
//     }

//     const streamerId = getStream.id;

//     // Fetch user data based on session email
//     const getUser = await prisma.user.findUnique({
//       where: { email: session.user?.email },
//     });

//     if (!getUser) {
//       return NextResponse.json({ msg: "User not found. Please sign in again." }, { status: 404 });
//     }

//     // Check if the user has already upvoted the stream
//     const existingVote = await prisma.upvote.findUnique({
//       where: {
//         userId_StreamerId: {
//           userId: getUser.id,
//           StreamerId: streamerId,
//         },
//       },
//     });

//     if (existingVote) {
//       return NextResponse.json(
//         { msg: "You've already upvoted this stream. Thanks for your support!" },
//         { status: 200 }
//       );
//     }

//     // Create the upvote record in the database
//     const vote = await prisma.upvote.create({
//       data: {
//         userId: getUser.id,
//         StreamerId: streamerId,
//       },
//     });

//     if (vote) {
//       return NextResponse.json(
//         { msg: "Thanks for your upvote! Your support matters." },
//         { status: 200 }
//       );
//     }

//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ msg: "Something went wrong. Please try again later." }, { status: 500 });
//   }
// }
