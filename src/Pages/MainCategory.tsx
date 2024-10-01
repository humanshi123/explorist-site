import { useParams, useNavigate } from 'react-router-dom';
import product from "../assets/Ontario.jpg";
import review from "../assets/review.svg";
import { ProductClock, ProductTick } from '../Utils/SvgIcons';
import ToursFilter from '../Components/ToursFilter';

const MainCategory = () => {
  const { categoryId, heading } = useParams<{ categoryId: string, heading: string }>();

  const navigate = useNavigate();

  // Fetch products based on the categoryId
  const products = [ 
    { id: 1, name: 'Rocky Mountains', image: product },
    { id: 2, name: 'Product 2', image: product },
    { id: 3, name: 'Niagara Falls', image: product},
    { id: 4, name: 'Tanzania wildlife', image: product },
    { id: 5, name: 'Romantic Victoria', image: product},
    { id: 6, name: 'Classic Everest', image: product},
  ];

  // const handleProductClick = (productData: { id: number; name: string; image?: string }    ) => {
  //   navigate(`/product/${productData.id}`, { state: productData }); // Navigate using categoryId
  // };
  
  const handleProductClick = (productData: { id: number; name: string; image: string }) => {
    // Get the existing recently viewed products from localStorage
    const recentlyViewed = localStorage.getItem('recentlyViewed');
    
    const viewedProducts: { id: number; name: string; image: string }[] = recentlyViewed ? JSON.parse(recentlyViewed) : [4];
  
    // Add the current product to the viewed list if it's not already there
    const isProductViewed = viewedProducts.find(product => product.id === productData.id);
    if (!isProductViewed) {
      viewedProducts.push(productData);
      
      // Keep only the last 5 recently viewed products
      if (viewedProducts.length > 4) {
        viewedProducts.shift(); // Remove the first item to keep the array length at 5
      }
  
      // Save the updated list back to localStorage
      localStorage.setItem('recentlyViewed', JSON.stringify(viewedProducts));
    }
  
    navigate(`/product/${productData.id}`);
  };
  return ( 
 <div className='py-[80px] '>
     <div className='container'>
    <div className='grid grid-cols-[298px,1fr] gap-5 '>
      <div>
<ToursFilter/>
      </div>
   <div>
   <h2 className='mb-[30px] text-4xl '>{heading} Top <span>Niagara Falls, Ontario</span>Tours {heading}{categoryId}</h2>
      <div className="grid grid-cols-3 gap-x-5 gap-y-[30px] ">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} className='rounded-[10px]  '/>
            <h4 className='text-[#1e1e1e] mt-[15px] mb-[10px] '>{product.name}</h4>
            <div className="price flex justify-between items-center ">
              <h5 className='text-[#1e1e1e] text-lg   '>CA$891.52</h5>
              <div className='flex'><img src={review} alt="" /> <p className='text-[#8c8c8c] text-sm ml-1  '>5</p></div>
            </div>
            <p className='product-desc '>Built in 1978, for sail-trading throughout the Caribbean, Tradition has exchanged sailing cargo and contraband for cruising with charter guests and cocktails in Anguilla. This authentic and traditional sailing experience is a must do on your Anguilla itinerary. Sail in rustic luxury, while sipping Mimosas or hand-squeezed orange juice, to one of the jewels in Anguilla’s Marine Park System, the Prickly Pear Cays. Immerse yourself in the stunning reef snorkelling, a delicious Caribbean barbecue on the beach, and Pina coladas at the tiki beach bar. Enjoy the white sand beaches, explore the nesting grounds of sea birds, and hand-feed the bananaquit birds before re-boarding Tradition around 1:30 pm. It's an adventurous and exhilarating upwind sail back to Road Bay and Sandy Ground, a day made complete with rum punch, Tradition's chocolate chip cookies and fresh watermelon. Tradition hosts a maximum of 12 guests and space .</p>
            <div className="flex items-center gap-5 mt-5">
                <p className="flex items-center gap-1"><ProductClock/> 3 hours </p>
                <p className="flex items-center gap-1"><ProductTick/> Free Cancellation</p>
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
