import React from "react";
import { Link } from "react-router-dom";
import { textVariant3 } from "../utils/motion";
import { motion } from "framer-motion";
import { emp } from "../assets"
import { useTranslation } from 'react-i18next';

const Software = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mt-4 mx-auto">
        {/* Page Title */}
        <motion.div variants={textVariant3()} initial="hidden" whileInView="show">
  <h1 className="text-4xl mt-16 font-bold animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent text-center mb-6">
    {t('SoftwareSolutions')}
  </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          {t('SoftwareSolutionsText')}
        </p>
</motion.div>


        {/* Employee Management System Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src= {emp} // Replace with an actual image
            alt="Employee Management System"
            className="w-full md:w-1/3 rounded-lg"
          />

          <div className="flex-1">
            {/* <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
              Employee Management System
            </h2> */}
            <h1 className="text-2xl font-semibold animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent  mb-6">
    {t('EmployeeManagementSystem')}
  </h1>
            <p className="text-gray-300 text-lg mb-4">
              {t('EmployeeManagementSystemText')}
            </p>

            {/* Features List */}
            <ul className="list-disc pl-5 text-gray-400">
              <li>{t('AutomatedAttendancePayroll')}</li>
              <li>{t('ShiftSchedulingEmployeeTracking')}</li>
              <li>{t('PerformanceEvaluationReporting')}</li>
            </ul>

            {/* CTA Button */}
            <Link
  to="/employee-management"
  className="px-6 py-3 mt-4 bg-[#3954a9] text-black font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 w-auto inline-block text-center"
>
              {t('LearnMore')}
</Link>

          </div>
        </div>

        {/* Future Solutions Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            {t('MoreSoftwareSolutionsComingSoon')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Software;
