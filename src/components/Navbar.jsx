import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routePath = useLocation();
  
const onTop = () => {
  window.scrollTo(0, 0);
};
useEffect(() => {
  onTop();
}, [routePath]);

// useEffect(() => {
//   const addBorder = () => {
//     if (window.scrollY >= 100) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//   };
//   window.addEventListener("scroll", addBorder);
// });
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFFFFFE5] sticky top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto md:px-[80px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="logo"
              className="text-white font-semibold text-lg md:w-[180px] w-[150px] object-cover"
            ></img>
          </Link>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-[#727376] hover:text-[#F58634] px-3 py-2 rounded-md text-[18px] font-bold"
                >
                  Home
                </Link>
                <Link
                  to="/affiliates"
                  className="text-[#727376] hover:text-[#F58634] px-3 py-2 rounded-md text-[18px] font-bold"
                >
                  Our Affiliates
                </Link>
                <Link
                  to="/contact-us"
                  className="text-[#727376] hover:text-[#F58634] px-3 py-2 rounded-md text-[18px] font-bold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/login"
                  className="bg-white py-[12px] px-[24px] rounded-md font-bold text-[16px] hover:text-[#F58634]"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#F58634] py-[12px] px-[24px] rounded-md font-bold text-[16px] text-white hover:text-[#727376]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.293 5.293l-4-4-1.414 1.414L17.586 4H3v2h14.586l-2.707 2.707 1.414 1.414 4-4a1 1 0 000-1.414zM3 10h18v2H3v-2zm18 4H3v2h18v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 space-y-2 sm:px-3 pb-5">
              <Link
                to="/"
                className="text-[#727376] hover:text-[#F58634]  block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/affiliates"
                className="text-[#727376] hover:text-[#F58634]  block px-3 py-2 rounded-md text-base font-medium"
              >
                Our Affiliates
              </Link>
              <Link
                to="/contact-us"
                className="text-[#727376] hover:text-[#F58634]  block px-3 py-2 rounded-md text-base font-medium mb-10"
              >
                Contact Us
              </Link>
              <Link
                to="/login"
                className="bg-[#00A859] text-[#FFF] my-10 ml-3 mr-4 px-8 py-2 rounded-md  "
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="text-white bg-[#F58634] px-8 py-2 rounded-md"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
