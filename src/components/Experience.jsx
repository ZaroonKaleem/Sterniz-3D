import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { useTranslation } from 'react-i18next';  // Import the hook
import "react-vertical-timeline-component/style.min.css";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();  // Use the translation hook
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#222a49",
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
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{t(experience.title)}</h3>
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

const Experience = () => {
  const { t } = useTranslation();  // Use the translation hook
  const navigate = useNavigate();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t('services')}</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent font-black text-center`}
        >
{t('SecurityServices')} 
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>

        <div className="mt-10 flex justify-center">
          <button 
          onClick={() => navigate("/security-services")} 
          className="px-6 py-3 hover:bg-[#314277] bg-[#3954a9] text-white font-bold rounded-lg shadow-md transition-all duration-300 w-auto">
            {t('MoreSecurityServices')}
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
