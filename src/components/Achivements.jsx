import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

import { useTranslation } from 'react-i18next';  // Import the hook

const Achievement = () => {
  const { t } = useTranslation();  // Use the translation hook

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-[#222a49] rounded-2xl ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>{t('Secrecy')}</h2> <br />
          <p className="text-justify">{t('SecrecyDescription')}</p>
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