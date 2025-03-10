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
// import { textVariant } from "../utils/motion";

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
//       {/* Heading Section */}
//       <motion.div
//         variants={textVariant()} // Apply textVariant animation
//         initial="hidden" // Initial state
//         whileInView="show" // Animate when in view
//         viewport={{ once: true, amount: 0.25 }} // Trigger animation once
//       >
//         <p className={`${styles.sectionSubText} mt-4 text-center`}>Services</p>
//         <h2
//           className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}
//         >
//           Cleaning Services
//         </h2>
//       </motion.div>

//       {/* Timeline Section */}
//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline>
//           {cleaningExperiencesDetail.map((experience, index) => (
//             <CleaningDetailCard
//               key={`cleaning-experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(CleaningDetails, "cleaning-details");

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { cleaningExperiencesDetail } from "../constants"; // Ensure you have this array
import { SectionWrapper } from "../hoc";
import { textVariant3 } from "../utils/motion";

const CleaningDetailCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      position="left" // Always place the card on the left
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const CleaningDetails = () => {
  return (
    <>
      <motion.div variants={textVariant3()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText} mt-4 text-center`}>Services</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}
        >
          Cleaning Services
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {cleaningExperiencesDetail.map((experience, index) => (
            <React.Fragment key={`cleaning-experience-${index}`}>
              {/* Card on the Left */}
              <CleaningDetailCard experience={experience} />

              {/* Image on the Right */}
              <VerticalTimelineElement
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                iconStyle={{ background: "transparent", boxShadow: "none" }}
                position="right" // Always place the image on the right
              >
                <div className="flex justify-center items-center">
                  <img
                    src={experience.image} // Add an `image` field to your data
                    alt={experience.company_name}
                    className="w-[300px] h-[200px] object-cover rounded-lg"
                  />
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(CleaningDetails, "cleaning-details");