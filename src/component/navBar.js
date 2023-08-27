import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleServicesHover = () => {
    setDropdownVisible(true);
  };

  const handleServicesLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-100 text-white">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <span className="text-black font-Poppins font-bold text-20">
              Design
            </span>
            <span className="text-orange-500 font-Poppins font-bold text-20">
              Agency
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-6">
            <li className="mt-2">
              <div
                id='dropdown'
                onMouseEnter={handleServicesHover}
                onMouseLeave={handleServicesLeave}
                className="flex items-center hover:text-gray-500 text-black custom-link-style cursor-pointer"
              >
                Services <FiChevronDown className="ml-1" size={16} />
              </div>
              {isDropdownVisible && (
                <div className="absolute z-10 right-30 mt-2 py-2 bg-gray-700 rounded-lg shadow-lg text-left">
                  <a href="#resources" className="block px-4 py-2 hover:bg-green-100 text-white" onClick={handleServicesLeave}>
                    Resources
                  </a>
                  <a href="#blog" className="block px-4 py-2 hover:bg-green-100 text-white" onClick={handleServicesLeave}>
                    Our Blog
                  </a>
                  <a href="#faq" className="block px-4 py-2 hover:bg-green-100 text-white" onClick={handleServicesLeave}>
                    Frequently Asked Questions (FAQ)
                  </a>
                </div>
              )}
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="hover:text-gray-500 text-black custom-link-style"
              >
                About Us
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="hover:text-gray-500 text-black custom-link-style"
              >
                Contact Us
              </a>
            </li>
            <li>
              <button
                className="hover:text-gray-500 bg-green-100 border border-1 border-green-600 rounded-lg py-1 px-3 text-black custom-link-style"
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-500 bg-green-600 border border-1 border-green-600 rounded-lg py-1 px-3 text-white custom-link-style"
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
