/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLanguage } from '../context/languageContext'; // Предполагается, что контекст уже настроен


function Seo({ description, title, children }) {
  const { language } = useLanguage(); // Получение текущего языка
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            locales {
              en {
                title
                description
              }
              uk {
                title
                description
              }
              ru {
                title
                description
              }
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.locales[language].description;
  const defaultTitle = site.siteMetadata.locales[language].title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
