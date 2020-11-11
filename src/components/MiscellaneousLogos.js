import React from "react";
import SeabornImg from "../img/SeabornSmall.png"
import MatplotlibImg from "../img/MatplotlibSmall.png"

export function Matplotlib() {
    return (
        <img src={MatplotlibImg} alt="Matplotlib logo" style={{ marginRight: "8px" }} />
    )
}

export function Seaborn() {
    return (
        <img src={SeabornImg} alt="Seaborn logo" style={{ marginRight: "8px" }} />
    )
}
