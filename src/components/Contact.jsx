import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#E8A33D] uppercase tracking-[3px] text-sm">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-[#F2F0E9] mt-2">
            Let's Connect
          </h2>

          <p className="text-[#8B92A3] mt-4 max-w-xl mx-auto">
            I'm currently open to Full Stack Developer opportunities.
            Whether you have a project, a job opportunity, or simply want to
            connect, I'd love to hear from you.
          </p>
        </div>

        <div className="bg-[#1B212C] border border-[#2B3443] rounded-2xl p-10">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#E8A33D] text-2xl" />
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-[#8B92A3]">
                    pp154360@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#E8A33D] text-2xl" />
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-[#8B92A3]">
                    +91 6370411295
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#E8A33D] text-2xl" />
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-[#8B92A3]">
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>

            </div>

            <div className="flex flex-col justify-center">

              <h3 className="text-2xl text-white font-semibold">
                Let's Build Something Great 🚀
              </h3>

              <p className="text-[#8B92A3] mt-4 leading-7">
                I'm passionate about developing scalable web applications,
                solving real-world problems, and collaborating with innovative
                teams. Feel free to reach out if you'd like to discuss an
                opportunity or just say hello!
              </p>

              <div className="flex gap-5 mt-8">

                <a
                  href= "https://github.com/pintuproject"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E8A33D] text-3xl hover:scale-110 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/pintupradhan404442/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E8A33D] text-3xl hover:scale-110 transition"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;