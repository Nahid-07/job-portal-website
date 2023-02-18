import React from 'react';
import Banner from './banner/Banner';
import ExperiencedJob from './experiencedJob/ExperiencedJob';
import FresherJob from './fresherJobContent/FresherJob';
import WorldCompany from './topCompanyWorld/WorldCompany';
import BdCompany from './top_3_it_company_BD/BdCompany';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <FresherJob></FresherJob>
            <ExperiencedJob></ExperiencedJob>
            <BdCompany></BdCompany>
            <WorldCompany></WorldCompany>
        </>
    );
};

export default HomePage;