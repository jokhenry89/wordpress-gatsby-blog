/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"


import Header from "./header"
import "./layout.scss"




const Layout = ({ children }, props) => (
  
 

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    
    render={data => (
      <div className = "content">
      
        <div className = "flex-main">
        <Header siteTitle={data.site.siteMetadata.title} 
        onClick = {props.sidenav}
        
        
        />
      
        
          <main>{children}</main>
          </div>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
          
          </div>
      
     
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
