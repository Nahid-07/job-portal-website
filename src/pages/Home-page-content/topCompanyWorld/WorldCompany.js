import React, { useEffect, useState } from 'react';
import Company from './Company';

const WorldCompany = () => {
    const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("topCompany.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);
    return (
        <div>
            <div className="max-w-7xl mx-auto shadow-xl lg:p-20 p-5 my-20">
        <h1 className="lg:text-6xl text-3xl font-bold mb-20 text-center">TOP 3 IT COMPANY IN WORLDWIDE</h1>
        <div className="grid md:grid-cols-3 gap-5">
          {companies.map((company, i) => (
            <Company key={i} company={company}></Company>
          ))}
        </div>
      </div>
        </div>
    );
};

export default WorldCompany;