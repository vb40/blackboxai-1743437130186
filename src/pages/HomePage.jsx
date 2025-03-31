import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const mockProducts = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
    description: 'Noise-cancelling wireless headphones with 30hr battery life'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    description: 'Fitness tracking and smartphone notifications'
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg',
    description: 'True wireless earbuds with charging case'
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg',
    description: 'Portable waterproof speaker with 12hr playtime'
  }
];

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate API call
    setProducts(mockProducts);
  }, []);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}