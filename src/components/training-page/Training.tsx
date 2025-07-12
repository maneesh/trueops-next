import DevOpsHero from '@/components/training-page/DevOpsHero';
import WhyChooseUsSection from '@/components/training-page/WhyChooseUsSection';
import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/Navbar';

async function getData() {
  const domain = 'Truops.in';
  const page = 'UpcomingEvent';
  
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
    devOpsHero: all.find((s: any) => s.name === 'Header')?.contents || [],
    whyChooseUsSection: all.find((s: any) => s.name === 'Middle')?.contents || [],
  };
}



export default async function TrainingPage() {
  const sections = await getData();

  return (
    <>
      <NavBar />
      <DevOpsHero devopsSectionData={sections.devOpsHero} />
      <WhyChooseUsSection whyChooseUsSectionData={sections.whyChooseUsSection} />
      <Footer />
    </>
  );
}
