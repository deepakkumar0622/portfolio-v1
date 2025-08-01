import PropTypes from "prop-types";

const footer = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="black"
      >
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
      </svg>
    ),
    value: "deepak.kumar.dev@gmail.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="black"
      >
        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
      </svg>
    ),
    value: "+91 9952841275",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="black"
      >
        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
      </svg>
    ),
    value: "Pudukkottai,Tamilnadu",
  },
];

const listVal = ["Home", "About", "Projects", "Certifications", "Contact"];

const Footer = ({ onNavigate }) => {
  const handleClick = (e, id) => {
    e.preventDefault(); // Prevent the default anchor behavior
    if (typeof onNavigate === "function") {
      onNavigate(id);
    } else {
      console.error("Error: onNavigate function is not provided.");
    } // Trigger the scrolling function
  };

  return (
    <div>
      <div className="md:container">
        <div className="flex flex-col md:flex-row  mt-5 md:justify-between">
          <div className=" md:flex flex-col hidden  max-w-[300px]">
            <h1 className="font-semibold mb-5 mx-auto  text-2xl">Contact</h1>
            {footer.map((v, i) => (
              <div key={i} className="flex  gap-2">
                <span className="w-10 h-10">{v.icon}</span>
                <p>{v.value}</p>
              </div>
            ))}
          </div>
          <div className="md:flex flex-col hidden gap-3">
            <h1 className="font-semibold mb-1 mx-auto  text-2xl">
              Quick Links
            </h1>
            {listVal.map((v, i) => (
              <div key={i} className="text-center ">
                <p className="relative text-base font-normal transform transition-transform hover:scale-125 hover:font-semibold text-gray-700   after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                  <a href="#" onClick={(e) => handleClick(e, v)}>
                    {v}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center md:mx-0 mx-auto md:w-fit w-36">
            <h1 className="font-semibold mb-5 mx-auto  text-xl md:text-2xl">
              Follow On
            </h1>
            <div className="flex flex-row items-center mb-5 gap-5">
              <a
                href="https://www.linkedin.com/in/deepak-kumar-dev22"
                target="_blank"
              >
                <img
                  src="./Icons/linkedin.png"
                  width="30px"
                  alt="LinkedIn"
                  className=" transition-transform transform hover:scale-110 hover:filter "
                />
              </a>
              <a href="https://github.com/deepakkumar0622" target="_blank">
                <img
                  src="./Icons/github.png"
                  width="30px"
                  alt="GitHub"
                  className="transition-transform transform hover:scale-110 hover:filter"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="./Icons/facebook.png"
                  width="30px"
                  alt="Facebook"
                  className="transition-transform transform hover:scale-110 hover:filter "
                />
              </a>
              <a
                href="https://www.instagram.com/mr_crazy_cruzz?igsh=MWV3NXp6enNnOHdvcQ%3D%3D"
                target="_blank"
              >
                <img
                  src="./Icons/instagram.png"
                  width="30px"
                  alt="Instagram"
                  className="transition-transform transform hover:scale-110 hover:filter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black ">
        <div className="container items-center justify-center text-gray-400 p-2 text-xs flex">
          <p>copyright&#64;2025 </p>
          <p>.Designed by deepak🙌</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  onNavigate: PropTypes.func.isRequired, // Validate that onNavigate is a required function
};
