
import HowSection from '@/components/why/HowSection';
import TrainingSection from '@/components/why/TrainingSection';

async function getData() {
  const domain = 'Truops.in';
  const page = 'WhyTruops';
  
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
    Middle: all.find((s: any) => s.name === 'Middle')?.contents || [],
  };
}

export default async function WhyTrueOps() {
  const sections = await getData();

    return (
    <>
      {/* <NavBar /> */}
      <TrainingSection trainingSectionData= {sections.header} />
      <HowSection MiddleSectionData = {sections.Middle}/>
      {/* <Footer /> */}
    </>
  );
};
