import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <img src="/logo.png" alt="logo" className="w-16" />
        <div className="text-white font-serif text-3xl pl-5">Personal Finance Tracker</div>
      </div>
    </nav>
  );
};

export default Navbar;
