import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name: string;
}

interface Section {
  name: string;
  contents: ContentItem[];
}

interface PageResponse {
  sections?: Section[];
}



async function getData() {
  const domain = 'Truops.in';
  const page = 'layout';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
    {
      cache: 'no-store',
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data: PageResponse = await res.json();

  const all = data?.sections ?? [];
  return {
    footer: all.find((s) => s.name === 'Footer')?.contents || [],
    navbar: all.find((s) => s.name === 'Navbar')?.contents || []
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = await getData();
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar navbarData = {sections.navbar} />
        {children}
        <Footer footerData={sections.footer}/>
      </body>
    </html>
  );
}

