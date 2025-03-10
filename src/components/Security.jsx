import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { securityServices } from "../constants"; // Assuming you have a new constant file for security services
import { SectionWrapper } from "../hoc";
import { textVariant3 } from "../utils/motion";

const SecurityServiceCard = ({ service }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={service.date}
      iconStyle={{ background: service.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={service.icon}
            alt={service.service_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{service.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {service.service_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {service.points.map((point, index) => (
          <li
            key={`service-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const SecurityServices = () => {
  return (
    <>
      {/* Heading Section */}
      <motion.div
        variants={textVariant3()} // Apply textVariant3 animation
        initial="hidden" // Initial state
        whileInView="show" // Animate when in view
        viewport={{ once: true, amount: 0.25 }} // Trigger animation once
      >
        <p className={`${styles.sectionSubText} mt-4 text-center`}>What We Offer</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}
        >
          Security Services
        </h2>
      </motion.div>

      {/* Timeline Section */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {securityServices.map((service, index) => (
            <SecurityServiceCard
              key={`service-${index}`}
              service={service}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(SecurityServices, "security");