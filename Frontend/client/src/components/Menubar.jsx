import { useState } from "react";
import { assests } from "../assets/assests.js";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { openSignIn, openSignUp } = useClerk();

  const {user} = useUser()

  const openRegister = () => {
    openSignUp({});
  };

  const openLogin = () => {
    openSignIn({});
  };

  return (
    <nav className="bg-white px-8 py-4 flex justify-between items-center">
      {/*  left side: logo + text   */}
      <Link to={"/"} className="flex items-center space-x-2">
        <img
          src={assests.logo}
          alt="Logo"
          className="h-8 w-8 object-contain cursor-pointer"
        />
        <span className="text-2xl font-semibold text-indigo-700 cursor-pointer">
          bg.<span className="text-gray-400 cursor-pointer">remove</span>
        </span>
      </Link>

      {/*  right side:  action buttons  */}

      <div className="hidden md:flex item-center space-x-4">
        <SignedOut>
          <button
            className="text-gray-700 hover:text-blue-500 font-medium"
            onClick={openLogin}
          >
            Login
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all"
            onClick={openRegister}
          >
            Sign Up
          </button>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 sm:py2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
              <img src={assests.credits} alt="credits" height={24} width={24}/>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits: 0
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden">
              Hi, {user ? user.firstName : "User"}
            </p>
          </div>
          <UserButton />
        </SignedIn>
      </div>

      {/* mobile hamburger */}
      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 w-40 p-4">
          <SignedOut>
            <button
              className="text-gray-700 hover:text-blue-500 font-medium"
              onClick={openLogin}
            >
              Login
            </button>
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center"
              onClick={openRegister}
            >
              Sign Up
            </button>
          </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="flex items-center gap-2 bg-blue-100 px-4 py-1.5 sm:py-2.5 rounded-full hover:scale-105">
                  <img src={assests.credits} alt="credits" height={24} width={24}/>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">
                    Credits: 0
                  </p>
                </button>
                
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <UserButton />
                <p className="text-gray-600 ml-2">
                  Hi, {user ? user.firstName : "User"}
                </p>
              </div>
            </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Menubar;
