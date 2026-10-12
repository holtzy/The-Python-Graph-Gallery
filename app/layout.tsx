import type { Metadata, Viewport } from 'next';
import { Bitter, Fira_Mono, Roboto } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';
import './globals.css';

// Fonts are downloaded at build time and self hosted: no request to google from the browser
const roboto = Roboto({ weight: ['400', '700'], style: ['normal', 'italic'], subsets: ['latin'], display: 'swap', variable: '--font-roboto' });
const bitter = Bitter({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-bitter' });
const fira = Fira_Mono({ weight: ['400', '500'], subsets: ['latin'], display: 'swap', variable: '--font-fira' });

// Google Analytics. The UA tag is the one used historically: it is kept as is since GA4 may be
// receiving its hits through a "connected site tag". Set NEXT_PUBLIC_GA4_ID (G-XXXXXXX) to also send hits to GA4 directly.
const GA_IDS = ['UA-79254642-2', process.env.NEXT_PUBLIC_GA4_ID].filter(Boolean) as string[];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'The Python Graph Gallery',
  description: 'A gallery of charts made with Python',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/favicon-32x32.png', type: 'image/png' }],
    apple: [48, 72, 96, 144, 192, 256, 384, 512].map((s) => ({
      url: `/icons/icon-${s}x${s}.png`,
      sizes: `${s}x${s}`,
    })),
  },
};

export const viewport: Viewport = {
  themeColor: '#cb1dd1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${bitter.variable} ${fira.variable}`}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap-index.xml" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_IDS[0]}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${GA_IDS.map((id) => `gtag('config', '${id}', { anonymize_ip: false });`).join('\n')}`}
        </Script>
      </body>
    </html>
  );
}
