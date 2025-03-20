import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";
// import "./Achievement.scss";

const Achievement = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-[#222a49] rounded-2xl ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>connect with us to hold secrecy</h2> <br />
          <p className="text-justify">As valued partners in our security ecosystem, you play a crucial role in maintaining a safe and secure environment. Your authority to provide and verify vital information significantly enhances the effectiveness of our services, ensuring a proactive approach to security management. By actively sharing real-time data, including security monitoring details, camera feeds, and incident reports, you help us maintain accuracy and responsiveness in addressing potential threats.

This direct connection between you and our security infrastructure offers several key benefits:</p>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center p-6 ${styles.paddingX} gap-7`}>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {achievements.map((achievement) => (
          <li className='text-white-100 text-[15px] pl-1'>{achievement.title}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievement, "");