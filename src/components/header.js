import * as React from "react"
import { Link } from "gatsby"
import HeaderLogoImageStatic from "./headerLogoImgStatic.js";

const Header = ({ siteTitleA,siteTitleB }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-3) var(--space-3)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `#7ac043`
    }}
  >
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Выровнены слева
      padding: '10px', // Отступы от края страницы
    }}>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-lg)`, // Меньший размер шрифта
          textDecoration: `none`, // Убирает подчеркивание
          color: `white`, // Цвет текста
          fontWeight: `600`, // Полужирный текст
          fontFamily: `'Arial', sans-serif`,
          marginBottom: '5px', // Расстояние между заголовками
        }}
      >
        {siteTitleA}
      </Link>
      <Link
        to="/"
        style={{
          fontSize: `30px`, // Больший размер шрифта
          textDecoration: `none`,
          color: `#111`,
          fontWeight: `bold`, // Жирный текст для выделения
          fontFamily: `'Arial', sans-serif`,
        }}
      >
        {siteTitleB}
      </Link>
    </div>
  <HeaderLogoImageStatic />

  </header>
)

export default Header
