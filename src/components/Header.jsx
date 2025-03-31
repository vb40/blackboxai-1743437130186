import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaHeart } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm text-gray-600">
          <div>Free shipping on orders over $50</div>
          <div className="flex space-x-4">
            <Link to="/account">My Account</Link>
            <Link to="/wishlist">Wishlist</Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-gray-800">
            FASHION
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
            <Link to="/women" className="text-gray-700 hover:text-black font-medium">Women</Link>
            <Link to="/men" className="text-gray-700 hover:text-black font-medium">Men</Link>
            <Link to="/kids" className="text-gray-700 hover:text-black font-medium">Kids</Link>
            <Link to="/sale" className="text-red-600 hover:text-red-800 font-medium">Sale</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-black">
              <FaSearch size={18} />
            </button>
            <Link to="/wishlist" className="text-gray-700 hover:text-black">
              <FaHeart size={18} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-black">
              <FaShoppingCart size={18} />
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-black">
              <FaUser size={18} />
            </Link>
            <button className="md:hidden text-gray-700">
              <MdMenu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
