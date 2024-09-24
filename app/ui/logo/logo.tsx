import Image from "next/image";
import { pacifico } from "../fonts/fonts";

export default function Logo() {
  return (
    <div className={`${pacifico.className} flex flex-row items-center justify-center leading-none text-white text-2xl`}>
      <div className="inline-flex items-center justify-center" style={{ width: '2em', height: '2em' }}>
        <Image 
          src="/shape.png"
          alt="Logo" 
          layout="responsive"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      Daniel
      
    </div>
  )
}