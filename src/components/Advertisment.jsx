import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { textVariant3 } from "../utils/motion";

// Dummy courses data
const courses = [
  { id: 1, title: 'Web Development Ad', description: 'Start your web development career with our exclusive program.', type: 'Online', region: 'Global' },
  { id: 2, title: 'Data Science Bootcamp', description: 'Get hands-on experience in data science with industry experts.', type: 'In-person', region: 'USA' },
  { id: 3, title: 'Graphic Design Mastery', description: 'Learn the art of graphic design and unlock creative potential.', type: 'Hybrid', region: 'Europe' },
  { id: 4, title: 'Machine Learning Essentials', description: 'Dive deep into machine learning with real-world examples.', type: 'Online', region: 'Global' },
  { id: 5, title: 'Mobile App Development', description: 'Create mobile apps for both Android and iOS platforms.', type: 'In-person', region: 'USA' },
];

const AdvertismentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through courses
  const nextCourse = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (courses.length - 2)); // Display 3 courses at once
  };

  const prevCourse = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length - 2) % (courses.length - 2)); // Adjust wraparound for 3 courses
  };

  // Effect to automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextCourse, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get the next 3 courses based on the current index
  const displayedCourses = [
    courses[currentIndex],
    courses[(currentIndex + 1) % courses.length],
    courses[(currentIndex + 2) % courses.length],
  ];

  return (
    <div className="py-8 bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] flex flex-col items-center">
      {/* Heading and Paragraph */}
      <motion.div variants={textVariant3()} initial="hidden" whileInView="show">
        <h1 className="text-3xl font-bold text-white text-center mb-4">Featured Advertisements</h1>
        <p className="text-lg text-gray-200 text-center mb-6">
          Explore the latest courses and advertisements to help you advance your career and skills.
        </p>
      </motion.div>

      {/* Slider */}
      <div className="w-full max-w-4xl flex justify-center items-center relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white" onClick={prevCourse}>
          <span className="text-3xl">&lt;</span>
        </div>

        <div className="flex space-x-6">
          {displayedCourses.map((course, index) => (
            <div key={course.id} className="bg-gray-800 p-6 rounded-lg max-w-xs w-full text-center">
              <h2 className="text-xl font-semibold text-[#32549c] mb-2">{course.title}</h2>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <p className="text-sm text-gray-400 mb-4">{course.type} | {course.region}</p>
              <Link
                to={`/advertisement/${course.id}`}
                className="text-[#32549c] font-bold hover:text-white transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white" onClick={nextCourse}>
          <span className="text-3xl">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default AdvertismentSlider;
