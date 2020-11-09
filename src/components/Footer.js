import React from "react";
import "./footer.css";
import SocialMediaButtons from "./SocialMediaButtons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">Copyright © the d3 graph gallery 2018</div>
      <SocialMediaButtons />
      <div className="policy">
        <a className="policyItem" href="https://www.windguru.cz">
          Pricacy policy
        </a>
        <a className="policyItem" href="https://www.windguru.cz">
          Term policy
        </a>
        <a className="policyItem" href="https://www.windguru.cz">
          Term of use
        </a>
      </div>
    </div>
  );
}
