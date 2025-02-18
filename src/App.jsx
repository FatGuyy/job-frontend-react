import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';

// layouts
import MainLayout from './layouts/MainLayout';

// pages
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobs from './pages/AddJobs';
import JobPage, {jobLoader} from './pages/JobPage';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobs addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
  )
  );
  return <RouterProvider router={router}/>
}

export default App;
