import KitForm from './KitForm';

// Bottom of most pages: grab the Data To Viz poster
export default function Contact(_props: { pageSlug?: string; isNotebook?: boolean }) {
  return (
    <section className="grid grid-cols-1 items-center gap-8 rounded-xl border p-6 sm:p-8 md:grid-cols-5">
      <div className="md:col-span-3">
        <h2 id="Edit this page" className="!mt-0 !border-b-0 !pb-0 !text-2xl">
          🚨 Grab the Data To Viz poster!
        </h2>
        <p>
          Do you know all the chart types? Do you know which one you should pick? I made a{' '}
          <b>decision tree</b> that answers those questions. You can download it for free!
        </p>
        <KitForm form="poster" buttonLabel="Get the poster" className="mt-6" />
      </div>
      <img
        src="/img/poster_small.png"
        alt="dataviz decision tree poster"
        width={900}
        loading="lazy"
        className="h-auto w-full rounded-md border md:col-span-2"
      />
    </section>
  );
}
