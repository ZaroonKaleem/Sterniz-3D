import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { sheild } from "../assets";
import { facility } from "../assets";
import { about } from "../assets";
import { useTranslation } from 'react-i18next';  // Import the hook
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full border border-2 border-[#314277] p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#222a49] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  const { t } = useTranslation();  // Use the translation hook
  
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about')}</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent font-black`}
        >
          {t('overview')}
        </h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]"
        > {t('intro')}
        </p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full border border-2 border-[#3954A9] p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px]  min-h-[auto] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={about}
                alt="jeff"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Tilt>
      </div>
      {/* <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
  {/* First Service Card - Software Solutions */}
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", 0 * 0.5, 0.75)}
      className="w-full border border-2 border-[#314277] p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#222a49] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={sheild}  // Make sure to import this icon at the top
          alt="software-solutions"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {t('SoftwareSolutions')} {/* Translated text */}
        </h3>
      </div>
    </div>
  </Tilt>

  {/* Second Service Card - Facility Management */}
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
      className="w-full border border-2 border-[#314277] p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#222a49] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={facility}  // Make sure to import this icon at the top
          alt="facility-management"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {t('FacilityManagement')} {/* Translated text */}
        </h3>
      </div>
    </div>
  </Tilt>
</div>
    </>
  );
};

export default SectionWrapper(About, "about");
