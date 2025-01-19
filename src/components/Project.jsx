import { Fade, Slide } from "react-awesome-reveal";

const cards = [
  {
    img: "./todocard.jpg",
    title: "Todo-App",
    desc: "A simple yet efficient To-Do app designed to help you organize tasks, set priorities, and boost productivity with ease.",
  },
  {
    img: "./e-card.png",
    title: "E-Commerce website",
    desc: "An intuitive e-commerce platform offering seamless shopping experiences, secure transactions, and a wide range of products to explore.",
  },
  {
    img: "./movie-card.jpeg",
    title: "Movie-App",
    desc: "A dynamic movie app that allows users to browse, search, and discover the latest movies and TV shows with detailed information and trailers.",
  },
  {
    img: "./collegecard.jpg",
    title: "College site",
    desc: "An engaging college blog site for students to share experiences, post articles, and stay updated on campus news and events.",
  },
  {
    img: "./foodcard.jpg",
    title: "Food-app",
    desc: "Discover and order your favorite dishes from nearby restaurants with ease. Enjoy fast delivery, exclusive deals, and a world of flavors at your fingertips!",
  },
  {
    img: "./portfolio.png",
    title: "Portfolio",
    desc: "Showcasing my expertise in web development, design, and innovation. Explore my projects, skills, and achievements that bring ideas to life.",
  },
];

const Project = () => {
  return (
    <div>
      <div>
        <div
          className="space-y-5"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1 className="text-5xl  text-center font-bold">Projects</h1>
          <p className="md:text-xl text-sm italic text-center font-normal">
            &quot;Here are my projects, showcasing creativity, functionality,
            and a passion for innovation&quot;
          </p>
        </div>
        <div
          className="grid md:grid-cols-3 grid-cols-1 gap-10 my-10"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          {cards.map((v, i) => (
            <div
              key={i}
              className="relative cursor-pointer text-white group md:w-[400px] w-[300px] h-[200px]  md:mx-0 mx-auto  border rounded-lg overflow-hidden shadow-lg"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <div className="transition-all  duration-500 ">
                <img
                  src={v.img}
                  className="w-full  h-[250px] rounded-lg"
                  alt={v.title}
                />
              </div>

              <div className="absolute left-0 text-white top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{v.title}</h1>
                    <Fade cascade damping={0.1}>
                      <div className="text-xs overflow-clip break-words ">
                        {v.desc}
                      </div>
                    </Fade>
                    <div>
                      <button className="btn2 max-w-[300px]">
                        <span className="icon">
                          <svg
                            fill="white"
                            width="20"
                            viewBox="0 0 16 16"
                            id="github"
                          >
                            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                          </svg>
                        </span>
                        <span className="text">Link</span>
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
