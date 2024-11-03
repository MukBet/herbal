import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeaderLogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "herbalife-logo-header.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, placeholder: BLURRED)
        }
      }
    }
  `);

  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return <GatsbyImage image={image} alt="Herbalife logo" height={20} style={{ margin: 0 }}/>;
};

export default HeaderLogoImage;
