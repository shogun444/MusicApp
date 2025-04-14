'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"



export function Navbar(){
const session = useSession()
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
<div className="h-20 w-full bg-neutral-200  flex justify-around items-center  ">


<div>
  <Image className="rounded-2xl" height={30} width={60} alt="logo1" src={'/logo.png'}></Image>

</div>


<div className="space-x-18 flex items-center justify-center ">


{Links.map((itm,index)=>(<Link key={index} href={itm.src} className="text-neutral-700 text-xl font-semibold ">{itm.link}</Link>))}
</div>

<div className="space-x-3">
  {session.data?.user && <button onClick={()=>signOut()} className="text-neutral-50 p-2 px-4 rounded-xl text-xl bg-neutral-600">Sign Out</button>}
  {!session.data?.user &&  <button onClick={()=>signIn()} className="text-neutral-600 p-2 px-4 rounded-xl text-xl border-2 border-neutral-600 hover:cursor-pointer hover:border-neutral-950 transition-transform hover:text-neutral-950">Login</button> }
 
</div>


</div>

</>)

}