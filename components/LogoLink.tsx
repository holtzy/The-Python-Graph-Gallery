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
export default function LogoLink({ imgPath, url, altText, name, height, width, disabled }: LogoLinkProps) {
  const content = (
    <>
      <div className="flex h-[130px] items-center justify-center">
        <img
          src={imgPath}
          alt={altText}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          style={{ height: height || 'auto', width: width || 'auto' }}
        />
      </div>
      <div className="mt-2 text-base text-foreground">{name}</div>
    </>
  );

  const className = cn(
    'group block rounded-md p-2 text-center no-underline',
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
