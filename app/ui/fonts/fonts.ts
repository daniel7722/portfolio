import { Inter } from "next/font/google";  
import { Pacifico } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Open_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: ['400', '700'], });
export const pacifico = Pacifico({ subsets: ["latin"], weight: '400' });
export const openSans = Open_Sans({ subsets: ["latin"], weight: ['400', '500'] });