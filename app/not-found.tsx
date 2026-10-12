import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: '404',
  seoDescription: 'Python Graph Gallery 404',
  path: '/404/',
});

export default function NotFound() {
  return (
    <>
      <Spacing />

      <div className="wrapper">
        <h2 id="404"> 😞 Oh No 😞 | 404</h2>
        <p>It looks like there is nothing here anymore.</p>
        <p>
          Please go back to the <Link href="/">gallery home page</Link> and check if you can find your graph!
        </p>
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <Spacing />
    </>
  );
}
