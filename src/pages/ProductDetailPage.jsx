import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const mockProducts = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
    description: 'Noise-cancelling wireless headphones with 30hr battery life',
    details: 'Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, touch controls, and comfortable over-ear design.'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    description: 'Fitness tracking and smartphone notifications',
    details: 'Stay connected and track your fitness with our advanced smart watch. Includes heart rate monitoring, GPS, and water resistance up to 50 meters.'
  }
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate API call
    const foundProduct = mockProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="py-8 text-center">Loading product...</div>;
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Link to="/" className="flex items-center text-blue-600 mb-4">
          <FaArrowLeft className="mr-2" /> Back to Products
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">(24 reviews)</span>
              </div>
              <p className="text-3xl font-bold mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-700 mb-6">{product.details}</p>
              
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}