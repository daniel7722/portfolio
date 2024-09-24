'use client'; 
import React, { useState } from 'react';
import Link from 'next/link';

interface DropDownProps {
  text: string;
  className: string;
}

const DropDown: React.FC<DropDownProps> = ({text, className}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`relative inline-block`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
                <button className={className} >{text}</button>
                {isOpen && (
                    <ul className='absolute top-0 left-0 mt-8 shadow-lg rounded-md w-30 z-10'>
                        <li className="px-4 py-2 text-white hover:hover:font-bold">
                            <Link href="https://www.linkedin.com/in/daniel-huang-0a58a2220/">LinkedIn</Link></li>
                        <li className="px-4 py-2 text-white hover:hover:font-bold">
                            <Link href="https://github.com/daniel7722">GitHub</Link></li>
                        <li className="px-4 py-2 text-white hover:hover:font-bold">
                            <Link href="mailto:dhkl2156@gmail.com">Gmail</Link></li>
                    </ul>
                )}
            </div>
    );
};

export default DropDown;