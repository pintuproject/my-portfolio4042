const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Image */}
        <div className="flex-[0.9] flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl border border-[#E8A33D]/30"></div>

            <img
              src="about.png"
              alt="About Pintu Pradhan"
              className="relative w-72 lg:w-96 rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-[1.2]">

          <p className="text-[#E8A33D] uppercase tracking-[3px] text-sm font-medium">
            About Me
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F0E9] mt-2">
            Full Stack Developer
          </h2>

          <p className="text-[#8B92A3] text-lg leading-8 mt-6">
            I'm a Full Stack Developer with 2+ years of professional experience building scalable web applications using the MERN stack. I enjoy transforming ideas into responsive, user-friendly products that deliver real business value.
          </p>

          <p className="text-[#8B92A3] text-lg leading-8 mt-4">
            My expertise includes React.js, Node.js, Express.js, MongoDB, JavaScript, REST APIs, Material UI, Tailwind CSS, Redux, Socket.IO, JWT Authentication and Cloudinary. I focus on writing clean, maintainable code and continuously improving application performance and user experience.
          </p>

          {/* Highlights */}

          <div className="flex flex-wrap gap-3 mt-8">

            <span className="px-4 py-2 rounded-full bg-[#202632] text-[#E8A33D] text-sm font-medium">
              2+ Years Experience
            </span>

            <span className="px-4 py-2 rounded-full bg-[#202632] text-[#E8A33D] text-sm font-medium">
              MERN Stack
            </span>

            <span className="px-4 py-2 rounded-full bg-[#202632] text-[#E8A33D] text-sm font-medium">
              REST APIs
            </span>

            <span className="px-4 py-2 rounded-full bg-[#202632] text-[#E8A33D] text-sm font-medium">
              React.js
            </span>

            <span className="px-4 py-2 rounded-full bg-[#202632] text-[#E8A33D] text-sm font-medium">
              Node.js
            </span>

            <span className="px-4 py-2 rounded-full bg-[#202632] text-[#E8A33D] text-sm font-medium">
              MongoDB
            </span>

            <span className="px-4 py-2 rounded-full bg-[#202632] text-[#E8A33D] text-sm font-medium">
              Redux
            </span>

            <span className="px-4 py-2 rounded-full bg-[#202632] text-[#E8A33D] text-sm font-medium">
              Material UI
            </span>

          </div>

          {/* Quick Stats */}

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div>
              <h3 className="text-3xl font-bold text-[#E8A33D]">
                2+
              </h3>
              <p className="text-[#8B92A3]">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#E8A33D]">
                15+
              </h3>
              <p className="text-[#8B92A3]">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#E8A33D]">
                20+
              </h3>
              <p className="text-[#8B92A3]">
                REST APIs Built
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#E8A33D]">
                Agile
              </h3>
              <p className="text-[#8B92A3]">
                Team Collaboration
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;