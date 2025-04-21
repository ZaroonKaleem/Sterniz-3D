import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { TicofabCanvas } from "./canvas";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useTranslation } from 'react-i18next';
import {
  BsTwitter,
  BsGithub,
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const translatedWords = t("typewriterWords", { returnObjects: true });
  const [text, count] = useTypewriter({
    words: translatedWords,
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="relative w-full h-screen mx-auto pb-20">
  <div
    className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
  >
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df]"></div>
      <div className="w-1 sm:h-80 h-40 animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df]"></div>
    </div>

    <div>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Sterniz <br />
        <span className="animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent font-black">
          {t("YourSafety")},
          <br /> <span className="hidden sm:inline">{t("OurPriority")}</span>
        </span>
      </h1>

      <p className={`${styles.heroSubText} mt-2 sm:-mb-10 text-white-100 max-w-lg`}>
        {text}
        <Cursor cursorColor="#3954a9" />
      </p>
    </div>
  </div>

  {/* <div className="absolute top-[20%] sm:top-[35%] lg:top-[10%] right-[-10%] sm:right-[30%] lg:right-[5%] w-[250px] sm:w-[700px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[600px] md:h-[400px] lg:h-[500px]">
  <TicofabCanvas />
</div> */}
<div className="absolute 
top-[30%] 
sm:top-[45%] 
lg:top-[10%] 
mt-10 
sm:mt-0 
left-1/2 
-translate-x-1/2 
sm:left-auto 
sm:translate-x-0 
sm:right-[30%] 
lg:right-[0%] 
  w-[400px] sm:w-[1200px] md:w-[600px] lg:w-[700px] h-[300px] sm:h-[1000px] md:h-[400px] lg:h-[500px]">
  <TicofabCanvas />
</div>


{/* <div className="absolute top-[25%] sm:top-[45%] lg:top-[10%] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-[30%] lg:right-[5%] w-[300px] sm:w-[1000px] md:w-[400px] lg:w-[500px] h-[300px] sm:h-[1000px] md:h-[400px] lg:h-[500px]">
  <TicofabCanvas />
</div> */}


  <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  </div>

  <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center md:mt-10 mt-5 md:gap-12">
    <Link target="_blank" to="https://www.linkedin.com/in/jeffjiang13/">
      <BsLinkedin
        size={30}
        className="icon hover:text-[#0e76a8] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
      />
    </Link>
    <Link target="_blank" to="https://twitter.com/jeffjiang9">
      <BsTwitter
        size={30}
        className="icon hover:text-[#1DA1F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
      />
    </Link>
    <Link target="_blank" to="https://discord.com/channels/@jeff.jiang13">
      <BsDiscord
        size={30}
        className="icon hover:text-[#5865F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
      />
    </Link>
    <Link target="_blank" to="https://www.instagram.com/trainer.jeff212/">
      <BsInstagram
        size={30}
        className="icon hover:text-[#E1306C] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
      />
    </Link>
    <Link target="_blank" to="https://www.facebook.com/jeff.jiang.9/">
      <BsFacebook
        size={30}
        className="icon hover:text-[#1877F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
      />
    </Link>
  </div>
</section>

//     <section className="relative w-full h-screen mx-auto pb-20">
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df]"></div>
//           <div className="w-1 sm:h-80 h-40 animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df]"></div>
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//           Sterniz <br />{" "}
//             <span className="animate-text bg-gradient-to-r from-[#3954a9] via-[#314277] to-[#7ba6df] bg-clip-text text-transparent font-black">
//             Your Safety, <br /> <span className="hidden sm:inline">Our Priority</span>
//             </span>
//           </h1>

//           <p className={`${styles.heroSubText} mt-2 sm:-mb-10 text-white-100 max-w-lg`}>
//             {text}
//             <Cursor cursorColor="#3954a9" />
//           </p>
//         </div>
//       </div>

// <TicofabCanvas />


//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>

//       <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center md:mt-10 mt-5 md:gap-12">
//         <Link target="_blank" to="https://www.linkedin.com/in/jeffjiang13/">
//           <BsLinkedin
//             size={30}
//             className="icon hover:text-[#0e76a8] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
//           />
//         </Link>

//         {/* <Link target="_blank" to="https://github.com/jeffjiang13">
//           <BsGithub
//             size={30}
//             className="icon hover:text-[#494646] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
//           />
//         </Link> */}

//         <Link target="_blank" to="https://twitter.com/jeffjiang9">
//           <BsTwitter
//             size={30}
//             className="icon hover:text-[#1DA1F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
//           />
//         </Link>

//         <Link target="_blank" to="https://discord.com/channels/@jeff.jiang13">
//           <BsDiscord
//             size={30}
//             className="icon hover:text-[#5865F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
//           />
//         </Link>

//         <Link target="_blank" to="https://www.instagram.com/trainer.jeff212/">
//           <BsInstagram
//             size={30}
//             className="icon hover:text-[#E1306C] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
//           />
//         </Link>
//         <Link target="_blank" to="https://www.facebook.com/jeff.jiang.9/">
//           <BsFacebook
//             size={30}
//             className="icon hover:text-[#1877F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
//           />
//         </Link>
//       </div>
//     </section>
  );
};

export default Hero;
