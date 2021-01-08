import React from "react";
import SeabornImg from "../img/SeabornSmall.png"
import PandasImg from "../img/PandasSmallClean.png"
import PlotlyImg from "../img/PlotlySmall.png"
import MatplotlibImg from "../img/MatplotlibSmall.png"
import anim150 from "../../static/section/anim150.gif"

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

export function Pandas() {
    return (
        <img src={PandasImg} alt="Pandas logo" style={{ marginRight: "8px" }} />
    )
}

export function Plotly() {
    return (
        <img src={PlotlyImg} alt="Plotly logo" style={{ marginRight: "8px" }} />
    )
}

export function Animation() {
    return (
        <img src={anim150} alt="Animation with python" style={{ maxWidth: "30px", width: "100%", marginRight: "8px" }} />
    )
}
