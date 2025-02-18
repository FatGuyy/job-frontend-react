import { useParams, useLoaderData, NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import JobListing from "../components/JobListing";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  console.log(job)

  return (
    <>
      <section>
      <div class="container m-auto py-6 px-6">
        <NavLink
          to="/jobs"
          class="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <div className="flex items-center">
            <FaArrowLeft className="mr-2" />
            Back to Job Listings
          </div>
        </NavLink>
      </div>
    </section>

    <section class="bg-indigo-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{job.type}</div>
              <h1 class="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <FaMapMarker  className="text-orange-700 inline text-lg mb-1 mr-1"/>
                <p class="text-orange-700">{job.location}</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">
                {job.description}
              </p>

              <h3 class="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">{job.salary} / Year</p>
            </div>
          </main>

          <aside>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">{job.company.name}</h2>

              <p class="my-2">
                {job.company.description}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-indigo-100 p-2 font-bold">
                {job.company.contactEmail}
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <NavLink
                to={`/jobs/edit/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job
              </NavLink>
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  );
};

const jobLoader = async ({params}) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = res.json();
  return data
};

export {JobPage as default, jobLoader};
