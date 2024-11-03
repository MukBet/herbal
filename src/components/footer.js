import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ bottomTitle, bottomUrl,bottomBuiltWithTitle,bottomBuiltWithUrl }) => (
  <footer
    style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: `#7ac043`
    }}
  >
    <span>© {new Date().getFullYear()} Built with <a href={bottomBuiltWithUrl} target="_blank">{bottomBuiltWithTitle}</a>&middot;</span>
    
    {` `}
    <a href={bottomUrl} target="_blank">{bottomTitle}</a>
  </footer>
)

export default Footer
