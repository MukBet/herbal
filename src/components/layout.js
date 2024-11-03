/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Ticker from './runLine/runLine.js';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          titleA,
          titleB,
          bottom {
            title,
            url,
            builtWithTitle,
            builtWithUrl
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitleA={data.site.siteMetadata?.titleA || `Title`} siteTitleB={data.site.siteMetadata?.titleB || `Title`} />
      <Ticker  text="Клацніть тут! Щоб відкрити ціни." link=""></Ticker>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        
      </div>
      <Footer 
      bottomTitle={data.site.siteMetadata.bottom?.title || `Herballife`} 
      bottomUrl={data.site.siteMetadata.bottom?.url || `https://www.herbalife.com/`} 
      bottomBuiltWithTitle={data.site.siteMetadata.bottom?.builtWithTitle || `https://www.gatsbyjs.com/`} 
      bottomBuiltWithUrl={data.site.siteMetadata.bottom?.builtWithUrl || `https://www.gatsbyjs.com/`} 

      />
    </>
  )
}

export default Layout
