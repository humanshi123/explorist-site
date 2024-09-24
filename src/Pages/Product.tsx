import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams<{ productId: string }>();

  // Fetch product details based on productId
  const product = {
    id: productId,
    name: 'Product 1',
    description: 'This is the product description.',
    image: 'product1-image-url'
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
