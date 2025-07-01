'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import DevOpsSection from '@/components/home/DevOpsSection';
import DevOpsTalentBlock from '@/components/home/DevOpsTalentBlock';
import DevOpsTalentSection from '@/components/home/DevOpsTalentSection';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';
import NavBar from '@/components/home/Navbar';


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
          <NavBar />
          <Hero />
          <DevOpsSection />
          <DevOpsTalentSection />
          <DevOpsTalentBlock />
          <Footer />
      </section>
    </main>
  );
}
