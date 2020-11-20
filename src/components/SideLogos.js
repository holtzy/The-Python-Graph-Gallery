import "./sideLogos.css"
import React from "react";
import { chartTypesInfo } from "../util/sectionDescriptions";
import { fullUrlToInternalLink } from "../util/utils";
import { Link } from "gatsby";
import SectionLogo from "./SectionLogo";

export default function SideLogos() {

    const logoList = chartTypesInfo.map((chart, i) => {
        return (
            <div className="sideLogosLabelContainer" key={i}>
                <div className="sideLogosImage" >
                    <Link to={fullUrlToInternalLink(chart.pythonURL)}>
                        <SectionLogo chartType={chart.logo} />
                    </Link>
                </div>
                <p className="sideLogosLabel">{chart.label}</p>
            </div>
        );
    });

    return (
        <div className="sideLogosContainer">
            {logoList}
        </div>
    );
}
