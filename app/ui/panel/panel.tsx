import React from 'react';
import Link from 'next/link';

interface PanelProps {
  url: string;
  image: string;
  alt_text: string;
  title: string;
  tech_stack: string[];
  content: string;
}


const Panel: React.FC<PanelProps> = ({url, image, alt_text, title, tech_stack, content}) => {
    return (
        <div className="w-full h-fit border rounded-lg border-zinc-700 bg-zinc-900 text-white transition-transform transform hover:scale-105 duration-300">
            <Link href={url}>
            <figure className='border-none rounded-lg'>
                <img src={image} alt={alt_text} className='rounded-lg'/>
            </figure>
            <div className='p-8'>
                <h3 className='text-xl leading-relaxed'>{title}</h3>
                {tech_stack.map((tech, index) => (
                    <React.Fragment key={index}>
                        <span className='font-bold text-zinc-600 leading-relaxed'>{tech}</span>
                        {index < tech_stack.length - 1 && (
                            <span className="inline-block w-2 h-2 bg-zinc-600 rounded-full mx-1"></span>
                        )}
                    </React.Fragment>
                ))}
                <p className='text-justify'>{content}</p>
            </div>
            </Link>
            
        </div>
    )
}

export default Panel;