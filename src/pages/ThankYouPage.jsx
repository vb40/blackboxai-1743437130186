import { Link } from 'react-router-dom';
import { FaCheckCircle, FaSignInAlt } from 'react-icons/fa';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center">
          <FaCheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Thank You!
        </h2>
        <p className="mt-2 text-gray-600">
          You have been successfully logged out. We hope to see you again soon!
        </p>
        <div className="mt-8">
          <Link
            to="/login"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <FaSignInAlt className="h-5 w-5 text-blue-300 group-hover:text-blue-200" />
            </span>
            Sign In Again
          </Link>
        </div>
      </div>
    </div>
  );
}