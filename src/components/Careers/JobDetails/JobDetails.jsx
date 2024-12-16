import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "../../../assets/Careers_assets/Job";
import Footer from '../../Footer/Footer'
import JobDetailsPage from '../JobDetailsPage/JobDetailsPage'
import contact1 from '../../../assets/Careers_assets/contact1.png'
import contact2 from '../../../assets/Careers_assets/contact2.png'
import contact3 from '../../../assets/Careers_assets/contact3.png'
import contact4 from '../../../assets/Careers_assets/contact4.png'

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobIndex = !isNaN(parseInt(id, 10)) ? parseInt(id, 10) : -1; // Validates id
  const job = jobs[jobIndex] || null; // Defaults to null if jobIndex is invalid
  

  // Update page title dynamically
  useEffect(() => {
    document.title = job ? `${job.title} | Job Details` : "Job Not Found";
  }, [job]);

  if (!job || jobIndex < 0 || jobIndex >= jobs.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Job Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the job you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go Back to Listings
        </button>
      </div>
    );
  }

  return (
<div>
    <JobDetailsPage/>
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-500 hover:underline"
      >
        &larr; Back to Listings
      </button>

      {/* Job Details */}
      <div className="p-6 bg-white shadow-lg rounded-lg flex flex-row justify-between">
        <div className="flex flex-col gap-[1rem]">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{job.title}</h1>
            <p className="text-gray-500 text-lg">{job.location}</p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Type:</span> {job.type}
            </p>

            {/* Overview */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{job.overview}</p>
            </div>

            {/* Responsibilities */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Key Responsibilities
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {job.responsibilities.map((res, index) => (
                  <li className="bullet-item" key={index}>{res}</li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Qualifications
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {job.qualifications.map((qual, index) => (
                  <li className="bullet-item" key={index}>{qual}</li>
                ))}
              </ul>
            </div>
        </div>
        {/* Contact Email */}
        <div className="mt-6 w-[30vw] flex flex-col gap-[0.5rem]">
          <p className="font-semibold text-lg">{job.location}</p>
          <p>Please send us your detailed CV to apply for this job post</p>
          <p className="text-gray-700">
            <span className="font-semibold">Contact:</span>{" "}
            <a
              href={`mailto:${job.email}`}
              className="text-blue-500 hover:underline"
            >
              {job.email}
            </a>
          </p>
          <p className="text-gray-600">
              <span className="font-semibold">Salary:</span> {job.salary}
          </p>
          <p>Avg salary</p>
          <div className="flex gap-[2rem] items-center">
            <div><img src={contact1} alt="" /></div>
            <div>
                <div>{job.email}</div>
                <div>Our Mail-ID</div>
            </div>
          </div>
          <div className="flex gap-[2rem] items-center">
            <div><img src={contact2} alt="" /></div>
            <div>
                <div>{job.type}</div>
                <div>Job type</div>
            </div>
          </div>
          <div className="flex gap-[2rem] items-center">
            <div><img src={contact3} alt="" /></div>
            <div>
                <div>{job.category}</div>
                <div>Job category</div>
            </div>
          </div>
          <div className="flex gap-[2rem] items-center">
            <div><img src={contact4} alt="" /></div>
            <div>
                <div>{job.posted}</div>
                <div>Posted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default JobDetails;
