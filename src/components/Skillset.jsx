import React from 'react'

const Skillset = () => {
    const skills = ["ReactJS","Java" ,"HTML", "CSS", "Javascript", "MySQL", "Bootstrap","Azure"];
  return (
    <div className='skills'>x
<section name="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-emerald-500 font-bold">
                My Skills...
            </h2>
            <div className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                             className="cursor-pointer px-12 py-10 
                                        rounded bg-emerald-200 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl">
                            {skill}
                        </div>
                    )})}
            </div>
        </section>
        </div>
  )
}

export default Skillset