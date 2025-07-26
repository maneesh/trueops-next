
import Contact from '@/components/contact/Contact';

interface ContentItem {
  type: 'text' | 'image';
  data: string;
  name?: string;
}

interface Section {
  name: string;
  contents: ContentItem[];
}

interface PageResponse {
  sections?: Section[];
}

interface SectionsState {
  header: ContentItem[];
  Middle: ContentItem[];
  lowerMiddle: ContentItem[];
  footer: ContentItem[];
}


async function getData(): Promise<SectionsState> {
  try {
    const domain = 'Truops.in';
    const page = 'contact';

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
      { cache: 'no-cache' }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch page data');
    }

    const data: PageResponse = await res.json();
    const all = data?.sections ?? [];

    return {
      header: all.find((s) => s.name === 'Header')?.contents || [],
      Middle: all.find((s) => s.name === 'Middle')?.contents || [],
      lowerMiddle: all.find((s) => s.name === 'LowerMiddle')?.contents || [],
      footer: all.find((s) => s.name === 'Footer')?.contents || [],
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
  return <Contact sections={sections} />;
}
