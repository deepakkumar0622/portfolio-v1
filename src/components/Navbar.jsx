import { useState } from "react";
import PropTypes from "prop-types";
const listVal = ["Home", "About", "Projects", "Certifications", "Contact"];
import resume from "/Deepak_full_stack_developer.pdf";

export default function Navbar({ onNavigate }) {
  const [on, seton] = useState(false);
  const showSideBar = () => seton(true);
  const hideSideBar = () => seton(false);

  const handleClick = (e, id) => {
    e.preventDefault(); // Prevent the default anchor behavior
    if (typeof onNavigate === "function") {
      onNavigate(id);
    } else {
      console.error("Error: onNavigate function is not provided.");
    } // Trigger the scrolling function
  };
  return (
    <>
      <nav className="w-full bg-transparent z-50 shadow-sm p-1">
        <div className=" flex justify-between items-center mx-3">
          <img src="./programming.png" width={50} height={50} />
          <ul className="md:flex hidden list-none gap-16   cursor-pointer  ml-32">
            {listVal.map((v, i) => (
              <li
                key={i}
                className="relative text-lg font-normal transform transition-transform hover:scale-125 hover:font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-600 hover:to-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                <a href="#" onClick={(e) => handleClick(e, v)}>
                  {v}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex">
            <a href={resume} download="Deepak_Web developer.pdf">
              <button className="button " type="button">
                <span className="button__text">Download cv</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    id="bdd05811-e15d-428c-bb53-8661459f9307"
                    data-name="Layer 2"
                    width={20}
                    height={20}
                  >
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </button>
            </a>
          </div>
          <svg
            onClick={showSideBar}
            className="md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
        {/* {on && ( */}
        <div className="md:hidden">
          <ul
            className={`flex w-[250px] fixed top-0 right-0   h-screen flex-col shadow-lg items-center backdrop-blur-[10px] z-[2] justify-start list-none gap-10  cursor-pointer  ml-auto transition-transform duration-500   transform ${
              on ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <svg
              onClick={hideSideBar}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            {listVal.map((v, i) => (
              <li
                key={i}
                onClick={hideSideBar}
                className="relative text-lg font-medium hover:scale-105 text-gray-900  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
              >
                <a href="#" onClick={(e) => handleClick(e, v)}>
                  {v}
                </a>
              </li>
            ))}
            <a href={resume} download="Deepak_Web developer.pdf">
              <button className="button" type="button">
                <span className="button__text">Download cv</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    id="bdd05811-e15d-428c-bb53-8661459f9307"
                    data-name="Layer 2"
                    width={20}
                    height={20}
                  >
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </button>
            </a>
          </ul>
        </div>
        {/* )} */}
      </nav>
    </>
  );
}

Navbar.propTypes = {
  onNavigate: PropTypes.func.isRequired, // Validate that onNavigate is a required function
};
