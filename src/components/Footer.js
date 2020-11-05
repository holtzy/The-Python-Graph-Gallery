import React from "react"
import "./footer.css"
import SocialMediaButtons from './SocialMediaButtons'

export default function Footer() {
    return (
        <div className="footer">
            <div className="copyright">
                Copyright © the d3 graph gallery 2018
            </div>
            <SocialMediaButtons />
            <div className="policy">
                <a className="policyItem" href="">Pricacy policy</a>
                <a className="policyItem" href="">Term policy</a>
                <a className="policyItem" href="">Term of use</a>
            </div >
        </div >
    )
}
