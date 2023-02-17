import React, { useEffect, useState } from "react";
import Job from "./Job";

const FresherJob = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    fetch("fresherJob.json")
      .then((res) => res.json())
      .then((data) => setSuggestions(data));
  }, []);
  return (
    <div className="bg-slate-200 py-20">
      <div className="max-w-7xl mx-auto  ">
        <div className="grid md:grid-cols-3 gap-5 px-2">
        {suggestions.map((suggestion, i) => (
          <Job key={i} job={suggestion}></Job>
        ))}
        </div>
        <div className="flex justify-center mt-20">
        <button className="bg-[#000DFF] hover:bg-green-600 duration-300 ease-in px-20 py-4 rounded text-white font-semibold">SEE ALL JOBS</button>
        </div>
      </div>
    </div>
  );
};

export default FresherJob;
