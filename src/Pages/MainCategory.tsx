import { useParams, useNavigate } from 'react-router-dom';

const MainCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  // Fetch products based on the categoryId
  const products = [
    { id: 1, name: 'Product 1', image: 'product1-image-url' },
    { id: 2, name: 'Product 2', image: 'product2-image-url' },
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h1>Products for Category {categoryId}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCategory;
