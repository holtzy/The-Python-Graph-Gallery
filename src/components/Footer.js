import { Link } from "gatsby";
import React from "react";
import "./footer.css";
import SocialMediaButtons from "./SocialMediaButtons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">Copyright © the Python Graph Gallery 2018</div>
      <SocialMediaButtons />
      <Link className="policy" to="/about">
        About
      </Link>
    </div>
  );
}
