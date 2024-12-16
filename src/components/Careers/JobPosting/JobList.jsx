import React, { useState } from "react";
import { jobs } from "../../../assets/Careers_assets/Job";
import { NavLink } from "react-router-dom";

function JobList (){
  const [visibleJobs, setVisibleJobs] = useState(3);

  const loadMoreJobs = () => {
    setVisibleJobs((prev) => prev + 3);
  };

  return (
    <div className="p-6">
      <h2 className="text-center text-3xl font-bold mb-6">Job Openings</h2>
      <div className="space-y-4">
        {jobs.slice(0, visibleJobs).map((job, index) => (
          <div
            key={job.id}
            className="p-4 w-[95vw] my-[1rem] mx-auto shadow-xl hover:scale-[105%] transitiom-transfrom duration-300 rounded-lg bg-white flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-500">{job.location}</p>
              <p className="text-sm mt-1">{job.type}</p>
            </div>
            <NavLink
              to={`/job/${index}`}
              className="text-orange-500 hover:underline"
            >
              Apply &rarr;
            </NavLink>
          </div>
        ))}
      </div>
      {visibleJobs < jobs.length && (
        <button
          onClick={loadMoreJobs}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default JobList;
