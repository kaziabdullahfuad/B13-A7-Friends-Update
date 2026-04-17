import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            {/* Dynamic thakbe */}
             <main className="flex-grow">
                
            <Outlet></Outlet>

             </main>
            <Footer></Footer>

                {/* test container */}
             <ToastContainer />
        </div>
    );
};

export default RootLayout;