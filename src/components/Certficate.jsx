import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const items = [
  {
    img: "./typescript.png",
    title: "Typescript",
    site: "Simplilearn",
    logo: <img src="./simplilearn.jpeg" />,
  },
  {
    img: "./reactjs.png",
    title: "React JS",
    site: "Simplilearn",
    logo: <img src="./simplilearn.jpeg" />,
  },
  {
    img: "./SQL.png",
    title: "SQL",
    site: "Simplilearn",
    logo: <img src="./simplilearn.jpeg" />,
  },
  {
    img: "./Sk-python.png",
    title: "Python for beginners",
    site: "Skill-Rack",
    logo: <img src="./skillrack.png" />,
  },
  {
    img: "./SL-Python.png",
    title: "Python",
    site: "Solo-learn",
    logo: (
      <svg viewBox="0 0 2225.2 2230.7" xmlns="http://www.w3.org/2000/svg">
        <g strokeMiterlimit="10">
          <path
            d="m699.9 98.8s-597.3 699.4 135.7 1478.5c0 0-643.4-214-713.4-713.4 0 0-103.5-509.1 577.7-765.1z"
            fill="#6bb94f"
            stroke="#6bb94e"
          />
          <path
            d="m639.7 1119.9s83.9-1021.1 1156.8-891c0 0-465.8-381.9-895.2-158.1-1.4 0-611.3 331.5-261.6 1049.1z"
            fill="#ee7541"
            stroke="#ed7540"
          />
          <path
            d="m891.5 668.1s261.6-437.8 923.2-345.5c0 0 479.8 144.1 401.4 979.1-1.4 0-267.2-1011.3-1324.6-633.6z"
            fill="#e9555f"
            stroke="#e9565f"
          />
          <path
            d="m1431.4 644.3s815.5 797.3 0 1566.6c0 0 499.4-132.9 688.2-594.5 0 0 193-686.7-688.2-972.1z"
            fill="#ea589f"
            stroke="#e9589f"
          />
        </g>
        <path
          d="m1693 1189.8s-363.7 1035.1-1342.8 734.3c0 0 292.3 398.6 812.7 286.7-.1.1 661.5-50.2 530.1-1021z"
          fill="#32b7e9"
        />
        <path
          d="m35.5 896.1s226.6 937.2 1314.8 720.4c0 0-384.7 468.6-1000.1 230.8 0-.1-482.6-244.8-314.7-951.2z"
          fill="#118e9b"
        />
      </svg>
    ),
  },
  {
    img: "./Communication.jpg",
    title: "Communication by TCS",
    site: "TCS ION",
    logo: <img src="./ion.png" className="mx-1" />,
  },
  {
    img: "./Cb course.png",
    title: "CyberSecurity",
    site: "IBM Skillbuild",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="ibm">
        <path d="M5.07 13.95h5.79v.81H5.07zM5.07 15.56h5.79v.81H5.07zM6.69 17.18h2.54v.81H6.69zM6.69 18.79h2.54v.81H6.69zM6.69 20.4h2.54v.81H6.69zM6.69 22.02h2.54v.81H6.69zM5.07 23.63h5.79v.81H5.07zM5.07 25.24h5.79v.81H5.07zM26.32 13.95l.29.81h-4.98v-.81h4.69zM34.91 13.95v.81h-4.98l.29-.81h4.69zM26.89 15.56l.29.81h-5.55v-.81h5.26zM34.91 15.56v.81h-5.56l.29-.81h5.27zM27.47 17.18l.29.8h-4.47v-.8h4.18zM33.24 17.18v.8h-4.46l.28-.8h4.18zM33.24 18.79v.81h-2.51v-.41l-.15.41h-4.62l-.15-.41v.41h-2.52v-.81h4.76l.22.61.22-.61h4.75zM23.29 20.4h2.52v.81h-2.52zM26.24 20.4h4.06l-.29.81h-3.48l-.29-.81zM30.73 20.4h2.51v.81h-2.51zM23.29 22.02h2.52v.8h-2.52zM26.82 22.02h2.9l-.29.8h-2.32l-.29-.8zM30.73 22.02h2.51v.8h-2.51zM21.63 23.63h4.18v.81h-4.18zM27.4 23.63h1.74l-.29.81h-1.16l-.29-.81zM30.73 23.63h4.18v.81h-4.18zM21.63 25.24h4.18v.81h-4.18zM27.98 25.24h.58l-.29.81-.29-.81zM30.73 25.24h4.18v.81h-4.18zM13.31 17.18h2.54v.81h-2.54zM17.65 18.79h-4.34v.81h6.52a2.23 2.23 0 0 0 .69-.81zm.11-4.79h-6.07v.81H20a3.46 3.46 0 0 0-2.24-.81zM21 16.37a2.51 2.51 0 0 0-.28-.81h-9v.81H21zm0 .81a3.12 3.12 0 0 1-.14.8h-2.52v-.8zM13.31 22.02h2.54v.81h-2.54zM20.52 21.21a2.23 2.23 0 0 0-.69-.81h-6.52v.81h7.21zm-2.74 4.03h-6.09v.81h6.07a3.46 3.46 0 0 0 2.24-.81zm-.3-1.61h-5.79v.81h9a2.51 2.51 0 0 0 .28-.81zm3.52-.81a3.12 3.12 0 0 0-.14-.8h-2.52v.8z"></path>
      </svg>
    ),
  },

  {
    img: "./Ai course.png",
    title: "Artificial Intelligence",
    site: "IBM Skillbuild",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="ibm">
        <path d="M5.07 13.95h5.79v.81H5.07zM5.07 15.56h5.79v.81H5.07zM6.69 17.18h2.54v.81H6.69zM6.69 18.79h2.54v.81H6.69zM6.69 20.4h2.54v.81H6.69zM6.69 22.02h2.54v.81H6.69zM5.07 23.63h5.79v.81H5.07zM5.07 25.24h5.79v.81H5.07zM26.32 13.95l.29.81h-4.98v-.81h4.69zM34.91 13.95v.81h-4.98l.29-.81h4.69zM26.89 15.56l.29.81h-5.55v-.81h5.26zM34.91 15.56v.81h-5.56l.29-.81h5.27zM27.47 17.18l.29.8h-4.47v-.8h4.18zM33.24 17.18v.8h-4.46l.28-.8h4.18zM33.24 18.79v.81h-2.51v-.41l-.15.41h-4.62l-.15-.41v.41h-2.52v-.81h4.76l.22.61.22-.61h4.75zM23.29 20.4h2.52v.81h-2.52zM26.24 20.4h4.06l-.29.81h-3.48l-.29-.81zM30.73 20.4h2.51v.81h-2.51zM23.29 22.02h2.52v.8h-2.52zM26.82 22.02h2.9l-.29.8h-2.32l-.29-.8zM30.73 22.02h2.51v.8h-2.51zM21.63 23.63h4.18v.81h-4.18zM27.4 23.63h1.74l-.29.81h-1.16l-.29-.81zM30.73 23.63h4.18v.81h-4.18zM21.63 25.24h4.18v.81h-4.18zM27.98 25.24h.58l-.29.81-.29-.81zM30.73 25.24h4.18v.81h-4.18zM13.31 17.18h2.54v.81h-2.54zM17.65 18.79h-4.34v.81h6.52a2.23 2.23 0 0 0 .69-.81zm.11-4.79h-6.07v.81H20a3.46 3.46 0 0 0-2.24-.81zM21 16.37a2.51 2.51 0 0 0-.28-.81h-9v.81H21zm0 .81a3.12 3.12 0 0 1-.14.8h-2.52v-.8zM13.31 22.02h2.54v.81h-2.54zM20.52 21.21a2.23 2.23 0 0 0-.69-.81h-6.52v.81h7.21zm-2.74 4.03h-6.09v.81h6.07a3.46 3.46 0 0 0 2.24-.81zm-.3-1.61h-5.79v.81h9a2.51 2.51 0 0 0 .28-.81zm3.52-.81a3.12 3.12 0 0 0-.14-.8h-2.52v.8z"></path>
      </svg>
    ),
  },
  {
    img: "./express.png",
    title: "Express JS",
    site: "Simplilearn",
    logo: <img src="./simplilearn.jpeg" />,
  },
  {
    img: "./scaler-react.png",
    title: "React JS",
    site: "Scaler",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="15"
        height="15"
        viewBox="0 0 48 48"
      >
        <polygon
          fill="#1976d2"
          points="13,14 6,21 6,43 28,43 35,36 13,36"
        ></polygon>
        <linearGradient
          id="kw9e71-tYab9dR5CupF7wa_GsP9dpq9piub_gr1"
          x1="13"
          x2="43"
          y1="21"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
        <polygon
          fill="url(#kw9e71-tYab9dR5CupF7wa_GsP9dpq9piub_gr1)"
          points="21,6 13,14 35,14 35,36 43,28 43,6"
        ></polygon>
        <path fill="#1b8edf" d="M6,21v22h22V21H6z M21,36h-8v-8h8V36z"></path>
        <polygon
          fill="#027ad4"
          points="35,14.145 43,6.145 43,6 21,6 21,14 35,14"
        ></polygon>
        <polygon fill="#0553a4" points="35,14 35,36 43,28 43,6"></polygon>
      </svg>
    ),
  },
  {
    img: "./fita.png",
    title: "Master in Full Stack",
    site: "FITA Academy",
    logo: "",
  },
];

const Certficate = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="2000" className="md:mb-20">
      <h2 className="text-5xl  font-bold text-center m-6 md:my-5">
        Certifications
      </h2>
      <div
        className="bg-gray-100 my-5 rounded-md shadow-mild-bottom md:p-16"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          direction="horizontal" // Default is horizontal
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 0,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {items.map((v, i) => (
            <SwiperSlide key={i}>
              <div
                data-aos="flip-right"
                data-aos-duration="2000"
                onMouseEnter={(e) =>
                  e.currentTarget.removeAttribute("data-aos")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.setAttribute("data-aos", "flip-left")
                }
                className=" transition-transform duration-300 ease-in-out transform hover:scale-125 flex flex-col items-center md:p-16 shadow-lg p-5 cursor-pointer"
              >
                <div className="md:h-[200px] md:w-[300px]  w-[300px] h-[200px]  shadow-lg">
                  <img
                    src={v.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center mt-4">
                  <h2 className="text-base  font-semibold">{v.title}</h2>
                  <div className="flex gap-1 items-center m-2">
                    <spam className="w-[15px] h-[15px]">{v.logo}</spam>
                    <p className="text-xs font-medium ">{v.site}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certficate;
