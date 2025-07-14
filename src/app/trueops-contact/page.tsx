// app/contact/page.tsx
import Contact from '@/components/contact/Contact';

interface SectionsState {
  header: any[];
  Middle: any[];
  lowerMiddle: any[];
  footer: any[];
}

async function getData(): Promise<SectionsState> {
  try {
    const domain = 'Truops.in';
    const page = 'Contact Us';

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
      { cache: 'force-cache' }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error('API error response:', errorText);
      throw new Error('Failed to fetch page data');
    }

    const data = await res.json();
    const all = data?.sections ?? [];

    return {
      header: all.find((s: any) => s.name === 'Header')?.contents || [],
      Middle: all.find((s: any) => s.name === 'Middle')?.contents || [],
      lowerMiddle: all.find((s: any) => s.name === 'LowerMiddle')?.contents || [],
      footer: all.find((s: any) => s.name === 'Footer')?.contents || [],
    };
  } catch (error) {
    console.error('Error fetching data:', error);
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
