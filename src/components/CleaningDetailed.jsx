// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { cleaningExperiencesDetail } from "../constants"; // Ensure you have this array
// import { SectionWrapper } from "../hoc";
// import { textVariant3 } from "../utils/motion";

// const CleaningDetailCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className="w-[60%] h-[60%] object-contain"
//           />
//         </div>
//       }
//       position="left" // Always place the card on the left
//     >
//       <div>
//         <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//         <p
//           className="text-secondary text-[16px] font-semibold"
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="text-white-100 text-[14px] pl-1 tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const CleaningDetails = () => {
//   return (
//     <>
//       <motion.div variants={textVariant3()} initial="hidden" whileInView="show">
//         <p className={`${styles.sectionSubText} mt-4 text-center`}>Services</p>
//         <h2
//           className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}
//         >
//           Cleaning Services
//         </h2>
//       </motion.div>

//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline>
//           {cleaningExperiencesDetail.map((experience, index) => (
//             <React.Fragment key={`cleaning-experience-${index}`}>
//               {/* Card on the Left */}
//               <CleaningDetailCard experience={experience} />

//               {/* Image on the Right */}
//               <VerticalTimelineElement
//                 contentStyle={{ background: "transparent", boxShadow: "none" }}
//                 contentArrowStyle={{ display: "none" }}
//                 iconStyle={{ background: "transparent", boxShadow: "none" }}
//                 position="right" // Always place the image on the right
//               >
//                 <div className="flex justify-center items-center">
//                   <img
//                     src={experience.image} // Add an `image` field to your data
//                     alt={experience.company_name}
//                     className="w-[300px] h-[200px] object-cover rounded-lg"
//                   />
//                 </div>
//               </VerticalTimelineElement>
//             </React.Fragment>
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(CleaningDetails, "cleaning-details");


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant3 } from "../utils/motion";
import Lottie from "lottie-react";
import CheckCircleIcon from "../assets/icons2/check-circle.svg";

// Import Lottie animations
import c1 from "../assets/images/c1.json";
import c2 from "../assets/images/c2.json";
import c3 from "../assets/images/c3.json";
import c4 from "../assets/images/c4.json";
import c5 from "../assets/images/c5.json";
import c6 from "../assets/images/c6.json";
import c7 from "../assets/images/c7.json";
import c8 from "../assets/images/c8.json";
import c9 from "../assets/images/c9.json";
import c10 from "../assets/images/c10.json";

const animationMap = {
  "c1.json": c1,
  "c2.json": c2,
  "c3.json": c3,
  "c4.json": c4,
  "c5.json": c5,
  "c6.json": c6,
  "c7.json": c7,
  "c8.json": c8,
  "c9.json": c9,
  "c10.json": c10,
};

const cleaningServicesData = [
  {
    company: "General Cleaning",
    title: "Comprehensive Cleaning Solutions",
    results: [
      { title: "Daily & Weekly Cleaning" },
      { title: "Sanitization & Hygiene Maintenance" },
      { title: "Eco-Friendly Solutions" },
    ],
    animation: "c1.json",
  },
  {
    company: "Glass & Facade Cleaning",
    title: "Clear & Spotless Windows",
    results: [
      { title: "Streak-Free Window Cleaning" },
      { title: "High-Rise Building Services" },
      { title: "Glass Surface Polishing" },
    ],
    animation: "c2.json",
  },
  {
    company: "Disinfectant Cleaning",
    title: "Health & Safety Compliance",
    results: [
      { title: "Virus & Bacteria Elimination" },
      { title: "Hospital-Grade Disinfection" },
      { title: "Sanitization for Workplaces" },
    ],
    animation: "c3.json",
  },
  {
    company: "Construction Cleaning",
    title: "Post-Construction Cleanup",
    results: [
      { title: "Dust & Debris Removal" },
      { title: "Surface Polishing & Washing" },
      { title: "Final Inspection Cleaning" },
    ],
    animation: "c4.json",
  },
  {
    company: "Industrial Cleaning",
    title: "Heavy-Duty Cleaning Solutions",
    results: [
      { title: "Machine & Equipment Cleaning" },
      { title: "Oil & Grease Removal" },
      { title: "Factory & Warehouse Maintenance" },
    ],
    animation: "c5.json",
  },
];

const CleaningServiceCard = ({ service, index }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (service.animation && animationMap[service.animation]) {
      setAnimationData(animationMap[service.animation]);
    }
  }, [service.animation]);

  return (
    <motion.div
    className="relative bg-[#222a49] border border-[#314177]/90 text-white rounded-xl lg:h-[500px] h-[700px] shadow-lg p-6 lg:grid lg:grid-cols-2 lg:gap-16"
    style={{
      position: "sticky",
      top: `calc(144px + ${index * 20}px)`,
      zIndex: index - index,
    }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="lg:pb-16">
    <div className="bg-gradient-to-r from-blue-700 to-blue-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text px-8 pt-8">
      <span>{service.company}</span>
    </div>
      <h3 className="font-serif md:text-4xl md:mt-5 text-2xl mt-2">{service.title}</h3>
      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
        {service.results.map((result, i) => (
          <li key={i} className="flex gap-4 mt-8 text-sm md:text-base text-white/50">
                      <img
              src={CheckCircleIcon}
              alt="Check Circle"
              className="size-5 md:size-6 sm:size-3"
              style={{ filter: "invert(100%)" }}
            />
            <span>{result.title}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative mt-4 w-full flex justify-center lg:justify-end lg:absolute lg:right-10 lg:bottom-20">
  {animationData && (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-contain"
    />
  )}
</div>


    {/* <div className="absolute right-10 bottom-20 w-[350px]">
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-auto object-contain"
        />
      )}
    </div> */}
  </motion.div>
  );
};

const CleaningServices = () => {
  return (
    <>
      <motion.div
        variants={textVariant3()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={`${styles.sectionSubText} mt-4 text-center`}>What We Offer</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent font-black text-center`}>
          Cleaning Services
        </h2>
      </motion.div>

      <div className="mt-20 space-y-6">
        {cleaningServicesData.map((service, index) => (
          <CleaningServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CleaningServices, "cleaning");
