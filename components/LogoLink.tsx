import Link from 'next/link';
import { cn } from '@/lib/utils';

export type LogoLinkProps = {
  imgPath: string;
  url: string;
  altText: string;
  name: string;
  height?: string;
  width?: string;
  // Set to true for a library without content yet: greyed out, not clickable
  disabled?: boolean;
};

// A library logo with its name, linking to its page. Meant to be placed in a grid.
export default function LogoLink({ imgPath, url, altText, name, disabled }: LogoLinkProps) {
  const content = (
    <>
      <div className="flex aspect-square items-center justify-center">
        <img
          src={imgPath}
          alt={altText}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">{name}</div>
    </>
  );

  const className = cn(
    'group block rounded-md p-1 text-center no-underline',
    disabled && 'pointer-events-none grayscale'
  );

  return url.startsWith('http') ? (
    <a href={url} className={className}>
      {content}
    </a>
  ) : (
    <Link href={url} className={className}>
      {content}
    </Link>
  );
}
