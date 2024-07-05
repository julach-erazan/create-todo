import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end p-4">
      <button
        onClick={() => changeLanguage("en")}
        className={`mx-2 px-4 py-2 ${
          i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("si")}
        className={`mx-2 px-4 py-2 ${
          i18n.language === "si" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        SI
      </button>
    </div>
  );
};

export default LanguageSwitcher;