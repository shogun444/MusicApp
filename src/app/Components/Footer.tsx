export default function Footer(){

 const QuicksLinks=[{
links : '  Home'
 },
 {
  links : 'Features'
   },
   {
    links : 'How It Works'
     },
     {
      links : 'Testimonials'
       },{
        links : 'FAQ'
       }

]
const FAQ=[{
  links : 'Copyright Information'
   },
   {
    links : 'Terms of Service'
     },
     {
      links : 'Cookie Policy'
       },
       {
        links : 'Testimonials'
         }
  
  ]



  return(<>
   <footer className="bg-zinc-900 text-white py-12  px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo or Brand */}
        <div>
          <img height={100} width={70} src='/logo.png' alt="" />
          <h1 className="text-2xl font-bold text-white">Muzio</h1>
          <p className="text-neutral-400 mt-4">
            Stream music together, ad-free. Share your favorite YouTube tracks and let the community decide what's next.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {QuicksLinks.map((item, index) => (
              <li key={index} className="text-neutral-400 hover:text-white cursor-pointer">
                {item.links}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal / FAQ */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Legal & Info</h2>
          <ul className="space-y-2">
            {FAQ.map((item, index) => (
              <li key={index} className="text-neutral-400 hover:text-white cursor-pointer">
                {item.links}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-700 mt-10 pt-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Streamify. All rights reserved.
      </div>
    </footer>
  </>)
}