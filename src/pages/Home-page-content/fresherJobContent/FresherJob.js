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
    <div className="bg-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5 py-28 px-2 ">
        {
            suggestions.map((suggestion,i) => <Job key={i} job={suggestion}></Job>)
        }
    </div>
    </div>
  );
};

export default FresherJob;
