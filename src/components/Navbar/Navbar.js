import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="static">
      <div className="h-20 lg:flex hidden items-center shadow-lg px-20 justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-green-600">JOB PORTAL</h1>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-green-600 hover:border-b-2 border-green-600">
            <Link>Home</Link>
          </li>
          <li className="hover:text-green-600 hover:border-b-2 border-green-600">
            <Link>About</Link>
          </li>
          <li className="hover:text-green-600 hover:border-b-2 border-green-600">
            <Link>Contact US</Link>
          </li>
          <li className="hover:text-green-600 hover:border-b-2 border-green-600">
            <Link>Sign in</Link>
          </li>
          <li className="hover:text-green-600 hover:border-b-2 border-green-600">
            <Link>Sign out</Link>
          </li>
        </ul>
      </div>

      {/* mobile and tab version */}
      <div className="block lg:hidden">
        <div
          className={`flex justify-between px-5 md:px-8 py-5 items-center ${
            !isOpen ? "shadow-lg" : "shadow-none"
          }`}
        >
          <div>
            <h1 className="md:text-3xl text-2xl font-semibold text-green-600">
              JOB PORTAL
            </h1>
          </div>
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <BiMenu className="text-2xl" />
            )}
          </div>
        </div>
        <div
          className={`flex items-center shadow-lg py-8 justify-center ${
            isOpen ? "blcok" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-8 text-lg">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact US</Link>
            </li>
            <li>
              <Link>Sign in</Link>
            </li>
            <li>
              <Link>Sign out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
