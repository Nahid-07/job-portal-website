import React from 'react';
import { Link } from 'react-router-dom';

const Company = ({company}) => {
    console.log(company);
    return (
        <div className='border-2 p-3'>
            <div>
                <img src={company.logo} alt=""  className='w-96 h-32'/>
            </div>
            <div>
            <h1 className='text-3xl font-bold my-5'>{company.companyName}</h1>
            <p className='mb-2'>{company.details.length > 200 ? company.details.slice(0,150) + '...': company.details}</p>
            </div>
            <div>
                <Link to="/details"><button className='w-full bg-[#000DFF] py-2 text-white font-semibold rounded'>VIEW DETAILS</button></Link>
            </div>
        </div>
    );
};

export default Company;