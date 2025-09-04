
import About from '@/components/about/About';

interface ContentItem {
  type: 'text' | 'media';
  data: string;
  name?: string;
  media_ref: string;
  title?: string | null;
}

interface Section {
  component: string;
  contents: ContentItem[];
}

type PageResponse = Section[]; // ✅ Fix here

async function getData() {
  const domain = 'truops.in';
  const group = 'About';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const all: PageResponse = await res.json(); // ✅ Correctly treat as array

  // console.log("Parsed sections array:", all.map(s => s.component));

  return {
    header: all.find((s) => s.component === 'Header')?.contents || [],
    header2: all.find((s) => s.component === 'Header2')?.contents || [],
    Middle: all.find((s) => s.component === 'Middle')?.contents || [],
    lowerMiddle: all.find((s) => s.component === 'LowerMiddle')?.contents || [],
  };
}

export default async function AboutPage() {
  const sections = await getData();
  // console.log("sections=", sections);
  return <About sections={sections} />;
}
