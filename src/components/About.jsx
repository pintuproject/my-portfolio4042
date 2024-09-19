import React from 'react'

const About = () => {
  return (
    <div className='about'>
    <section
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center  bg-teal-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src=
"about.png"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                {/* <p>
                I specialize in transforming designs into seamless web experiences. With a strong foundation in HTML, CSS, and JavaScript, I build interactive user interfaces using modern frameworks like React.js.
                </p> */}
                <p>
                I am a passionate Front-End Developer with 1 year of experience in building responsive and user-friendly web applications. Skilled in HTML, CSS, JavaScript, and React.js, I focus on creating intuitive interfaces and seamless user experiences. I have a keen eye for design and a strong understanding of modern web development practices. With a background in both software development and teaching, I enjoy collaborating with teams and continuously learning to enhance my skills. I'm currently seeking opportunities to contribute to dynamic projects and grow as a developer.
                </p>
            </div>
        </section>
        </div>
  )
}

export default About