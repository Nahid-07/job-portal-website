import React from 'react';
import { Link } from 'react-router-dom';
import {BiLocationPlus, BiPhone , BiMessage} from "react-icons/bi"

const Footer = () => {
    return (
        <div className='lg:p-20'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center max-w-7xl mx-auto text-lg p-5'>
                <div>
                    <h4 className='my-5 font-bold'>Employers</h4>
                    <ul className=''>
                        <Link><li>Browse Candidates</li></Link>
                        <Link><li>Post a Job</li></Link>
                        <Link><li>Employer Listing</li></Link>
                        <Link><li>Resume Page</li></Link>
                        <Link><li>Dashboard</li></Link>
                    </ul>
                </div>
                <div>
                <h4 className='my-5 font-bold'>Candidate</h4>
                    <ul>
                        <Link><li>Browse Jobs</li></Link>
                        <Link><li>Submit Resume</li></Link>
                        <Link><li>Browse Categories</li></Link>
                        <Link><li>My Bookmarks</li></Link>
                        <Link><li>Dashboard</li></Link>
                        <Link><li>Candidate Listing</li></Link>
                    </ul>
                </div>
                <div>
                <h4 className='my-5 font-bold'>Account</h4>
                    <ul>
                        <Link><li>My Account</li></Link>
                        <Link><li>Sign In</li></Link>
                        <Link><li>Create Account</li></Link>
                        <Link><li>Checkout</li></Link>
                        
                    </ul>
                </div>
                <div>
                <h4 className='my-5 font-bold'>Have a Questions?</h4>
                    <ul>
                        <Link><li className='flex items-center'><BiLocationPlus className='mr-5'/>	203 Fake St. Mountain View, San Francisco, California, USA</li></Link>
                        <Link><li className='flex items-center'><BiPhone className='mr-5'/>+2 392 3929 210</li></Link>
                        <Link><li className='flex items-center'><BiMessage className='mr-5'/>info@yourdomain.com </li></Link>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;