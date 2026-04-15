import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa6";
import { Link, NavLink } from 'react-router';



const Navbar = () => {
    return (
        <div className='bg-[#FFFFFF] border border-[#E9E9E9] shadow-md'>
            <nav className='w-full md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between py-4'>
                <h2 className='text-4xl text-[#1F2937]'>Keen<span className='text-[#244D3F]'>Keeper</span></h2>

                <ul className='flex gap-4 items-center'>
                    <li><NavLink to={"/"} className={({isActive})=>{
                        return `flex items-center gap-1  p-3 rounded-md ${isActive? 'bg-[#244D3F] text-white' : 'bg-white text-[#64748B]'}`
                    }}><IoHomeOutline /> Home</ NavLink></li>
                    <li><NavLink to={"/timeline"} className={({isActive})=>{
                        return `flex  items-center gap-1   p-3 rounded-md ${isActive? 'bg-[#244D3F] text-white' : 'bg-white text-[#64748B]'}`
                    }}><CiClock2 /> Timeline</NavLink></li>
                    <li ><NavLink to={"/stats"} className={({isActive})=>{
                        return `flex items-center gap-1 p-3 rounded-md ${isActive? 'bg-[#244D3F] text-white' : 'bg-white text-[#64748B]'}`
                    }}><FaChartLine /> Stats</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;