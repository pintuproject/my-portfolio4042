

const Projects = () => {
  return (
    <div className="projects">
    <section id="projects"
    className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
<h2 className="text-5xl text-emerald-500 font-bold text-center">
   My Projects
</h2>
<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
               gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
               hover:shadow-xl hover:scale-[102%] w-full">
   <div className="w-80 rounded">
       <a href=
"https://blog-app-5621.netlify.app/"
           className="w-full h-full">
           <img src=
"BlogAPP.png"
                alt="Project 2"
                className="w-full h-full 
                           bg-cover rounded"/>
       </a>
   </div>
   <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
       <h2 className="font-bold text-3xl text-center">
           <a className="hover:underline"
               href=
"https://blog-app-5621.netlify.app/ ">
               Blog Application
           </a>
       </h2>
       <p>
       Developed a full-stack Blog Application using the MERN stack (MongoDB, Express, React, Node.js) that enables users to create, view, and manage blog posts with features such as secure user authentication via JWT, a rich text editor for flexible content creation, and location-based filtering for personalized content discovery. The application also includes interactive features like likes and comments, a checkout process for paid publishing, and a responsive design for optimal viewing across devices, with deployment on Netify for the frontend and Render for the backend.
        </p>
   </div>
   
</div>

<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
               gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
               hover:shadow-xl hover:scale-[102%] w-full">
   <div className="w-80 rounded">
       <a href=
"https://66e3056b28c05d1f1a5ab5ed--resonant-taiyaki-3f45f4.netlify.app/"
           className="w-full h-full">
           <img src=
"Ecommerceapp.png"
                alt="Project 1"
                className="w-full h-full 
                           bg-cover rounded"/>
       </a>
   </div>
   <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
       <h2 className="font-bold text-3xl text-center">
           <a className="hover:underline"
               href=
"https://66e3056b28c05d1f1a5ab5ed--resonant-taiyaki-3f45f4.netlify.app/">
               ECommerce Application
           </a>
       </h2>
       <p>
       Developed a responsive e-commerce application using React.js, providing an intuitive shopping experience with key features like product listing, detailed product views, shopping cart, and checkout functionality. Integrated state management and optimized component performance to ensure a smooth user experience across devices.
       </p>
   </div>
   
</div>

</section>
</div>
  )
}

export default Projects
