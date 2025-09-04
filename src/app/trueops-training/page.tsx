import DevOpsHero from '@/components/training-page/DevOpsHero';
import WhyChooseUsSection from '@/components/training-page/WhyChooseUsSection';

interface ContentItem {
  type: 'text' | 'media';
  data: string;
  name: string;       // add this here
  media_ref?: string;
}


interface Section {
  component: string;  // 👈 FIXED
  contents: ContentItem[];
}


// interface PageResponse {
//   sections?: Section[];
// }


// async function getData() {
//   const domain = 'trueops.com';
//   const group = 'trueops-training';
  
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`, {
//     cache: 'no-store'
//   });
// console.log("api res",res)
//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }

//   // const data: PageResponse = await res.json();
//   const data: PageResponse = await res.json();
// console.log("📦 Raw API JSON:", JSON.stringify(data, null, 2));

//   const all = data?.sections ?? [];

//   return {
//     DevOpsHero: all.find((s) => s.component === 'DevOpsHero')?.contents || [],
//     // whyChooseUsSection: all.find((s) => s.component === 'Middle')?.contents || [],
    
//   };
// }



// Training.tsx
async function getData() {
  const domain = 'truops.in';
  const group = 'UpcomingEvent';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data: Section[] = await res.json();  // ✅ it's an array, not an object
// console.log("Fetched data---" ,data)
  return {
    DevOpsHero: data.find((s) => s.component === 'Header')?.contents || [],
     WhyChooseUsSection: data.find((s) => s.component === 'Middle')?.contents || [],
    // whyChooseUsSection: data.find((s) => s.component === 'WhyChooseUsSection')?.contents || [],
  };
}

export default async function Training() {
  const sections = await getData();
  // console.log("This is section data................",sections)
  return (
    <>
      <DevOpsHero devopsSectionData={sections.DevOpsHero} />
      <WhyChooseUsSection whyChooseUsSectionData={sections.WhyChooseUsSection} />
    </>
  );
}

