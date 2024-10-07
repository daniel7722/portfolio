import Image from "next/image";
import Link from "next/link";
import ContactInfo from "./ui/contact_info/contact_info";
import Panel from "./ui/panel/panel";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 px-4 sm:px-8 md:px-16 py-8">
      <aside className="min-w-full lg:min-w-[250px] h-fit border rounded-lg border-zinc-700 bg-zinc-900">
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
          <ContactInfo 
            icon={EnvelopeIcon}
            category="EMAIL" 
            text="dhkl2156@gmail.com" 
            url="mailto:dhkl2156@gmail.com"/>
          <ContactInfo 
            icon={LuGithub} 
            category="GITHUB" 
            text="Daniel7722"
            url="https://github.com/daniel7722"/>
          <ContactInfo 
            icon={CiLinkedin} 
            category="LINKEDIN" 
            text="Daniel H"
            url="https://www.linkedin.com/in/daniel-huang-0a58a2220/"/>      
        </ul>
      </div>
      </aside>

      <div className="grid grid-cols-1 lg: grid-cols-2 gap-4 min-w-full h-fit lg:min-w-[900px]">
        <Panel 
          url="https://stack-overflow-saver.vercel.app/my-questions"
          image="/ImperialOverflow.png"
          alt_text="web"
          title="Overflow saver"
          tech_stack={["Next.js", "tailwindcss", "vercel"]}
          content="Our website provides a convenient way for a coder to save Stack Overflow questions
                and their respective answers that they want to store and re-visit later. The user creates
                an account/log in and can then access their saved question cards. To add a new
                question/answer pair, the user copies the URL of the relevant Stack Overflow question
                and provides the rank of the answer they want saved. A card is then generated on their
                page which they can come back to each time they log in. The user can then search
                for and delete cards as well."
          />
      </div>
    </main>
    
  )
}
