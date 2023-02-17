import React from 'react';
import Banner from './banner/Banner';
import ExperiencedJob from './experiencedJob/ExperiencedJob';
import FresherJob from './fresherJobContent/FresherJob';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <FresherJob></FresherJob>
            <ExperiencedJob></ExperiencedJob>
        </>
    );
};

export default HomePage;