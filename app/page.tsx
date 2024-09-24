import Image from "next/image";
import Link from "next/link";
import ContactInfo from "./ui/contact_info/contact_info";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 px-4 sm:px-8 md:px-16 py-8">
      <aside className="min-w-full lg:min-w-[250px] border rounded-lg border-zinc-700 bg-zinc-900">
      <div className="flex relative flex-row lg:flex-col center text-white">
        <figure className="w-32 lg:w-auto min-w-24 m-8 bg-zinc-800 border rounded-full border-none ">
          <Image 
            src="/shape.png"
            alt="Headshot"
            width={160}
            height={160}
          />
        </figure>
        <div className="flex flex-col justify-center mx-8 my-4 w-full text-center lg:text-left leading-relaxed">
          <h1 className="font-bold text-2xl">Daniel Huang</h1>
          <p>MSc at Imperial College</p>
        </div>
        
      </div>

      <div className="flex relative flex-col gap-4 text-white mx-8 my-2">
        <div className="w-full border border-zinc-700"></div>
        <ul className="grid grid-cols-3 lg:grid-cols-1 gap-4">
          <ContactInfo icon={EnvelopeIcon} category="EMAIL" text="dhkl2156@gmail.com"/>
          <li className="flex flex-row gap-2">
            <div className="flex w-8 h-8 border rounded-lg bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 hover:bg-right bg-[length:200%_auto] text-white p-2 rounded-lg shadow-md transition-all duration-500 border-zinc-700"><EnvelopeIcon className=""/></div>
            <div className="flex flex-col gap-.5">
              <p className="text-xs">EMAIL</p>
              <Link href="mailto:dhkl2156@gmail.com" className="text-sm">dhkl2156@gmail.com</Link>
            </div>  
          </li>
          <li className="flex flex-row gap-2">
            <div className="flex w-8 h-8 border rounded-lg bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 hover:bg-right bg-[length:200%_auto] text-white p-2 rounded-lg shadow-md transition-all duration-500 border-zinc-700">< LuGithub className="w-4 h-4 text-white"/></div>
            <div className="flex flex-col gap-.5">
              <p className="text-xs">GITGHB</p>
              <Link href="https://github.com/daniel7722" className="text-sm">Daniel7722</Link>
            </div>  
          </li>
          <li className="flex flex-row gap-2">
            <div className="flex w-8 h-8 border rounded-lg bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 hover:bg-right bg-[length:200%_auto] text-white p-2 rounded-lg shadow-md transition-all duration-500 border-zinc-700"><CiLinkedin className="w-4 h-4 text-white"/></div>
            <div className="flex flex-col gap-.5">
              <p className="text-xs">LINKEDIN</p>
              <Link href="https://www.linkedin.com/in/daniel-huang-0a58a2220/" className="text-sm">Daniel H</Link>
            </div>  
          </li>
          
        </ul>
      </div>
      </aside>

      <div className="min-w-full lg:min-w-[900px] border rounded-lg border-zinc-700 bg-zinc-900">
      </div>
    </main>
    
  )
}
