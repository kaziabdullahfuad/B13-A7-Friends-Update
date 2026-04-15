import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa6";



const Navbar = () => {
    return (
        <div className='bg-[#FFFFFF] border border-[#E9E9E9] shadow-md'>
            <nav className='w-11/12 mx-auto flex items-center justify-between py-4'>
                <h2 className='text-4xl text-[#1F2937]'>Keen<span className='text-[#244D3F]'>Keeper</span></h2>

                <ul className='flex gap-4 items-center'>
                    <li className=''><button className='flex items-center gap-1 bg-[#244D3F] text-white  p-3 rounded-md'><IoHomeOutline /> Home</ button></li>
                    <li className=''><button className='flex gap-1 items-center p-3'><CiClock2 /> Timeline</button></li>
                    <li className=''><button className='flex gap-1 items-center p-3'><FaChartLine /> Stats</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;