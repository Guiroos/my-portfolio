import React, { useState } from "react";
import {
  FaBars, FaTimes, FaGithub, FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Head from "../assets/theme/head.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-2 bg-gradient-to-b from-purple-800 to-cyan-400">

      <div>
        <img className="w-20" src={Head} alt="Logo" />
      </div>

      <ul className="hidden md:flex text-white ">
        <li>
          <Link to="home" smooth duration={500}>
            /home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500}>
            /about
          </Link>
        </li>
        <li>
          <Link to="stacks" smooth duration={500}>
            /stacks
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500}>
            /projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500}>
            /contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} role="presentation" onKeyPress={handleClick} className="md:hidden z-10">
        {!isOpen ? <FaBars size={30} className="text-white" /> : <FaTimes size={30} className="text-white" />}
      </div>

      <ul className={!isOpen ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-purple-800 text-white"}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth duration={500}>
            /home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth duration={500}>
            /about
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="stacks" smooth duration={500}>
            /stacks
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects" smooth duration={500}>
            /projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth duration={500}>
            /contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="text-white">
          <li className="w-[170px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-full">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/guilhermeroos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
              <FaLinkedin size={40} />
            </a>
          </li>
          <li className="w-[170px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800 rounded-r-full">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/Guiroos"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <FaGithub size={40} />
            </a>
          </li>
          <li className="w-[170px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600 rounded-r-full">
            <a
              className="flex justify-between items-center w-full"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
              <SiGmail size={40} />
            </a>
          </li>
          <li className="w-[170px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-400 rounded-r-full">
            <a className="flex justify-between items-center w-full" href="/">
              Resume
              {" "}
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
