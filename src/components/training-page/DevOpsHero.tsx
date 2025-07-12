import Image from 'next/image';
interface ContentItem {
  type: string;
  name: string;
  data: string;
}

interface Props {
  devopsSectionData: ContentItem[];
}
const DevOpsHero: React.FC<Props> = ({devopsSectionData}) => {
  const trainingBackground = devopsSectionData?.[0]?.data;  
  const poster = devopsSectionData?.[4]?.data;
  const headline = devopsSectionData?.[1]?.data
  const title1 = devopsSectionData?.[2]?.data
  const title2 = devopsSectionData?.[3]?.data
  
  return (
    <section
      className="bg-cover bg-no-repeat py-10 px-4"
      style={{ backgroundImage: `url(${trainingBackground})` }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row lg:space-x-20 xl:space-x-40">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2">{headline}</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title1}</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-500 py-2">{title2}</h3>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0">
          {poster && (
            <Image
            src={poster}
            alt="DevOps Training"
            width={240}
            height={240}
            className="w-48 sm:w-60 md:w-72 object-contain"
          />
          )}
          
        </div>
      </div>
    </section>
  );
};

export default DevOpsHero;