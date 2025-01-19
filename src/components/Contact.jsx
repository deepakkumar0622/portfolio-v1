import Swal from "sweetalert2";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "ec30f07c-be02-45cc-ab90-976f6924d12d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      form.reset();
    }
  };
  return (
    <div className=" md:container">
      <div className="flex  flex-col md:flex-row gap-20 ">
        <form
          onSubmit={onSubmit}
          className="border max-w-[30rem]  flex-1 bg-slate-200 rounded-lg shadow-mild-bottom  m-10"
        >
          <div className="m-5  flex flex-col gap-5 p-4  ">
            <h2 className="text-center text-3xl font-semibold">Contact Me!!</h2>

            <div className=" flex flex-col">
              <label className="font-medium">Full Name</label>
              <input
                name="name"
                className=" px-3 w-full text-[14px] bg-[white] p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Email Address</label>
              <input
                name="email"
                className="  px-3 w-full text-[14px] bg-[white] p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium"> Your Message</label>
              <textarea
                name="message"
                className=" px-3 w-full text-[14px] bg-[white] h-[180px] p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
                type="text"
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="mx-auto button1">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </form>
        <div>
          <img
            src="./contact.png"
            className="w-[35rem] md:block hidden ml-auto h-[35rem] animate-bounce-slight "
          />
        </div>
      </div>
    </div>
  );
}
