'use client'

import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"



export function Navbar(){
const session = useSession()
const router =  useRouter()
const Links = [

  {
  link :  'Music',
  src : '/music'
},
  {
  link :  'Home',
  src : '/'
},
{
  link :  'About',
  src : '/about'
},
{
  link :  'Contact Us',
  src : '/contactus'
},
{
  link :  'Products',
  src : '/products'
}]

return(<>
<div className="h-15 w-full bg-black  flex justify-around items-center sticky inset-0     ">


<div>
  <Image className="rounded-2xl" height={30} width={40} alt="logo1" src={'/logo.png'}></Image>

</div>


<div className="space-x-18 flex items-center justify-center ">


{Links.map((itm,index)=>(<Link key={index} href={itm.src} className="text-neutral-400 text-[13px] ">{itm.link}</Link>))}
</div>

<div className="space-x-3">
  {session.data?.user &&<Button size={'default'}  variant={'secondary'} onClick={()=>signOut()}>Signout</Button>}
  {!session.data?.user && <Button size={'default'} variant={'outline'} onClick={()=>signIn()}>Login</Button> }
  


</div>


</div>

</>)

}