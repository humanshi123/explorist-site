import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import product from "../assets/Ontario.jpg";
import review from "../assets/review.svg";
import { ProductClock, ProductTick } from '../Utils/SvgIcons';
import ToursFilter from '../Components/ToursFilter';

const MainCategory = () => {
  const { categoryId, heading } = useParams<{ categoryId: string, heading: string }>();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const products = [ 
    { id: 1, name: 'Rocky Mountains', image: product },
    { id: 2, name: 'Product 2', image: product },
    { id: 3, name: 'Niagara Falls', image: product},
    { id: 4, name: 'Tanzania wildlife', image: product },
    { id: 5, name: 'Romantic Victoria', image: product},
    { id: 6, name: 'Classic Everest', image: product},
  ];

  const handleProductClick = (productData: { id: number; name: string; image: string }) => {
    const recentlyViewed = localStorage.getItem('recentlyViewed');
    const viewedProducts: { id: number; name: string; image: string }[] = recentlyViewed ? JSON.parse(recentlyViewed) : [4];

    const isProductViewed = viewedProducts.find(product => product.id === productData.id);
    if (!isProductViewed) {
      viewedProducts.push(productData);
      if (viewedProducts.length > 4) {
        viewedProducts.shift();
      }
      localStorage.setItem('recentlyViewed', JSON.stringify(viewedProducts));
    }

    navigate(`/product/${productData.id}`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleClose =() =>{
    setSidebarOpen(false);
  };
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });

  return (
    <div className='py-10 md:py-[80px]'>
      <div className='container'>
        <div className='grid md:grid-cols-[298px,1fr] gap-5 '>
          {/* Sidebar - only shown on mobile when open */}
          <div className={`side-bar md:block ${isSidebarOpen ? 'block ' : 'hidden'} md:relative fixed z-50 inset-0 md:bg-transparent bg-black bg-opacity-30`}>
            <button onClick={handleClose} className='md:hidden bg-[#0f6528] text-white px-2 rounded-md absolute top-2 right-3 '>X</button>
            <ToursFilter />
          </div>

          <div>
            <div className='md:flex items-center justify-between mb-5 md:mb-[30px]'>
              <h2 className='text-[26px] md:text-3xl lg:text-4xl'>{heading} Top 
                <span className='inline-block ml-1'>Niagara Falls, Ontario</span>Tours {heading}{categoryId}</h2>
              <div className='flex justify-between items-center mt-4 md:mt-0'>
                <div className='block md:hidden'>
                  <button className='text-[#686868] text-xs bg-[#f2f7f1] border border-[#e9e9e9] px-5 py-2.5 rounded-[10px]' onClick={toggleSidebar}>Filter</button>
                </div>
                <select className='focus-visible:outline-none text-[#686868] text-xs bg-[#f2f7f1] border border-[#e9e9e9] px-5 py-2.5 rounded-[10px]'>
                  <option value="">Featured</option>
                  <option value="1">Traveller Rating</option>
                  <option value="2">Price (Low to High)</option>
                  <option value="3">Price (High to Low)</option>
                  <option value="4">New on Explorist</option>
                </select>
              </div>
            </div>
            <div className="p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[30px]">
              {products.map((product) => (
                <div key={product.id} className="product-card cursor-pointer" onClick={() => handleProductClick(product)}>
                  <img src={product.image} alt={product.name} className='rounded-[10px]' />
                  <h4 className='text-[#1e1e1e] mt-[15px] mb-[10px]'>{product.name}</h4>
                  <div className="price flex justify-between items-center">
                    <h5 className='text-[#1e1e1e] text-lg'>CA$891.52</h5>
                    <div className='flex'>
                      <img src={review} alt="" />
                      <p className='text-[#8c8c8c] text-sm ml-1'>5</p>
                    </div>
                  </div>
                  <p className='product-desc'>
                    Built in 1978, for sail-trading throughout the Caribbean, Tradition has exchanged sailing cargo and contraband...
                  </p>
                  <div className="flex items-center gap-5 mt-5">
                    <p className="flex items-center gap-1"><ProductClock /> 3 hours</p>
                    <p className="flex items-center gap-1"><ProductTick /> Free Cancellation</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
