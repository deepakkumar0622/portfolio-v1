import { Fade, Slide } from "react-awesome-reveal";

const cards = [
  {
    img: "./movie-card.jpeg",
    title: "Movie-App",
    desc: "A dynamic movie app that allows users to browse, search, and discover the latest movies and TV shows with detailed information and trailers.",
    link: "https://movie-listing-app-cyan.vercel.app/",
  },
  {
    img: "./jio-cinema.png",
    title: "Jio-cinema clone",
    desc: "A JioCinema Clone is a streaming platform for movies, TV shows, and live sports with features like authentication, search, and watchlists.",
    link: "https://deepakkumar0622.github.io/jio-cinema-clone/",
  },
  {
    img: "./portfolio.png",
    title: "Portfolio",
    desc: "Showcasing my expertise in web development, design, and innovation. Explore my projects, skills, and achievements that bring ideas to life.",
    link: "https://github.com/deepakkumar0622/portfolio-v1",
  },
  {
    img: "./collegecard.jpg",
    title: "College site",
    desc: "An engaging college blog site for students to share experiences, post articles, and stay updated on campus news and events.",
    link: "https://github.com/deepakkumar0622/eduford",
  },
  {
    img: "./todocard.jpg",
    title: "Todo-App",
    desc: "A simple yet efficient To-Do app designed to help you organize tasks, set priorities, and boost productivity with ease.",
    link: "https://github.com/deepakkumar0622/Todo-app",
  },
  {
    img: "./foodcard.jpg",
    title: "Food-app",
    desc: "Discover and order your favorite dishes from nearby restaurants with ease. Enjoy fast delivery, exclusive deals, and a world of flavors at your fingertips!",
    link: "https://github.com/deepakkumar0622/food-app",
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
          {cards.map((v, i) => {
            // Inline function to handle the button click
            const handleButtonClick = () => {
              window.open(v.link, "_blank"); // Opens the link specific to the card in a new tab
            };
            return (
              <div
                key={i}
                className="relative cursor-pointer text-white group md:w-[400px] w-[300px] h-[250px] md:mx-0 mx-auto border rounded-lg overflow-hidden shadow-lg"
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <div className="transition-all duration-500">
                  <img
                    src={v.img}
                    className="w-full h-[250px] rounded-lg"
                    alt={v.title}
                  />
                </div>

                <div className="absolute left-0 text-white top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                  <div className="space-y-4">
                    <Slide cascade>
                      <h1 className="text-3xl font-bold">{v.title}</h1>
                      <Fade cascade damping={0.1}>
                        <div className="text-xs overflow-clip break-words">
                          {v.desc}
                        </div>
                      </Fade>
                      <div>
                        <button
                          className="btn2 max-w-[300px]"
                          onClick={handleButtonClick}
                        >
                          <span className="icon">
                            <svg
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#e8eaed"
                            >
                              <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                            </svg>
                          </span>
                          <span className="text">Link</span>
                        </button>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
