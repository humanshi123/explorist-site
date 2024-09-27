// import { useState } from 'react';

import { MegaIcon } from "../Utils/SvgIcons";
interface Category {
  title: string;
  items?: string[];
}

interface MegaMenuProps {
  categories: Category[];
}


const MegaMenu = ({ categories }: MegaMenuProps) => {
  return (
    <div className="mega-menu-content">
      <div className="block lg:flex justify-between">
        <ul className="title-column lg:min-w-[300px]">
          {categories.map((category, index) => (
            category.title && ( 
              <li key={index} className="bg-[#f5f5f5] mb-2 rounded-[4px] lg:rounded-none p-[10px] text-sm text-[#686868] lg:leading-[27.2px] flex justify-between items-center ">
                {category.title}
              <MegaIcon/>
              </li>
            )
          ))}
        </ul>

        <div className="lg:flex w-full ">
          {categories.map((category, index) => (
            category.items && ( 
              <div key={index} className="items-column px-[15px] lg:w-[25%]">
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="nav-menu-list">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
