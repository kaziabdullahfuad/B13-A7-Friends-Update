import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import Twitter from "../../assets/twitter.png"


const Footer = () => {
    return (
       <div className='bg-[#244D3F] pt-20 pb-7 mt-20'>

            <div className='text-white text-center'>
                <h1 className='text-7xl'>KeenKeeper</h1>
                <p className='mt-4 mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <div>
                    <p className='font-semibold mb-4'>Social Links</p>
                    <div className='flex gap-3 justify-center'>
                        <div className='bg-white  rounded-full'>
                            {/* <FaInstagram className='text-black' /> */}
                            <img src={Instagram} alt="" />

                        </div>
                        <div className='bg-white rounded-full'>
                            {/* <FaFacebook className='text-black' /> */}
                            <img src={Facebook} alt="" />

                        </div>
                        <div className='bg-white  rounded-full'>
                            {/* <FaXTwitter className='text-black' /> */}
                            <img src={Twitter} alt="" />


                        </div>
                    </div>
                </div>

                <hr  className='max-w-10/12 mx-auto my-10 opacity-20' />
            </div>

            <div className='w-10/12 mx-auto flex justify-between text-[#FAFAFA]'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>    

        </div>
    );
};

export default Footer;