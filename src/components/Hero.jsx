import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const eMail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=deepak.kumarr.dev@gmail.com &su=Whats'up👋👋 &body=Ask your queries here??"
    );
  };

  return (
    <div className="md:container" data-aos="fade-down" data-aos-duration="3000">
      <div className="flex items-center md:flex-row flex-col justify-between">
        <div className="md:hidden block">
          <img
            src="./hero.png"
            alt="png"
            className="max-w-[300px] mt-20 animate-bounce-slight"
          />
        </div>
        <div className="flex flex-col md:mt-28 m-5 gap-5 md:gap-5 text-white">
          <p className="md:text-5xl text-3xl  font-semibold">
            Hello,It&apos;s Me
          </p>
          <p className="md:text-7xl text-5xl font-bold ">
            Deepak <span>Kumar</span>,
          </p>
          <p className="md:text-3xl md:block hidden text-xl">
            {" "}
            and I&apos;m a{" "}
            <TypeAnimation
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 md:text-4xl text-3xl font-semibold"
              sequence={["Front-End Developer", 1000, " ", 500]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />{" "}
          </p>
          <p className="line-clamp-3 max-w-[700px]">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <button className="btn mt-10 max-w-[200px]" onClick={eMail}>
            Contact me
          </button>
        </div>
        <div className="hidden md:flex flex-col">
          <img
            src="./hero.png"
            alt="png"
            className=" img max-w-[400px] mt-20 animate-bounce-slight"
          />
          <div className="w-[100%] mx-auto h-[5px] bg-black blur-md "></div>
        </div>
      </div>
      <div className="flex items-center justify-end  mt-28 pb-6 gap-5">
        <a
          href="https://www.linkedin.com/in/deepak-kumar-dev22"
          target="_blank"
        >
          <img
            src="./linkedin.png"
            width="20px"
            alt="LinkedIn"
            className="transition-transform transform hover:scale-110 hover:filter hover:invert"
          />
        </a>
        <a href="https://github.com/deepakkumar0622" target="_blank">
          <img
            src="./github.png"
            width="20px"
            alt="GitHub"
            className="transition-transform transform hover:scale-110 hover:filter hover:invert"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="./facebook.png"
            width="20px"
            alt="Facebook"
            className="transition-transform transform hover:scale-110 hover:filter hover:invert"
          />
        </a>
        <a
          href="https://www.instagram.com/mr_crazy_cruzz?igsh=MWV3NXp6enNnOHdvcQ%3D%3D"
          target="_blank"
        >
          <img
            src="./instagram.png"
            width="20px"
            alt="Instagram"
            className="transition-transform transform hover:scale-110 hover:filter hover:invert"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
