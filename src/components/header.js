import * as React from "react";
import { Link } from "gatsby";
import HeaderLogoImageStatic from "./headerLogoImgStatic.js";
import LanguageSwitcher from './languageSwitcher';

const Header = ({ siteTitleA, siteTitleB }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-3) var(--space-3)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `#7ac043`,
      position: 'relative', // Добавляем относительное позиционирование
    }}
  >
    {/* Левая часть: Название сайта */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px',
    }}>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-lg)`,
          textDecoration: `none`,
          color: `white`,
          fontWeight: `600`,
          fontFamily: `'Arial', sans-serif`,
          marginBottom: '5px',
        }}
      >
        {siteTitleA}
      </Link>
      <Link
        to="/"
        style={{
          fontSize: `30px`,
          textDecoration: `none`,
          color: `#111`,
          fontWeight: `bold`,
          fontFamily: `'Arial', sans-serif`,
        }}
      >
        {siteTitleB}
      </Link>
    </div>

    {/* Логотип */}
    <HeaderLogoImageStatic />

    {/* Переключатель языка, прикрепленный к правому верхнему углу */}
    <div style={{
      position: 'absolute',
      top: '110px',
      right: '10px',
    }}>
      <LanguageSwitcher />
    </div>
  </header>
);

export default Header;
