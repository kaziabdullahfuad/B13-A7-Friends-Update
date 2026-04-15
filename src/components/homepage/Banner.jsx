import React from 'react';
import { FaPlus } from "react-icons/fa6";


const Banner = () => {
    return (
    <div>
        <div className='w-10/12 mx-auto mt-20 mb-10 text-center'>
            <h2 className='text-[#1F2937] text-5xl font-bold mb-4'>Friends to keep close in your life</h2> 
            <p className='mb-8 text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <button className='border flex mx-auto items-center gap-1 bg-[#244D3F] text-white p-3 rounded-md'><FaPlus /> Add a Friend</button>
        </div>

        <div className='w-10/12 mx-auto  grid grid-cols-2 md:grid-cols-4 gap-5'>
            
            <div className='bg-white  shadow-md py-8 text-center'>
                <h3 className='font-semibold text-3xl mb-2'>10</h3>
                <p>Total Friends</p>
            </div>

            <div className='bg-white shadow-md py-8 text-center'>
                <h3 className='font-semibold text-3xl mb-2'>3</h3>
                <p>On Track</p>
            </div>

            <div className='bg-white shadow-md py-8 text-center'>
                <h3 className='font-semibold text-3xl mb-2'>6</h3>
                <p>Need Attention</p>
            </div>

            <div className='bg-white shadow-md py-8 text-center'>
                <h3 className='font-semibold text-3xl mb-2'>12</h3>
                <p>Interactions This Month</p>
            </div>

        </div>
    </div>
    );
};

export default Banner;