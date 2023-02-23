import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    console.log(job);
    return (
        <div className='p-4 hover:shadow-2xl duration-300 ease-in' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
            <div className='flex justify-center'>
                <img src={job.logo} alt="" />
            </div>
            <div className=''>
                <h4 className='text-xl font-bold'>Company name: {job.company}</h4>
                <p className='text-lg font-semibold'>Position: {job.position}</p>
                <p className='text-lg font-semibold'>Location: {job.location}</p>

            </div>
            <Link to='/apply'><button className='bg-[#000DFF] hover:bg-green-600 duration-300 ease-in w-full py-2 rounded text-white mt-5'>
                APPLY NOW
            </button></Link>
        </div>
    );
};

export default Job;