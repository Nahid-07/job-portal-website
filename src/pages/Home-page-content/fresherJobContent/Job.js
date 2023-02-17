import React from 'react';

const Job = ({job}) => {
    console.log(job);
    return (
        <div className='p-4'>
            <div className='flex justify-center'>
                <img src={job.logo} alt="" />
            </div>
            <div className=''>
                <h4 className='text-xl font-bold'>Company name: {job.company}</h4>
                <p className='text-lg font-semibold'>Position: {job.position}</p>
                <p className='text-lg font-semibold'>Location: {job.location}</p>

            </div>
            <button className='bg-blue-900 w-full py-2 rounded text-white mt-5'>
                APPLY NOW
            </button>
        </div>
    );
};

export default Job;