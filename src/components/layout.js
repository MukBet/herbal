/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import Ticker from './runLine/runLine.js';
import "./layout.css"
import { useLanguage } from '../context/languageContext';

const Layout = ({ children }) => {
  
  const { language } = useLanguage(); // Деструктуризация, чтобы получить строку языка

  const data = {
    titleA: {
      en: `Wanna be fit?`,
      uk: `Схуднути хочеш?`,
      ru: `Схуднути хочеш?`,
    },
    titleB: {
      en: `Ask me how!`,
      uk: `Спитай як!`,
      ru: `Спитай як!`,
    },
    bottom: {
      title: {
        en: `About Гербалайф`,
        uk: `Про Гербалайф`,
        ru: `Про Гербалайф`,
      },
      url: `https://www.herbalife.com/uk-ua`,
      builtWithTitle:  {
        en: `gatsbyjs`,
        uk: `gatsbyjs.com`,
        ru: `gatsbyjs.com`,
      },
      builtWithUrl: `https://www.gatsbyjs.com/`,
    },
  };
  console.log("Current language:", language);
  console.log("TitleA for current language:", data.titleA[language]);
  return (
    <>
      <Header siteTitleA={data.titleA[language] || `Title1`} siteTitleB={data.titleB[language] || `Title`} />
      <Ticker  text="Клацніть тут! Щоб відкрити ціни." link=""></Ticker>

      <div
        style={{
          margin: `0 auto`,
         // maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        
      </div>
      <Footer 
      bottomTitle={data.bottom?.title[language] || `Herballife`} 
      bottomUrl={data.bottom?.url || `https://www.herbalife.com/`} 
      bottomBuiltWithTitle={data.bottom?.builtWithTitle[language] || `https://www.gatsbyjs.com/`} 
      bottomBuiltWithUrl={data.bottom?.builtWithUrl || `https://www.gatsbyjs.com/`} 

      />
    </>
  )
}

export default Layout
