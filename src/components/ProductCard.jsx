import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <div className="flex space-x-2">
            <Link 
              to={`/products/${product.id}`}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200 transition-colors"
            >
              Details
            </Link>
            <button className="bg-green-100 text-green-600 p-2 rounded-full hover:bg-green-200 transition-colors">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}