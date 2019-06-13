import { Link } from "gatsby"
import React from "react"


const Footer = () =>
<div className="footer">
<p>
<Link to="/privacy/">Privacy Policy </Link> - Vanessa Rodegher 
  © 
  {new Date().getFullYear()}, Built with
{` `}
<Link to="https://www.gatsbyjs.org">Gatsby</Link>  

</p>
</div>

export default Footer;