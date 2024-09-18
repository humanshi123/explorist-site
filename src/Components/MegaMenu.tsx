import { useState } from 'react';

const sampleCategories = [
  {
    title: 'Top Attractions',
    items: ['Niagara Falls, Ontario', 'Moraine Lake', 'Cave of the Winds', 'Journey Behind the Falls', 'Capilano Suspension Bridge Park'],
  },
  {
    title: 'Explore Canada',
    items: ['Butchart Gardens', 'Skylon Tower', 'Downtown Vancouver', 'Stanley Park', 'CN Tower'],
  },
  {
    title: '',
    items: ['Bridal Veil Falls', 'Floral Clock', 'Table Rock Welcome Centre', 'Banff Gondola', 'Banff Lake Louise'],
  },
];

const MegaMenu = () => {
  const [categories] = useState(sampleCategories);

  return (
        <div className='mega-menu-content'>
           <div className='flex justify-between'>
           <div className='min-w-[300px]'>
            <p className='bg-[#f5f5f5] p-[10px] text-sm text-[#686868] leading-[27.2px] flex justify-between items-center '>Top Attractions
            <span><svg xmlns="http://www.w3.org/2000/svg" width="4" height="7" viewBox="0 0 4 7" fill="none">
            <path d="M0.375732 6.12646L3.12671 3.37549L0.375732 0.624511L0.375732 6.12646Z" fill="#686868"></path>
        </svg></span>
            </p>
            </div>
            <div className="flex w-full">
            {categories.map((category, index) => (
              <div key={index} className="category-column px-[15px] w-[25%]">
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                        <a href="" className='nav-menu-list'>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
     </div>
           </div>
        </div>
  );
};

export default MegaMenu;
