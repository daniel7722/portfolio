import Link from "next/link";

interface InfoProps {
    icon: React.ElementType;
    category: string;
    text: string;
}

const Nav: React.FC<InfoProps> = ({icon: Icon, category, text}) => {
    return (
      <li className="flex flex-row gap-2">
        <div className="flex w-8 h-8 border rounded-lg bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 hover:bg-right bg-[length:200%_auto] text-white p-2 rounded-lg shadow-md transition-all duration-500 border-zinc-700"><Icon></Icon></div>
        <div className="flex flex-col gap-.5">
          <p className="text-xs">{category}</p>
          <Link href="mailto:dhkl2156@gmail.com" className="text-sm">{text}</Link>
        </div>  
      </li>
    );
};

export default Nav;

