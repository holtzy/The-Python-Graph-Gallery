import Link from 'next/link';
import SocialMediaButtons from './SocialMediaButtons';

export default function Footer() {
  return (
    <footer className="wrapper mt-20 border-t py-10 text-sm text-muted-foreground">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>Copyright © the Python Graph Gallery {new Date().getFullYear()}</div>
        <SocialMediaButtons />
        <div className="flex gap-2">
          <Link href="/privacy" className="hover:text-brand">Privacy</Link>
          <span>|</span>
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/LICENSE" className="hover:text-brand">
            License
          </a>
          <span>|</span>
          <Link href="/about" className="hover:text-brand">About</Link>
        </div>
      </div>
    </footer>
  );
}
