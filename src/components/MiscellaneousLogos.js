import React from 'react';
import SeabornImg from '../img/SeabornSmall.png';
import PandasImg from '../img/PandasSmallClean.png';
import PlotlyImg from '../img/PlotlySmall.png';
import MatplotlibImg from '../img/MatplotlibSmall.png';
import DrawArrowImg from '../../static/logo/Other/drawarrow.png';
import PyFontsImg from '../../static/logo/Other/pyfonts.png';
import PlotnineImg from '../img/plotnine-small.png';
import anim150 from '../../static/section/anim150.gif';

export function Matplotlib() {
  return (
    <img
      src={MatplotlibImg}
      alt="Matplotlib logo"
      style={{ marginRight: '8px', width: 30, height: 30 }}
    />
  );
}

export function Seaborn() {
  return (
    <img
      src={SeabornImg}
      alt="Seaborn logo"
      style={{ marginRight: '8px', width: 30, height: 30 }}
    />
  );
}

export function Pandas() {
  return (
    <img
      src={PandasImg}
      alt="Pandas logo"
      style={{ marginRight: '8px', width: 30, height: 30 }}
    />
  );
}

export function Plotly() {
  return (
    <img
      src={PlotlyImg}
      alt="Plotly logo"
      style={{ marginRight: '8px', width: 30, height: 30 }}
    />
  );
}

export function Plotnine() {
  return (
    <img
      src={PlotnineImg}
      alt="Plotnine logo"
      style={{ marginRight: '8px', width: 30, height: 30 }}
    />
  );
}

export function DrawArrow() {
  return (
    <img
      src={DrawArrowImg}
      alt="DrawArrow logo"
      style={{ marginRight: '8px', width: 30, height: 30 }}
    />
  );
}

export function PyFonts() {
  return (
    <img
      src={PyFontsImg}
      alt="PyFonts logo"
      style={{ marginRight: '8px', width: 30, height: 30 }}
    />
  );
}

export function Animation() {
  return (
    <img
      src={anim150}
      alt="Animation with python"
      style={{ maxWidth: '30px', width: '100%', marginRight: '8px' }}
    />
  );
}
