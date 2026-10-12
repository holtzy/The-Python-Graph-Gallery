import KitForm from './KitForm';

// Bottom of most pages: grab the Data To Viz poster
export default function Contact(_props: { pageSlug?: string; isNotebook?: boolean }) {
  return (
    <div className="rounded-lg bg-muted px-6 py-10 sm:px-10">
      <h2 id="Edit this page" className="!mt-0">
        🚨 Grab the Data To Viz poster!
      </h2>
      <p>
        Do you know all the chart types? Do you know which one you should pick? I made a <b>decision tree</b> that
        answers those questions. You can download it for free!
      </p>
      <KitForm form="poster" buttonLabel="Get the poster" className="my-6" />
      <img
        src="/img/poster_small.png"
        alt="dataviz decision tree poster"
        width={900}
        loading="lazy"
        className="h-auto w-full max-w-[900px]"
      />
    </div>
  );
}
