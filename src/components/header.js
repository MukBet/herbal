import * as React from "react";
import { Link } from "gatsby";
import HeaderLogoImageStatic from "./headerLogoImgStatic.js";
import LanguageSwitcher from './languageSwitcher';
import SocialLinks from './social/socialLinks';
import * as styles from './Header.module.css';

const Header = ({ siteTitleA, siteTitleB }) => (
  <header className={styles.header}
    style={{
      margin: `0 auto`,
      padding: `var(--space-3) var(--space-3)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `#7ac043`,
      position: 'relative',
      flexWrap: 'wrap', // Позволяет элементам переноситься на мобильных устройствах
    }}
  >
    {/* Левая часть: Название сайта */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px',
      flex: '0 1 auto', // Остаётся компактным на десктопе
    }}>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-lg)`,
          textDecoration: `none`,
          color: `white`,
          fontWeight: `600`,
          fontFamily: `'Roboto', Arial, sans-serif`,
          marginBottom: '5px',
        }}
      >
        {siteTitleA}
      </Link>
      <Link
        to="/"
        style={{
          fontSize: `34px`,
          textDecoration: `none`,
          color: `#111`,
          fontWeight: `bold`,
          fontFamily: `'Roboto', Arial, sans-serif`,
        }}
      >
        {siteTitleB}
      </Link>
    </div>

    {/* Блок с социальными ссылками */}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flex: '0 1 auto', // Остаётся компактным
      margin: '0 10px', // Расстояние между блоками
    }}>
      <SocialLinks />
    </div>

    {/* Логотип */}
    <div style={{
      flex: '0 1 auto', // Остаётся компактным
    }}>
     
      {/* Логотип */}
      <HeaderLogoImageStatic />

      {/* Переключатель языка */}
      <div style={{
        position: 'absolute',
        top: '110px',
        right: '10px',
      }}>
        <LanguageSwitcher />
      </div>
    </div>

  </header>
);

export default Header;
