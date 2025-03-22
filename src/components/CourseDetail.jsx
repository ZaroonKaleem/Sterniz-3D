import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  // Here you would fetch course details based on the id, for now using hardcoded data
  const course = {
    name: 'Web Development',
    description: 'Learn the fundamentals of web development, including HTML, CSS, JavaScript, and modern frameworks such as React and Angular. The course covers both the basics and advanced topics to help you become proficient in creating interactive websites and applications.',
    content: 'In this course, you will learn HTML for structuring web pages, CSS for styling, JavaScript for interactivity, and modern frameworks to build powerful, scalable applications.',
  };

  const courseDetails = {
    facility: 'Online and On-site classes available',
    duration: '6 months',
    attendance: 'Mandatory 80% attendance',
    graduation: 'Upon completion, receive a certificate of completion',
    costs: 'USD $499',
    place: 'Available worldwide online, on-site in major cities',
    appointments: 'Available by appointment with the instructor',
  };

  return (
    <div className="py-[8rem] px-6 flex flex-col items-center bg-gray-900 text-white">
      {/* Course Title and Description */}  
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent mb-4">
          {course.name}
        </h1>
        <p className="text-lg text-gray-300 mb-8">{course.description}</p>
        <p className="text-md text-gray-300">{course.content}</p>
      </div>

      {/* Course Details */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 mb-12">
        {/* Left Section (Description) */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#32549c] mb-4">Course Details</h2>
          <p className="text-md text-justify text-gray-300">
            This Web Development course covers a wide range of topics and is designed to equip students with the necessary skills to build modern, dynamic websites and applications. The course includes both theory and hands-on projects, with an emphasis on best practices in web development.
            This Web Development course covers a wide range of topics and is designed to equip students with the necessary skills to build modern, dynamic websites and applications. The course includes both theory and hands-on projects, with an emphasis on best practices in web development.
            This Web Development course covers a wide range of topics and is designed to equip students with the necessary skills to build modern, dynamic websites and applications. The course includes both theory and hands-on projects, with an emphasis on best practices in web development.
          </p>
        </div>

        {/* Right Section (Details) */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-[#32549c] mb-4">Details</h2>
          <ul className="text-gray-300 space-y-4">
            <li><strong>Facility:</strong> {courseDetails.facility}</li>
            <li><strong>Duration:</strong> {courseDetails.duration}</li>
            <li><strong>Attendance:</strong> {courseDetails.attendance}</li>
            <li><strong>Graduation:</strong> {courseDetails.graduation}</li>
            <li><strong>Costs:</strong> {courseDetails.costs}</li>
            <li><strong>Place:</strong> {courseDetails.place}</li>
            <li><strong>Appointments:</strong> {courseDetails.appointments}</li>
          </ul>
        </div>
      </div>

      {/* Apply Form */}
      <div className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-[#32549c] mb-6 text-center">Apply for the Course</h2>
        <form className="space-y-6">
          <div className="form-group">
            <label htmlFor="name" className="text-lg">Full Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-lg">Email Address</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#32549c] focus:border-[#32549c]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="text-lg">Why do you want to take this course?</label>
            <textarea
              id="message"
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
