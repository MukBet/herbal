import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

const HeaderLogoImageStatic = () => {
  return (
    <StaticImage
      src="../images/herbalife-logo-header_1.png" // путь к вашему изображению
      alt="Логотип"
      placeholder="blurred"
      layout="fixed"
      width={250} // задайте нужный размер
    />
  );
};

export default HeaderLogoImageStatic;