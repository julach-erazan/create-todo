import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-[130px] flex justify-between p-[10px]">
      <button
        onClick={() => changeLanguage("en")}
        className={`w-[50px] h-[30px] rounded-[25px] border-[2px] border-solid border-[#9191dd]${
          i18n.language === "en" ? "" : ""
        }`}
      >
        <span
          className={`${
            i18n.language === "en" ? "text-[#fff]" : "text-[#9191dd]"
          }`}
        >
          EN
        </span>
      </button>
      <button
        onClick={() => changeLanguage("si")}
        className={`w-[50px] rounded-[25px] border-[2px] border-solid border-[#9191dd]${
          i18n.language === "si" ? "" : ""
        }`}
      >
        <span
          className={`${
            i18n.language === "si" ? "text-[#fff]" : "text-[#9191dd]"
          }`}
        >
          SI
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
