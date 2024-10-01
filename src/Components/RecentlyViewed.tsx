import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
}

const RecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  useEffect(() => {
    const viewedProducts = localStorage.getItem('recentlyViewed');
    if (viewedProducts) {
      setRecentlyViewed(JSON.parse(viewedProducts));
    }
  }, []);

  return (
    <div className="recently-viewed-container mb-10 md:mb-[80px] ">
      <h2 className='text-[26px] md:text-4xl mb-3 md:mb-6'>Recently Viewed</h2>
      {recentlyViewed.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-x-5 gap-y-4">
          {recentlyViewed.map((product) => (
            <div key={product.id} className="recently-viewed-product">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="rounded-lg mb-2" />
                <h4 className='text-[#1e1e1e] mt-[15px] mb-[10px] '>{product.name}</h4>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No recently viewed products.</p>
      )}
    </div>
  );
};

export default RecentlyViewed;
