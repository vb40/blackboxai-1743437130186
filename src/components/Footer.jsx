import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Nostra Ecommerce</h3>
            <p className="text-gray-400 mt-2">© 2023 All Rights Reserved</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}