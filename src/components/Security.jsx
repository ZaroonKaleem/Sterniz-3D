// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { securityServices } from "../constants"; // Assuming you have a new constant file for security services
// import { SectionWrapper } from "../hoc";
// import { textVariant3 } from "../utils/motion";

// const SecurityServiceCard = ({ service }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={service.date}
//       iconStyle={{ background: service.iconBg }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={service.icon}
//             alt={service.service_name}
//             className="w-[60%] h-[60%] object-contain"
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className="text-white text-[24px] font-bold">{service.title}</h3>
//         <p
//           className="text-secondary text-[16px] font-semibold"
//           style={{ margin: 0 }}
//         >
//           {service.service_name}
//         </p>
//       </div>

//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {service.points.map((point, index) => (
//           <li
//             key={`service-point-${index}`}
//             className="text-white-100 text-[14px] pl-1 tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const SecurityServices = () => {
//   return (
//     <>
//       {/* Heading Section */}
//       <motion.div
//         variants={textVariant3()} // Apply textVariant3 animation
//         initial="hidden" // Initial state
//         whileInView="show" // Animate when in view
//         viewport={{ once: true, amount: 0.25 }} // Trigger animation once
//       >
//         <p className={`${styles.sectionSubText} mt-4 text-center`}>What We Offer</p>
//         <h2
//           className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}
//         >
//           Security Services
//         </h2>
//       </motion.div>

//       {/* Timeline Section */}
//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline>
//           {securityServices.map((service, index) => (
//             <SecurityServiceCard
//               key={`service-${index}`}
//               service={service}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(SecurityServices, "security");





import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant3 } from "../utils/motion";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

// import CheckCircleIcon from "../assets/icons2/check-circle.svg";
import Property from "../assets/images/property.json";
import EventProtection from "../assets/images/event.json";
import EmergencyCall from "../assets/images/emergency.json";
import Gatekeeper from "../assets/images/baggage.json";
import FireSafety from "../assets/images/fire.json";
import DepartmentDetective from "../assets/images/mall.json";
import Doorman from "../assets/images/department.json";
import MallGuard from "../assets/images/mall.json";
import ConstructionSite from "../assets/images/c7.json";
// import { ReactComponent as CheckCircleIcon } from "../assets/icons2/check-circle.svg";
import CheckCircleIcon from "../assets/icons2/check-circle.svg";

const animationMap = {
  "Property.json": Property,
  "EventProtection.json": EventProtection,
  "EmergencyCall.json": EmergencyCall,
  "Gatekeeper.json": Gatekeeper,
  "FireSafety.json": FireSafety,
  "DepartmentDetective.json": DepartmentDetective,
  "Doorman.json": Doorman,
  "MallGuard.json": MallGuard,
  "ConstructionSite.json": ConstructionSite,
};



const SecurityServiceCard = ({ service, index }) => {

  const { t } = useTranslation();

  
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (service.animation && animationMap[service.animation]) {
      setAnimationData(animationMap[service.animation]);
    }
  }, [service.animation]);
  
  return (
    <motion.div
  className="relative bg-[#222a49] border border-[#314177]/90 text-white rounded-xl h-[700px] shadow-lg p-6 lg:grid lg:grid-cols-2 lg:gap-16"
  style={{
    position: "sticky",
    top: `calc(${window.innerWidth < 768 ? "80px" : "144px"} + ${index * 20}px)`, // Smaller top spacing on mobile
    // top: `calc(144px + ${index * 20}px)`, // Ensures each new card stacks slightly below the previous one
    zIndex: index - index, // Higher index cards stack on top
  }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
  {/* Left Side Content */}
  <div className="lg:pb-16">
    <div className="bg-gradient-to-r from-blue-700 to-blue-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text px-8 pt-8">
      <span>{service.company}</span>
    </div>
    <h3 className="font-serif md:text-4xl md:mt-5 text-2xl mt-2">{service.title}</h3>
    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
      {service.results.map((result, i) => (
        <li key={`service-point-${i}`} className="flex gap-4 mt-8 text-sm md:text-base text-white/50">
          {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
          <img
  src={CheckCircleIcon}
  alt="Check Circle"
  className="size-5 md:size-6"
  style={{ filter: "invert(100%)" }}
/>
          {/* <img src={CheckCircleIcon} alt="Check Circle" className="size-5 text-white md:size-6" /> */}
          <span>{result.title}</span>
        </li>
      ))}
    </ul>
    {/* <a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 mt-2 inline-block"
    >
      <button>
      Watch Video
      </button>
    </a> */}
  </div>

  {/* Right Side Animation */}
  <div className="relative">
  <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none flex justify-center lg:justify-end"
>
  {service.animation && animationMap[service.animation] && (
    <Lottie
      animationData={animationMap[service.animation]}
      loop={true}
      className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[450px] max-h-[250px] md:max-h-[350px] lg:max-h-[500px] object-contain"
    />
  )}
</motion.div>

  </div>
</motion.div>

    );
};

// Main Security Services Component
const SecurityServices = () => {
  
  const { t } = useTranslation();

  // Define the data inside the file
  const portfolioProjects = [
    {
      company: t("property_protection.company"),
      title: t("property_protection.title"),
      results: [
        { title: t("property_protection.result1") },
        { title: t("property_protection.result2") },
        { title: t("property_protection.result3") },
      ],
      animation: "Property.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
    {
      company: t("event_protection.company"),
      title: t("event_protection.title"),
      results: [
        { title: t("event_protection.result1") },
        { title: t("event_protection.result2") },
        { title: t("event_protection.result3") },
      ],
      animation: "EventProtection.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
    {
      company: t("emergency_call_service_control_center.company"),
      title: t("emergency_call_service_control_center.title"),
      results: [
        { title: t("emergency_call_service_control_center.result1") },
        { title: t("emergency_call_service_control_center.result2") },
        { title: t("emergency_call_service_control_center.result3") },
      ],
      animation: "EmergencyCall.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
    {
      company: t("gatekeeper_reception_service.company"),
      title: t("gatekeeper_reception_service.title"),
      results: [
        { title: t("gatekeeper_reception_service.result1") },
        { title: t("gatekeeper_reception_service.result2") },
        { title: t("gatekeeper_reception_service.result3") },
      ],
      animation: "Gatekeeper.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
    {
      company: t("fire_safety_security_service.company"),
      title: t("fire_safety_security_service.title"),
      results: [
        { title: t("fire_safety_security_service.result1") },
        { title: t("fire_safety_security_service.result2") },
        { title: t("fire_safety_security_service.result3") },
      ],
      animation: "FireSafety.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
    {
      company: t("department_store_detective.company"),
      title: t("department_store_detective.title"),
      results: [
        { title: t("department_store_detective.result1") },
        { title: t("department_store_detective.result2") },
        { title: t("department_store_detective.result3") },
      ],
      animation: "DepartmentDetective.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
    {
      company: t("doorman.company"),
      title: t("doorman.title"),
      results: [
        { title: t("doorman.result1") },
        { title: t("doorman.result2") },
        { title: t("doorman.result3") },
      ],
      animation: "Doorman.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
    {
      company: t("mall_guard.company"),
      title: t("mall_guard.title"),
      results: [
        { title: t("mall_guard.result1") },
        { title: t("mall_guard.result2") },
        { title: t("mall_guard.result3") },
      ],
      animation: "MallGuard.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
    {
      company: t("construction_site_security.company"),
      title: t("construction_site_security.title"),
      results: [
        { title: t("construction_site_security.result1") },
        { title: t("construction_site_security.result2") },
        { title: t("construction_site_security.result3") },
      ],
      animation: "ConstructionSite.json",
      link: "https://youtu.be/Z7I5uSRHMHg",
    },
  ];
  

  return (
    <>
      {/* Heading Section */}
      <motion.div
        variants={textVariant3()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={`${styles.sectionSubText} mt-4 text-center`}>{t('WhatWeOffer')}</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent font-black text-center`}>
          {t('SecurityServices')}
        </h2>
      </motion.div>

      {/* Cards Section */}
      <div className="mt-20 space-y-6">
        {portfolioProjects
          .slice()
          .reverse() // Reverse the array to ensure stacking order is correct
          .map((service, index) => (
            <SecurityServiceCard key={`service-${index}`} service={service} index={index} />
          ))}
      </div>
    </>
  );
};


export default SectionWrapper(SecurityServices, "security");
