import { useNavigate } from 'react-router-dom';
import customerRegister from './customer/CustomerRegister';
import {customerLogin} from './customer/CustomerLogin.jsx';
import {vendorLogin} from './vendor/VendorLogin.jsx';
import {vendorRegister} from './vendor/VendorRegister.jsx';


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800">Welcome to My Business App</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-lg">
        Login or Register as customer or vendor
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Student Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Vendor</h2>
          <button
            onClick={() => navigate('/vendorLogin')}
            className="w-full mb-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login as Vendor
          </button>
          <button
            onClick={() => navigate('/vendorRegister')}
            className="w-full px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition"
          >
            Register as Vendor
          </button>
        </div>

        {/* Club Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">Customer</h2>
          <button
            onClick={() => navigate('/customerLogin')}
            className="w-full mb-3 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Login as Customer
          </button>
          <button
            onClick={() => navigate('/customerRegister')}
            className="w-full px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition"
          >
            Register as Customer
          </button>
        </div>
      </div>
    </div>
  );
}
// done 