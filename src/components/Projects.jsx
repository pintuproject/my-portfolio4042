const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#E8A33D] uppercase tracking-[3px] text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold text-[#F2F0E9] mt-2">
            Featured Projects
          </h2>

          <p className="text-[#8B92A3] mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack
            development, responsive UI design, REST APIs, authentication,
            cloud deployment, and modern web technologies.
          </p>
        </div>

        <div className="flex flex-col gap-10">

          {/* Project 1 */}

          <div className="bg-[#1B212C] rounded-2xl overflow-hidden border border-[#2B3443] hover:border-[#E8A33D] transition-all duration-300">

            <div className="grid lg:grid-cols-2">

              <img
                src="onlineclothstore.png"
                alt="Online Cloth Store"
                className="w-full h-full object-cover"
              />

              <div className="p-8 flex flex-col justify-center">

                <span className="text-[#E8A33D] text-sm uppercase tracking-widest">
                  Full Stack MERN Project
                </span>

                <h3 className="text-3xl font-bold text-white mt-3">
                  Online Cloth Store
                </h3>

                <p className="text-[#8B92A3] leading-7 mt-5">
                  Developed a complete MERN stack e-commerce platform featuring
                  secure JWT authentication, product management, shopping cart,
                  order management, Cloudinary image uploads, Stripe/Razorpay
                  payment integration, MongoDB Atlas database, and a responsive
                  user interface. The application includes separate Admin and
                  Customer panels with full CRUD functionality and cloud
                  deployment.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "JWT",
                    "Cloudinary",
                    "Stripe",
                    "Razorpay",
                    "Tailwind CSS"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#242C39] text-[#E8A33D] text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-8">
                  <a
                    href="https://online-cloth-store-three.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center bg-[#E8A33D] text-[#161A22] font-semibold px-6 py-3 rounded-lg hover:bg-[#f1b04d] transition"
                  >
                    Live Demo →
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Project 2 */}

          <div className="bg-[#1B212C] rounded-2xl overflow-hidden border border-[#2B3443] hover:border-[#E8A33D] transition-all duration-300">

            <div className="grid lg:grid-cols-2">

              <img
                src="BlogAPP.png"
                alt="Blog Application"
                className="w-full h-full object-cover"
              />

              <div className="p-8 flex flex-col justify-center">

                <span className="text-[#E8A33D] text-sm uppercase tracking-widest">
                  Full Stack MERN Project
                </span>

                <h3 className="text-3xl font-bold text-white mt-3">
                  Blog Application
                </h3>

                <p className="text-[#8B92A3] leading-7 mt-5">
                  Built a feature-rich blogging platform using the MERN stack
                  with JWT authentication, rich text editing, location-based
                  content filtering, likes, comments, secure publishing
                  workflow, and responsive design. Designed RESTful APIs and
                  integrated cloud deployment for scalable performance.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "JWT",
                    "REST API",
                    "Cloudinary",
                    "Tailwind CSS"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#242C39] text-[#E8A33D] text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-8">

                  <a
                    href="https://blog-app-5621.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center bg-[#E8A33D] text-[#161A22] font-semibold px-6 py-3 rounded-lg hover:bg-[#f1b04d] transition"
                  >
                    Live Demo →
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
