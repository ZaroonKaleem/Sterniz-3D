import React from "react";
import { useTranslation } from 'react-i18next';  // Import the hook

const Impressum = () => {
  const { t } = useTranslation();  // Use the translation hook

  return (
    <div className="min-h-screen text-white flex justify-center items-center p-6">
      <div className="bg-gray-800 mt-[8rem] p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-[#3954a9] mb-4">{t('ContactInfo')}</h1>{" "}
        <br />
        <p className="text-lg font-semibold">Sterniz GmbH</p> <br />
        <p>Brandaustraße 40, 12277 Berlin, Germany</p> <br />
        <p>
          {t('Phone')}: +49 30 20648825 <br /> {t('Email')}: info@sterniz.de
        </p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3954a9]">
            {t('ManagingDirector')}
          </h2>
          <p>Abdullah Aslanoglu</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3954a9]">
            {t('RegisterCourt')}
          </h2>{" "}
          <br />
          <p>{t('RegisterCourtText')}</p> <br />
          <p>{t('VATIdentificationNumber')}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3954a9]">
            {t('Responsible')}
          </h2>{" "}
          <br />
          <p>Abdullah Aslanoglu</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3954a9]">Copyright</h2> <br />
          <p>Copyright © 2025 Sterniz GmbH</p> <br />
          <p>{t('RightsReserved')}</p> <br />
          <p>
            {" "}
            {t('RightsReservedText')}
            {" "}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3954a9]">
            {t('Links')}
          </h2> <br />
          <p>
            {" "}
            {t('LinksText')}
            {" "}
          </p>{" "}
          <br />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3954a9]">{t('Disclaimer')}</h2> <br />
          <p>
            {" "}
            {t('DisclaimerText1')}
            {" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            {t('DisclaimerText2')}
            {" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            {t('DisclaimerText3')}
            {" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            {t('DisclaimerText4')}
            {" "}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3954a9]">
            {t('Trademarks')}
          </h2> <br />
          <p>
            {" "}
            {t('TrademarksText')}
            {" "}
          </p>{" "}
          <br />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3954a9]">
            {t('LegalValidity')}
          </h2> <br />
          <p>
            {" "}
            {t('LegalValidityText')}
            {" "}
          </p>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Impressum;
