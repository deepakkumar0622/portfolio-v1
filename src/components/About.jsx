const icons = [
  {
    icons: "./atom.png",
    title: "React Js",
    level: 70, // Level in percentage
  },
  {
    icons: "./next.png",
    title: "Next JS",
    level: 50,
  },
  {
    icons: "./tailw.png",
    title: "Tailwind CSS",
    level: 80,
  },
  {
    icons: "./js.png",
    title: "JavaScript",
    level: 60,
  },
  {
    icons: "./html-5.png",
    title: "HTML",
    level: 90,
  },
  {
    icons: "./css-3.png",
    title: "CSS",
    level: 90,
  },
];

const About = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <h1
          className="text-5xl mx-auto font-bold"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          About
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-10 md:mt-0 items-center  md:space-x-36 ">
        <div data-aos="fade-left" data-aos-duration="2000">
          <img
            src="./about.png"
            width="500px"
            alt="Aboutimg"
            className="animate-bounce-slight md:w-[500px] w-[300px]"
          />
          <div className="w-[100%] mx-auto h-[5px] bg-black blur-md "></div>
        </div>
        <div className="mt-10">
          <div>
            <p
              className="md:font-medium md:line-clamp-4 md:text-base text-sm text-center md:text-start  md:max-w-[600px] mt-5 italic"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              I&apos;m a Front-End Developer dedicated to creating visually
              appealing, responsive, and user-friendly websites. Let&apos;s work
              together to turn your ideas into dynamic and engaging web
              experiences! 👋👋
            </p>
            <h1
              className="font-bold text-4xl text-center mt-10 underline"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Skills
            </h1>
            <div
              className="grid md:grid-cols-3 grid-cols-2 md:gap-16 gap-5 p-10"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            >
              {icons.map((v, i) => (
                <div
                  key={i}
                  className="group w-40 h-40 [perspective:1000px] mx-auto"
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  {/* Card Wrapper */}
                  <div className="relative cursor-pointer w-full h-full [transform-style:preserve-3d] transition-transform duration-700 rounded-full group-hover:[transform:rotateY(180deg)] ">
                    {/* Front Side */}
                    <div className="absolute inset-0 flex flex-col md:w-full w-[150px] border group-hover:scale-125 transition-all border-gray-500 items-center justify-center [backface-visibility:hidden] rounded-full shadow-lg">
                      <img src={v.icons} alt="icon" width="60px" />
                      <p className="text-gray-800 text-lg font-medium mt-2">
                        {v.title}
                      </p>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-40 h-40 bg-gradient-to-br  from-gray-50 to-gray-200 border border-gray-300 rounded-full flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      {/* Circular Indicator */}
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <circle
                            className="text-gray-200"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            r="16"
                            cx="18"
                            cy="18"
                          />
                          <circle
                            className="text-green-400"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            r="16"
                            cx="18"
                            cy="18"
                            strokeDasharray={`${v.level} ${100 - v.level}`}
                            transform="rotate(-90 18 18)"
                            strokeLinecap="round"
                          />
                        </svg>

                        <div className="absolute text-lg font-bold text-green-400">
                          {v.level}%
                        </div>
                      </div>

                      {/* Slider Indicator */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
