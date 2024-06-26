import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  }

  return (
    <nav className="bg-gray-600 p-1 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center md:justify-between">
        <Link to='/home' className="flex flex-col md:flex-row justify-center items-center">
          <img src="./logo.png" alt="logo" className='pl-4 w-[50px] md:w-[65px] pb-[5px] md:pb-0' />
          <span className='pl-4 text-lg text-white exo-2-title md:text-3xl'>Personal Finance Tracker</span>
        </Link>

        <div className="hidden md:flex md:justify-center items-center">
          <button onClick={handleClick} className="bg-red-600 hover:bg-red-500 px-3 py-2 text-white rounded-md">Log-Out</button>
        </div>

        <div className="md:hidden absolute top-6 right-6 flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <IoClose className='text-2xl text-white' />
            ) : (
              <GiHamburgerMenu className='text-2xl text-white' />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black opacity-70 flex flex-col justify-center items-center">
          <button onClick={handleClick} className="bg-red-600 hover:bg-red-500 px-3 py-2 text-white rounded-md my-5">Log-Out</button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
