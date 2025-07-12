import AboutSection from '@/components/about/AboutSection';
import DevOpsSection from '@/components/about/DevOpsSection';
import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';

async function getData() {
  const domain = 'Truops.in';
  const page = 'About';
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('API error response:', errorText);
    throw new Error('Failed to fetch page data');
  }

  const data = await res.json();
  const all = data?.sections ?? [];

  return {
          header: all.find((s: any) => s.name === 'Header')?.contents || [],
          header2: all.find((s: any)=> s.name === 'Header2')?.contents || [],
          Middle: all.find((s: any)=> s.name === 'Middle')?.contents || [],
          lowerMiddle: all.find((s: any)=> s.name === 'LowerMiddle')?.contents || []
  };
}

export default async function About (){
  const sections = await getData()
  return (
    <>
      <NavBar />

      <AboutSection data={sections.header} />
      <DevOpsSection
        data={{
          header2: sections.header2,
          Middle: sections.Middle,
          lowerMiddle: sections.lowerMiddle,
        }} />

      <Footer />

    </>
  );
};


