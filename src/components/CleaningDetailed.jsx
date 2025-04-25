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
import { useTranslation } from 'react-i18next';

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



const CleaningServiceCard = ({ service, index }) => {
  const { t } = useTranslation();
  
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
      <span>{t(service.company)}</span>
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
  </motion.div>
  );
};

const CleaningServices = () => {
  const { t } = useTranslation();

  const cleaningServicesData = [

    // {
    //   company: "General Cleaning",
    //   title: "Comprehensive Cleaning Solutions",
    //   results: [
    //     { title: "Daily & Weekly Cleaning" },
    //     { title: "Sanitization & Hygiene Maintenance" },
    //     { title: "Eco-Friendly Solutions" },
    //   ],
    //   animation: "c1.json",
    // },
    {
      company: t("general_cleaning.company"),
      title: t("general_cleaning.title"),
      results: [
        { title: t("general_cleaning.result1") },
        { title: t("general_cleaning.result2") },
        { title: t("general_cleaning.result3") },
      ],
      animation: "c1.json",
    },
    {
      company: t("glass_cleaning.company"),
      title: t("glass_cleaning.title"),
      results: [
        { title: t("glass_cleaning.result1") },
        { title: t("glass_cleaning.result2") },
        { title: t("glass_cleaning.result3") },
      ],
      animation: "c2.json",
    },
    {
      company: t("disinfectant_cleaning.company"),
      title: t("disinfectant_cleaning.title"),
      results: [
        { title: t("disinfectant_cleaning.result1") },
        { title: t("disinfectant_cleaning.result2") },
        { title: t("disinfectant_cleaning.result3") },
      ],
      animation: "c3.json",
    },
    {
      company: t("construction_cleaning.company"),
      title: t("construction_cleaning.title"),
      results: [
        { title: t("construction_cleaning.result1") },
        { title: t("construction_cleaning.result2") },
        { title: t("construction_cleaning.result3") },
      ],
      animation: "c4.json",
    },
    {
      company: t("industrial_cleaning.company"),
      title: t("industrial_cleaning.title"),
      results: [
        { title: t("industrial_cleaning.result1") },
        { title: t("industrial_cleaning.result2") },
        { title: t("industrial_cleaning.result3") },
      ],
      animation: "c5.json",
    },
    // },
    // {
    //   company: "Glass & Facade Cleaning",
    //   title: "Clear & Spotless Windows",
    //   results: [
    //     { title: "Streak-Free Window Cleaning" },
    //     { title: "High-Rise Building Services" },
    //     { title: "Glass Surface Polishing" },
    //   ],
    //   animation: "c2.json",
    // },
    // {
    //   company: "Disinfectant Cleaning",
    //   title: "Health & Safety Compliance",
    //   results: [
    //     { title: "Virus & Bacteria Elimination" },
    //     { title: "Hospital-Grade Disinfection" },
    //     { title: "Sanitization for Workplaces" },
    //   ],
    //   animation: "c3.json",
    // },
    // {
    //   company: "Construction Cleaning",
    //   title: "Post-Construction Cleanup",
    //   results: [
    //     { title: "Dust & Debris Removal" },
    //     { title: "Surface Polishing & Washing" },
    //     { title: "Final Inspection Cleaning" },
    //   ],
    //   animation: "c4.json",
    // },
    // {
    //   company: "Industrial Cleaning",
    //   title: "Heavy-Duty Cleaning Solutions",
    //   results: [
    //     { title: "Machine & Equipment Cleaning" },
    //     { title: "Oil & Grease Removal" },
    //     { title: "Factory & Warehouse Maintenance" },
    //   ],
    //   animation: "c5.json",
    // },
  ];
  return (
    <>
      <motion.div
        variants={textVariant3()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={`${styles.sectionSubText} mt-4 text-center`}>{t('WhatWeOffer')}</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent font-black text-center`}>
          {t('CleaningServices')}
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


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { textVariant3 } from "../utils/motion";
// import Lottie from "lottie-react";
// import CheckCircleIcon from "../assets/icons2/check-circle.svg";
// import { useTranslation } from 'react-i18next';

 
// // Import all Lottie animations manually
// import c1 from "../assets/images/c1.json";
// import c2 from "../assets/images/c2.json";
// import c3 from "../assets/images/c3.json";
// import c4 from "../assets/images/c4.json";
// import c5 from "../assets/images/c5.json";
// import c6 from "../assets/images/c6.json";
// import c7 from "../assets/images/c7.json";
// import c8 from "../assets/images/c8.json";
// import c9 from "../assets/images/c9.json";
// import c10 from "../assets/images/c10.json";


// const CleaningServiceCard = ({ service, index }) => {
//   const [animationData, setAnimationData] = useState(null);

//   useEffect(() => {
//     // Manually map animation files to each service
//     const animationMap = {
//       "c1.json": c1,
//       "c2.json": c2,
//       "c3.json": c3,
//       "c4.json": c4,
//       "c5.json": c5,
//       "c6.json": c6,
//       "c7.json": c7,
//       "c8.json": c8,
//       "c9.json": c9,
//       "c10.json": c10,
//     };

//     if (service.animation && animationMap[service.animation]) {
//       setAnimationData(animationMap[service.animation]);
//     }
//   }, [service.animation]);

//   return (
//     <motion.div
//       className="relative bg-[#222a49] border border-[#314177]/90 text-white rounded-xl lg:h-[500px] h-[700px] shadow-lg p-6 lg:grid lg:grid-cols-2 lg:gap-16"
//       style={{
//         position: "sticky",
//         top: `calc(144px + ${index * 20}px)`,
//         zIndex: index - index,
//       }}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <div className="lg:pb-16">
//         <div className="bg-gradient-to-r from-blue-700 to-blue-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text px-8 pt-8">
//           <span>{service.company}</span>
//         </div>
//         <h3 className="font-serif md:text-4xl md:mt-5 text-2xl mt-2">{service.title}</h3>
//         <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
//         <ul className="flex flex-col gap-4 mt-4 md:mt-5">
//           {service.results.map((result, i) => (
//             <li key={i} className="flex gap-4 mt-8 text-sm md:text-base text-white/50">
//               <img
//                 src={CheckCircleIcon}
//                 alt="Check Circle"
//                 className="size-5 md:size-6 sm:size-3"
//                 style={{ filter: "invert(100%)" }}
//               />
//               <span>{result.title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="relative mt-4 w-full flex justify-center lg:justify-end lg:absolute lg:right-10 lg:bottom-20">
//         {animationData && (
//           <Lottie
//             animationData={animationData}
//             loop={true}
//             className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-contain"
//           />
//         )}
//       </div>
//     </motion.div>
//   );
// };

// const CleaningServices = () => {
//   const { t } = useTranslation();

//   // Manually define all services data
//   const servicesData = [
//     {
//       company: "General Cleaning",
//       title: "Cleaning and service",
//       results: [
//         { title: "Comprehensive cleaning solutions" },
//         { title: "Routine maintenance" },
//         { title: "Deep cleaning services" },
//       ],
//       animation: "c1.json",
//     },
//     {
//       company: "Maintenance",
//       title: "Maintenance cleaning",
//       results: [
//         { title: "Regular cleaning schedules" },
//         { title: "Long-term upkeep solutions" },
//         { title: "Hygiene maintenance" },
//       ],
//       animation: "c2.json",
//     },
//     {
//       company: "Staffing",
//       title: "Daytime and service staff",
//       results: [
//         { title: "On-site cleaning personnel" },
//         { title: "Immediate cleaning needs" },
//         { title: "Facility management support" },
//       ],
//       animation: "c3.json",
//     },
//     {
//       company: "Specialized",
//       title: "Glass and facade cleaning",
//       results: [
//         { title: "Professional window cleaning" },
//         { title: "Building facade maintenance" },
//         { title: "Smog and stain removal" },
//       ],
//       animation: "c4.json",
//     },
//     {
//       company: "Deep Cleaning",
//       title: "Basic and special cleaning",
//       results: [
//         { title: "Carpet and upholstery cleaning" },
//         { title: "Hard-to-reach surface cleaning" },
//         { title: "Specialized cleaning solutions" },
//       ],
//       animation: "c5.json",
//     },
//     // Continue with all other services...
//     {
//       company: "Safety",
//       title: "Hygiene & Safety Concept (HSC)",
//       results: [
//         { title: "Workplace hygiene standards" },
//         { title: "Hospital-grade protocols" },
//         { title: "Food industry compliance" },
//       ],
//       animation: "c6.json",
//     },
//     {
//       company: "Sanitization",
//       title: "Disinfectant cleaning",
//       results: [
//         { title: "Virus and bacteria elimination" },
//         { title: "Thorough sanitization" },
//         { title: "Safe environment protocols" },
//       ],
//       animation: "c7.json",
//     },
//     // Add all remaining services following the same pattern
//   ];

//   return (
//     <>
//       <motion.div
//         variants={textVariant3()}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//       >
//         <p className={`${styles.sectionSubText} mt-4 text-center`}>{t('WhatWeOffer')}</p>
//         <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent font-black text-center`}>
//           {t('CleaningServices')}
//         </h2>
//       </motion.div>

//       <div className="mt-20 space-y-6">
//         {servicesData.map((service, index) => (
//           <CleaningServiceCard key={index} service={service} index={index} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(CleaningServices, "cleaning");