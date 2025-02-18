import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from '../components/Spinner';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const url = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(url);
        const data = await res.json();
        sleep(1000);
        setJobs(data);
      }
      catch(error){
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (<Spinner loading={loading}/>) : 
          jobs.map((job) => (
            < JobListing key={job.id} job = {job} className='bg-white'/>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default JobListings;
