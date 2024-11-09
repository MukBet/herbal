import React from 'react';
import { useLanguage } from '../context/languageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

//   const translations = {
//     currentLanguage: {
//       en: "Current language",
//       uk: "Поточна мова",
//       ru: "Текущий язык",
//     },
//   };
  const buttonStyle = (lang) => ({
    backgroundColor: language === lang ? '#faa634' : 'initial',
    color: language === lang ? 'white' : 'black',
    padding: '8px 16px',
    border: 'none',
    margin: '0 4px',
    cursor: 'pointer',
    opacity: 0.70,
    fontWeight: language === lang ? 'bold' : 'normal',
  });

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
    <button style={buttonStyle('en')} onClick={() => toggleLanguage('en')}>
      EN
    </button>
    <button style={buttonStyle('uk')} onClick={() => toggleLanguage('uk')}>
      UK
    </button>
    {/* <button style={buttonStyle('ru')} onClick={() => toggleLanguage('ru')}>
      RU
    </button> */}
    {/* <p>{translations.currentLanguage[language]}: {language}</p> */}
  </span>
  );
};

export default LanguageSwitcher;