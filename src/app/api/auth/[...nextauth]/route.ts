import { prisma } from "@/prisma";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  secret : process.env.NEXTAUTH_SECRET,
  callbacks : {

    async signIn(params){

        if(!params.user.email) {
          return false
        }
        try {
          await prisma.user.create({
            data : {
              email : params.user.email,
              provider : "GoogleProvider"
            }
          })
        } catch (error) {
          
        }
        
        return true
    }
    
  }
})

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }