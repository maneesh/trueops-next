

import Contact from '@/components/contact/Contact';

// Updated type to reflect actual API response
interface ContentItem {
  type: 'text' | 'media';
  data: string;
  name?: string;
  media_ref:"string"
}

interface Section {
  component: 'Header' | 'Middle' | 'LowerMiddle' | 'Footer'; // corrected from "name"
  contents: ContentItem[];
}

type PageResponse = Section[]; // API returns an array of sections

interface SectionsState {
  header: ContentItem[];
  Middle: ContentItem[];
  lowerMiddle: ContentItem[];
  footer: ContentItem[];
}

async function getData(): Promise<SectionsState> {
  try {
    const domain = 'truops.in';
    const group = 'contact';

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`,
      { cache: 'no-store' } // Ensures latest data in SSR
    );

    if (!res.ok) {
      throw new Error('Failed to fetch page data');
    }

    const data: PageResponse = await res.json();

    

    return {
      header: data.find((s) => s.component === 'Header')?.contents || [],
      Middle: data.find((s) => s.component === 'Middle')?.contents || [],
      lowerMiddle: data.find((s) => s.component === 'LowerMiddle')?.contents || [],
      footer: data.find((s) => s.component === 'Footer')?.contents || [],
    };
  } catch (error) {
 
    return {
      header: [],
      Middle: [],
      lowerMiddle: [],
      footer: [],
    };
  }
}

export default async function ContactPage() {
  const sections = await getData();

  // 

  return <Contact sections={sections} />;
}
