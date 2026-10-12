type ParallaxProps = {
  imgLink: string;
  // Opacity of the background image (0 to 1). A white layer covers the rest.
  opacity: number;
  height: number;
  children: React.ReactNode;
};

// A full width band with a fixed background image (parallax effect on scroll)
export default function Parallax({ imgLink, opacity, height, children }: ParallaxProps) {
  return (
    <div
      className="relative bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imgLink})`, minHeight: height }}
    >
      <div className="absolute inset-0 bg-background" style={{ opacity: 1 - opacity }} />
      <div className="relative">{children}</div>
    </div>
  );
}
