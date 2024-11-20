import * as React from "react"
//import { Link } from "gatsby"


const moreLinks = [
  { text: "Join us on ...", url: "https://gatsby.dev/discord" },
  // {
  //   text: "Documentation",
  //   url: "https://gatsbyjs.com/docs/",
  // },
  // {
  //   text: "Partners",
  //   url: "https://gatsbyjs.com/starters/",
  // },
  // {
  //   text: "Showcase",
  //   url: "https://gatsbyjs.com/showcase/",
  // },
  // {
  //   text: "Contributing",
  //   url: "https://www.gatsbyjs.com/contributing/",
  // },
 // { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const Footer = ({ bottomTitle, bottomUrl,bottomBuiltWithTitle,bottomBuiltWithUrl }) => (
  <footer
    style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: `#7ac043`,
        color: "white"
    }}
  >
    <span>© {new Date().getFullYear()} Built with <a href={bottomBuiltWithUrl} style={{color: "white"}} target="_blank" rel="noreferrer">{bottomBuiltWithTitle}</a>&middot;</span>
    
    {` `}
    {/* Думаю надо в Футере поработать с цветами текста, ну и стили, размер */}
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`} target="_blank" rel="noreferrer" style={{color: "white"}} >{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}

    <a href={bottomUrl} style={{color: "white"}}  target="_blank" rel="noreferrer">{bottomTitle}</a>
  </footer>
)

export default Footer
