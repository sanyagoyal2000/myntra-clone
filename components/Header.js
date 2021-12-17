import Image from 'next/image'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function Header() {
    return (
        <header className="fixed top-0 z-20 bg-white w-screen grid grid-flow-col transition duration-100 ease-out  p-5 md:px-5 shadow-sm border-1 "> 
           <div  className="relative flex flex-start h-10 cursor-pointer items-center w-20 ">
               <Image  src="https://raw.githubusercontent.com/sanyagoyal2000/myntra-clone/main/components/images/myntra-1-removebg-preview.png" className="mt-4" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           <div className="ml-0 mt-auto mb-auto ">
               <ul className="flex flex-row space-x-4">
                   <li className="font-semibold font-mono text-slate-700 cursor-pointer hover:shadow-sm">MEN</li>
                   <li className="font-semibold font-mono text-slate-700 cursor-pointer">WOMEN</li>
                   <li className="font-semibold font-mono text-slate-700 cursor-pointer">KIDS</li>
                   <li className="font-semibold font-mono text-slate-700 cursor-pointer">HOME & LIVING</li>
                   <li className="font-semibold font-mono text-slate-700 cursor-pointer">BEAUTY</li>
                   <li className="font-semibold font-mono text-slate-700 cursor-pointer">STUDIO</li>
               </ul>
           </div>
           <div className="flex items-center md:border-2  px-6 md:shadow-sm">
           <svg xmlns="http://www.w3.org/2000/svg" className="pl-1 h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
</svg>
         <input className="pl-5 px-6 bg-transparent outline-none flex-grow text-sm text-black" type="text" placeholder="Start your search" value=""/>
          </div>
           
               
               
<div className="flex flex-row  items-center space-x-4 p-2 justify-end cursor-pointer mr-5">
<div className="flex flex-col">
    <PersonOutlineIcon className="text-gray-500"/>
    <p className="text-xs font-fira-sans font-semibold">Profile</p>
  </div>
  <div className="flex flex-col">
  <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
<p className="text-xs font-fira-sans font-semibold">Wishlist</p>
</div>
<div className="flex flex-col">
  <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
<p className="text-xs font-fira-sans font-semibold">Bag</p>
  
</div>


       
</div>
           
</header>
        
    )
}

export default Header

