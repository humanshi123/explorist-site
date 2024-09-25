import React from 'react';

interface ContentSectionProps {
  title: string; 
  description: string;
  imageUrl: string;
  reverse?: boolean; // Optional prop to reverse the layout
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, description, imageUrl, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-[21px] `}>

      <div className="w-full md:w-1/2 ">
        <img src={imageUrl} alt={title} className="rounded-[10px]  w-full" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="mb-2 md:mb-5">{title}</h2>
        <p className="text-base max-w-[484px] md:leading-[30px] ">{description}</p>
      </div>
    </div>
  );
};

export default ContentSection;
