import Link from 'next/link';
import SocialMediaButtons from './SocialMediaButtons';

export default function Footer() {
  return (
    <footer className="mt-24 border-t py-8 text-sm text-muted-foreground">
      <div className="mx-auto max-w-5xl px-5">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>Copyright © the Python Graph Gallery {new Date().getFullYear()}</div>
        <SocialMediaButtons />
        <div className="flex gap-2">
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/LICENSE" className="hover:text-foreground">
            License
          </a>
          <span>|</span>
          <Link href="/about" className="hover:text-foreground">About</Link>
        </div>
      </div>
      </div>
    </footer>
  );
}
