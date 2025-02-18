import React from 'react';

// components
import Hero from "../components/Hero";
import Homecards from '../components/Homecards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero title='Become a React Dev' subtitle='Find the React job that fits your skill set'/>
      <Homecards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage
