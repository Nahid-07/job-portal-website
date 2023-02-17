import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-20 flex items-center shadow-lg px-20 justify-between'>
            <div>
                <h1 className='text-3xl font-semibold text-green-600'>JOB PORTAL</h1>
            </div>
            <ul className='flex space-x-8 text-lg'>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Contact US</Link></li>
                <li><Link>Sign in</Link></li>
                <li><Link>Sign out</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;