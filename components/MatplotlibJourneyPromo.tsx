import { buttonVariants } from './ui/button';

type MatplotlibJourneyPromoProps = {
  // Text below the screenshot
  children: React.ReactNode;
  // Optional title above the screenshot
  title?: React.ReactNode;
  // Link of the call to action button
  buttonHref?: string;
};

// Section promoting the Matplotlib Journey course
export default function MatplotlibJourneyPromo({
  children,
  title,
  buttonHref = 'https://www.matplotlib-journey.com',
}: MatplotlibJourneyPromoProps) {
  return (
    <section className="wrapper py-16">
      <div className="flex flex-col items-center">
        {title && <p className="!mt-0 mb-8 text-3xl font-semibold tracking-tight">{title}</p>}
        <a href="https://www.matplotlib-journey.com" className="block w-full">
          <img
            src="/img/matplotlib-journey-overview.png"
            alt="overview of the matplotlib journey landing page"
            loading="lazy"
            className="h-auto w-full rounded-xl border"
          />
        </a>
        <p className="mt-8 max-w-[500px] text-center text-base leading-7">{children}</p>
        <a href={buttonHref} target="_blank" className={buttonVariants({ size: 'lg', className: 'mt-6' })}>
          Finally, Understand Matplotlib.
        </a>
      </div>
    </section>
  );
}
