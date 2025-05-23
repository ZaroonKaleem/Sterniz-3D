import React, { useState } from "react";

import { LOGO2, SternizBg } from "../assets";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';  // Import the hook

const Footer = () => {
  const { t } = useTranslation();  // Use the translation hook
  const [active, setActive] = useState("");

  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
      <div className="flex justify-center items-center">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={SternizBg} alt="logo" className="w-28 h-28 object-contain" />
        </Link>
        <p className="text-secondary text-[17px] leading-[30px] text-center select-none">
          {new Date().getFullYear()} {t('Footer')}
        </p>
      </div>
      <div className="w-full h-auto flex justify-center text-[#3852a3] font-bold self-start text-2xl">
        <Typewriter
          text={[
            t('SecurityServices'),
            t('CleaningServices'),
            t('FacilityManagement'),
          ]}
          loop
          speed={80}
          cursor={false}
        />
      </div>
    </div>
  );
};

export default Footer;
