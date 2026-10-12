// Small library logos displayed next to titles, e.g. <h2><Matplotlib /> Barplot with Matplotlib</h2>

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} width={30} height={30} className="mr-2 inline-block h-[30px] w-[30px] align-middle" />
);

export const Matplotlib = () => <Logo src="/img/MatplotlibSmall.png" alt="Matplotlib logo" />;
export const Seaborn = () => <Logo src="/img/SeabornSmall.png" alt="Seaborn logo" />;
export const Pandas = () => <Logo src="/img/PandasSmallClean.png" alt="Pandas logo" />;
export const Plotly = () => <Logo src="/img/PlotlySmall.png" alt="Plotly logo" />;
export const Plotnine = () => <Logo src="/img/plotnine-small.png" alt="Plotnine logo" />;
export const DrawArrow = () => <Logo src="/logo/Other/drawarrow.png" alt="DrawArrow logo" />;
export const PyFonts = () => <Logo src="/logo/Other/pyfonts.png" alt="PyFonts logo" />;
export const Animation = () => <Logo src="/section/anim150.gif" alt="Animation with python" />;
