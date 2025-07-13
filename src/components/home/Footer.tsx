import Image from 'next/image';
interface FooterProps {
  footerData: {
    footer: { type: string; data: string }[];
  };
}

export default function Footer ({ footerData }: FooterProps){
  const data = footerData || [];  

  const images = data?.filter(item => item.type === 'image').map(item => item.data);
  const texts = data?.filter(item => item.type === 'text').map(item => item.data.trim());

  const logoImg = images[0] || '';
  const sectionTitle = texts[0] || 'Address';
  const sectionDesc = texts[1] || '';
  const sideImg = images[1] || '';
  const newsletterText = texts[2] || '';
  const buttonText = texts[3] || 'Sign Me Up';
  const socialIcons = images.slice(2, 6); 

  return (
    <footer className="bg-black text-white px-6 py-12">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        {logoImg && (
          <Image
            src={logoImg}
            alt="Logo"
            width={160}
            height={48}
            className="object-contain"
          />
        )}
      </div>

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-10 max-w-6xl mx-auto">

        {/* Address Section */}
        <div className="max-w-sm mx-auto">
          <h2 className="text-[#5bc033] text-xl font-bold mb-4">{sectionTitle}</h2>
          <p className="text-gray-300">{sectionDesc}</p>
          {sideImg && (
            <div className="mt-4 flex justify-center lg:justify-start">
              <Image
                src={sideImg}
                alt="Office"
                width={320}
                height={160}
                className="object-cover w-full max-w-xs"
              />
            </div>
          )}
        </div>

        {/* Newsletter & Social */}
        <div className="space-y-4 max-w-sm mx-auto">
          <p className="text-gray-300">{newsletterText}</p>

          {/* Email Signup */}
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              className="p-2 text-black rounded-l-lg w-2/3"
            />
            <button className="bg-[#5bc033] hover:bg-lime-700 hover:text-black text-white px-4 py-2 rounded-r-lg">
              {buttonText}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4">
            {socialIcons.map((icon, idx) => (
              <div key={idx} className="bg-[#5bc033] p-2 rounded-full">
                <Image src={icon} alt={`social-${idx}`} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
