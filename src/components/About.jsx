import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { about } from "../assets";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>About US</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
        >
          Overview.
        </h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]"
        >
          {/* Hello! I'm Jeff Jiang, a New York-based Full-Stack Developer
          proficient in an array of modern technologies including Python 3,
          JavaScript ES6+, SQL, Django 4, MongoDB, Node.js, React, and more. I'm
          passionate about creating dynamic, efficient, and user-friendly web
          applications. I have hands-on experience in developing e-commerce
          platforms, utilizing technologies such as Next.js, Strapi, Tailwind,
          Firebase, and Redux. I am also experienced in managing the full
          project lifecycle from setup to deployment. My journey in tech is
          supported by my prior experiences, including my time as a Police
          Officer at NYPD and a Restaurant Manager, which honed my skills in
          teamwork, problem-solving, and operations management. Feel free to
          explore my projects and get in touch at{" "} */}
          We are seasoned security professionals with years of hands-on
          experience, driven by a strong passion for safety, vigilance, and
          expertise. Our commitment to excellence ensures the delivery of
          top-tier protection services, meticulously tailored to meet diverse
          security needs across various industries. With a deep understanding of
          risk management, surveillance, and advanced security protocols, we
          take a proactive approach to safeguarding people, properties, and
          assets. Our team is equipped with cutting-edge technology and industry
          best practices, enabling us to anticipate potential threats and
          respond swiftly to any security challenges. Whether it's event
          protection, emergency response, or facility management, we strive to
          create a safe, secure, and worry-free environment for our clients,
          fostering peace of mind and trust at every step.
          {/* <a
            href="mailto:jeff.jiang13@gmail.com"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            jeff.jiang13@gmail.com.
          </a>{" "}
          I'm always open to new opportunities and collaborations!{" "} */}
        </p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
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
      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
