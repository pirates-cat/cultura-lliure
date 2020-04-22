import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={{ margin: `0 auto`, maxWidth: 600 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Logo alt={siteTitle} />
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
