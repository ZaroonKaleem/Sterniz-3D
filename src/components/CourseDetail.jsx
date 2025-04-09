// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const response = await axios.get(`https://employeemanagementapi-ctecekcdhpcedghe.canadacentral-01.azurewebsites.net/api/courses/${id}`);
//         setCourse(response.data);
//       } catch (error) {
//         console.error('Failed to fetch course data:', error);
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   if (!course) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
//         <p>Loading course details...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="py-[8rem] px-6 flex flex-col items-center bg-gray-900 text-white">
//       {/* Course Title and Description */}
//       <div className="max-w-4xl w-full text-center mb-12">
//         <h1 className="text-4xl font-bold animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent mb-4">
//           {course.courseTitle}
//         </h1>
//         <p className="text-lg text-gray-300 mb-8">{course.courseDescription}</p>
//         <p className="text-md text-gray-300">{course.content}</p>
//       </div>

//       {/* Course Details */}
//       <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 mb-12">
//         {/* Left Section (Extended Description) */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#32549c] mb-4">Course Details</h2>
//           <p className="text-md text-justify text-gray-300 space-y-2">
//             {course.courseDetails || (
//               <>
//                 This Web Development course is a comprehensive program tailored to beginners and intermediate learners looking to build strong foundations in front-end and back-end web technologies.
//                 <br /><br />
//                 The course includes real-world projects that simulate actual development environments, helping you gain practical experience. You'll learn best practices for coding, version control using Git, and deployment strategies.
//                 <br /><br />
//                 Whether you're aiming for a job in tech, freelancing, or launching your own startup, this course provides the knowledge and tools you need to succeed in the digital world.
//               </>
//             )}
//           </p>
//         </div>

//         {/* Right Section (Details List) */}
//         <div className="flex-1 bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold text-[#32549c] mb-4">Details</h2>
//           <ul className="text-gray-300 space-y-4">
//             <li><strong>Facility:</strong> {course.facility}</li>
//             <li><strong>Duration:</strong> {course.duration}</li>
//             <li><strong>Attendance:</strong> {course.attendance}</li>
//             <li><strong>Graduation:</strong> {course.graduation}</li>
//             <li><strong>Costs:</strong> {course.costs}</li>
//             <li><strong>Place:</strong> {course.place}</li>
//             <li><strong>Appointments:</strong> {course.appointments}</li>
//           </ul>
//         </div>
//       </div>

//       {/* Apply Form */}
//       <div className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full">
//         <h2 className="text-2xl font-bold text-[#32549c] mb-6 text-center">Apply for the Course</h2>
//         <form className="space-y-6">
//           <div className="form-group">
//             <label htmlFor="name" className="text-lg">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               required
//               className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="text-lg">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               required
//               className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="appointmentDate" className="text-lg">Appointment Date</label>
//             <input
//               type="date"
//               id="appointmentDate"
//               required
//               className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="startTime" className="text-lg">From</label>
//             <input
//               type="time"
//               id="startTime"
//               required
//               className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="endTime" className="text-lg">To</label>
//             <input
//               type="time"
//               id="endTime"
//               required
//               className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message" className="text-lg">Why do you want to take this course?</label>
//             <textarea
//               id="message"
//               required
//               className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 text-lg font-semibold bg-[#32549c] hover:bg-[#3954a9] text-white rounded-md transition-colors"
//           >
//             Apply Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  // State to hold form data
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    appointmentDate: '',
    startTime: '',
    endTime: '',
    message: '',
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `https://employeemanagementapi-ctecekcdhpcedghe.canadacentral-01.azurewebsites.net/api/courses/${id}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error('Failed to fetch course data:', error);
      }
    };

    fetchCourse();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      studentName: formData.studentName,
      email: formData.email,
      phoneNumber: '', // Add phone number if you want to include it
      startTime: {
        ticks: new Date(`${formData.appointmentDate}T${formData.startTime}`).getTime(),
      },
      endTime: {
        ticks: new Date(`${formData.appointmentDate}T${formData.endTime}`).getTime(),
      },
      courseId: id,
    };

    try {
      await axios.post(
        'https://employeemanagementapi-ctecekcdhpcedghe.canadacentral-01.azurewebsites.net/api/StudentRegistration', // Replace with your actual API URL
        requestData
      );
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application.');
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        <p>Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="py-[8rem] px-6 flex flex-col items-center bg-gray-900 text-white">
      {/* Course Title and Description */}
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent mb-4">
          {course.courseTitle}
        </h1>
        <p className="text-lg text-gray-300 mb-8">{course.courseDescription}</p>
        <p className="text-md text-gray-300">{course.content}</p>
      </div>

      {/* Course Details */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 mb-12">
        {/* Left Section (Extended Description) */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#32549c] mb-4">Course Details</h2>
          <p className="text-md text-justify text-gray-300 space-y-2">
            {course.courseDetails || (
              <>
                This Web Development course is a comprehensive program tailored to beginners and intermediate learners looking to build strong foundations in front-end and back-end web technologies.
                <br /><br />
                The course includes real-world projects that simulate actual development environments, helping you gain practical experience. You'll learn best practices for coding, version control using Git, and deployment strategies.
                <br /><br />
                Whether you're aiming for a job in tech, freelancing, or launching your own startup, this course provides the knowledge and tools you need to succeed in the digital world.
              </>
            )}
          </p>
        </div>

        {/* Right Section (Details List) */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-[#32549c] mb-4">Details</h2>
          <ul className="text-gray-300 space-y-4">
            <li><strong>Facility:</strong> {course.facility}</li>
            <li><strong>Duration:</strong> {course.duration}</li>
            <li><strong>Attendance:</strong> {course.attendance}</li>
            <li><strong>Graduation:</strong> {course.graduation}</li>
            <li><strong>Costs:</strong> {course.costs}</li>
            <li><strong>Place:</strong> {course.place}</li>
            <li><strong>Appointments:</strong> {course.appointments}</li>
          </ul>
        </div>
      </div>

      {/* Apply Form */}
      <div className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-[#32549c] mb-6 text-center">Apply for the Course</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="studentName" className="text-lg">Full Name</label>
            <input
              type="text"
              id="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-lg">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate" className="text-lg">Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="startTime" className="text-lg">From</label>
            <input
              type="time"
              id="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="endTime" className="text-lg">To</label>
            <input
              type="time"
              id="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="text-lg">Why do you want to take this course?</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold bg-[#32549c] hover:bg-[#3954a9] text-white rounded-md transition-colors"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseDetail;