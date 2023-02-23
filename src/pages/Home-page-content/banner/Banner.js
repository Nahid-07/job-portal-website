import React from 'react';
import banner from '../../../images/banner.png'

const Banner = () => {
    return (
        <div className='bg-green-100'>
            <div className='max-w-7xl mx-auto'>
            <div className='lg:flex justify-center items-center'>
            <div className='lg:w-1/2 text-center' data-aos="fade-right"  data-aos-duration="2000">
                <p className='text-[#6D6E8D] text-2xl'>Easiest way to find a perfect job</p>
                <h1 className='text-4xl lg:text-5xl font-bold text-[#00044A] my-10'>Find Your Next Dream Job</h1>
                <div className='text-white'>
                    <button className='bg-[#000DFF] font-semibold px-10 py-4 rounded'>LOOKING FOR A JOB</button>
                    <button className='bg-green-600 font-semibold px-9 py-4 md:ml-9 mt-8 lg:mt-0 rounded'>Find Talent</button>
                </div>
            </div>

            <div className='lg:w-1/2' data-aos="fade-left"  data-aos-duration="2000">
                <img src={banner} alt="Banner" className='h-auto'/>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;