
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { textVariant3 } from "../utils/motion";
// import { motion } from "framer-motion";

// const courses = [
//   { id: 1, name: 'Web Development', description: 'Learn the fundamentals of web development.', facility: 'Online', region: 'Global' },
//   { id: 2, name: 'Data Science', description: 'Dive into data science and machine learning.', facility: 'In-person', region: 'USA' },
//   { id: 3, name: 'Graphic Design', description: 'Master the art of graphic design.', facility: 'Hybrid', region: 'Europe' },
// ];

// const Academy = () => {
//   const [selectedFacility, setSelectedFacility] = useState('');
//   const [selectedRegion, setSelectedRegion] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredCourses = courses.filter(course => {
//     return (
//       (selectedFacility ? course.facility === selectedFacility : true) &&
//       (selectedRegion ? course.region === selectedRegion : true) &&
//       (searchQuery ? course.name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
//     );
//   });

//   return (
//     <div className="py-[8rem] flex flex-col items-center">
//       {/* Heading and Paragraph */}
//       <motion.div variants={textVariant3()} initial="hidden" whileInView="show">
//         <h1 className="text-4xl mt-16 font-bold animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent text-center mb-6">
//           Academy
//         </h1>
//         <p className="text-lg text-gray-300 text-center mb-12">
//           Welcome to our Academy. Here you can explore various courses to help you build your skills and advance your career.
//         </p>
//       </motion.div>

//       {/* Filters & Search */}
//       <div className="text-white py-8 flex flex-col items-center w-full">
//         <div className="bg-gray-800 text-white p-6 rounded-lg max-w-4xl w-full">
//           <div className="flex flex-col md:flex-row justify-center md:space-x-8 mb-6">
//             {/* Facility Filter */}
//             <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
//               <label htmlFor="facility" className="text-lg text-gray-300 mr-2">Facility:</label>
//               <select
//                 id="facility"
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg"
//                 value={selectedFacility}
//                 onChange={(e) => setSelectedFacility(e.target.value)}
//               >
//                 <option value="">All</option>
//                 <option value="Online">Online</option>
//                 <option value="In-person">In-person</option>
//                 <option value="Hybrid">Hybrid</option>
//               </select>
//             </div>

//             {/* Region Filter */}
//             <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
//               <label htmlFor="region" className="text-lg text-gray-300 mr-2">Region:</label>
//               <select
//                 id="region"
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg"
//                 value={selectedRegion}
//                 onChange={(e) => setSelectedRegion(e.target.value)}
//               >
//                 <option value="">All</option>
//                 <option value="Global">Global</option>
//                 <option value="USA">USA</option>
//                 <option value="Europe">Europe</option>
//               </select>
//             </div>

//             {/* Search Bar */}
//             <div className="flex flex-col md:flex-row items-center">
//               <label htmlFor="search" className="text-lg text-gray-300 mr-2">Search:</label>
//               <input
//                 id="search"
//                 type="text"
//                 placeholder="Search by name..."
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto w-full"> 
//             <table className="min-w-full table-auto border border-gray-600">
//               <thead>
//                 <tr className="bg-gray-700">
//                   <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Course Name</th>
//                   <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Description</th>
//                   <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Facility</th>
//                   <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Region</th>
//                   <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCourses.length > 0 ? (
//                   filteredCourses.map((course) => (
//                     <tr key={course.id} className="hover:bg-gray-700">
//                       <td className="px-4 py-2">{course.name}</td>
//                       <td className="px-4 py-2">{course.description}</td>
//                       <td className="px-4 py-2">{course.facility}</td>
//                       <td className="px-4 py-2">{course.region}</td>
//                       <td className="px-4 py-2">
//                         <Link
//                           to={`/course/${course.id}`}
//                           className="text-[#32549c] font-bold hover:text-white transition-colors"
//                         >
//                           View Details
//                         </Link>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="text-center py-4 text-gray-400">No courses found.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Academy;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { textVariant3 } from "../utils/motion";
import { motion } from "framer-motion";

const Academy = () => {
  const [courses, setCourses] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://employeemanagementapi-ctecekcdhpcedghe.canadacentral-01.azurewebsites.net/api/Courses');
        if (!response.ok) throw new Error('Failed to fetch courses');
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course => {
    return (
      (selectedFacility ? course.facility?.toLowerCase().includes(selectedFacility.toLowerCase()) : true) &&
      (searchQuery ? course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) : true)
    );
  });

  return (
    <div className="py-[8rem] flex flex-col items-center">
      <motion.div variants={textVariant3()} initial="hidden" whileInView="show">
        <h1 className="text-4xl mt-16 font-bold animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent text-center mb-6">
          Academy
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Welcome to our Academy. Here you can explore various courses to help you build your skills and advance your career.
        </p>
      </motion.div>

      <div className="text-white py-8 flex flex-col items-center w-full">
        <div className="bg-gray-800 text-white p-6 rounded-lg max-w-4xl w-full">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 mb-6">
            {/* Facility Filter */}
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <label htmlFor="facility" className="text-lg text-gray-300 mr-2">Facility:</label>
              <select
                id="facility"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                value={selectedFacility}
                onChange={(e) => setSelectedFacility(e.target.value)}
              >
                <option value="">All</option>
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Search */}
            <div className="flex flex-col md:flex-row items-center">
              <label htmlFor="search" className="text-lg text-gray-300 mr-2">Search:</label>
              <input
                id="search"
                type="text"
                placeholder="Search by name..."
                className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto w-full">
            {loading ? (
              <p className="text-center text-gray-400 py-6">Loading courses...</p>
            ) : error ? (
              <p className="text-center text-red-400 py-6">{error}</p>
            ) : (
              <table className="min-w-full table-auto border border-gray-600">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Course Name</th>
                    <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Description</th>
                    <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Facility</th>
                    <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Duration</th>
                    <th className="px-4 py-2 text-left text-lg font-semibold text-[#32549c]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      <tr key={course.id} className="hover:bg-gray-700">
                        <td className="px-4 py-2">{course.courseTitle}</td>
                        <td className="px-4 py-2">{course.courseDescription}</td>
                        <td className="px-4 py-2">{course.facility}</td>
                        <td className="px-4 py-2">{course.duration}</td>
                        <td className="px-4 py-2">
                          <Link
                            to={`/course/${course.id}`}
                            className="text-[#32549c] font-bold hover:text-white transition-colors"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-gray-400">No courses found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;

