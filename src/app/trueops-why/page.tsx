
import HowSection from '@/components/why/HowSection';
import TrainingSection from '@/components/why/TrainingSection';


interface ContentItem {
  type: 'text' | 'media';
  data: string;
  media_ref?: string;
}

interface Section {
  component: string;  // 👈 FIXED
  contents: ContentItem[];
}


// interface PageResponse {
//   sections?: Section[];
// }


async function getData() {
  const domain = 'truops.in';
  const group = 'WhyTruops';

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  const data: Section[] = await res.json();
  const all = data ?? [];

  // console.log("Full API data:", JSON.stringify(data, null, 2));
// console.log("Fetched data",data)
  return {
    TrainingSection: all.find((s) => s.component === 'Header')?.contents || [],
    HowSection: all.find((s) => s.component === 'Middle')?.contents || [],
  };
}


// async function getData() {
//   const domain = 'trueops.com';
//   const group = 'trueops-why';
//   // const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`, {
//     cache: 'no-store'
    
//   }
// );


//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }

//   const data: PageResponse = await res.json();
//   const all = data?.sections ?? [];
//   console.log("Full API data:", JSON.stringify(data, null, 2));

//   return {
//  TrainingSection: all.find((s) => s.name === 'TrainingSection')?.contents || [],
//     // Middle: all.find((s) => s.name === 'Middle')?.contents || [],
//     HowSection: all.find((s) => s.name === 'HowSection')?.contents || [],
//   };
// }

export default async function WhyTrueOps() {
  const sections = await getData();
  //  console.log("sections in WhyTrueOps:", sections); 
   

  return (
    <>
      <TrainingSection trainingSectionData={sections.TrainingSection} />
      <HowSection MiddleSectionData={sections.HowSection} />
    </>
  );
};
