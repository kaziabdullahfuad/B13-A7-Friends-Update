import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <h2>Navbar</h2>
            {/* Dynamic thakbe */}
            <Outlet></Outlet>
            <h2>Footer</h2>
        </div>
    );
};

export default RootLayout;