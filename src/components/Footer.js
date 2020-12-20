import React from "react";
import "./footer.css";
import SocialMediaButtons from "./SocialMediaButtons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">Copyright © the Python Graph Gallery 2018</div>
      <SocialMediaButtons />
      <a className="policy" href="https://www.windguru.cz">
        Pricacy policy
      </a>
    </div>
  );
}
