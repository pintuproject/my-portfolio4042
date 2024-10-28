

const Intorduction = () => {
  return (
    <section
        name="intorduction"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi I am Pintu Pradhan and welcome to
            </h4>
            <h2 className="text-center text-emerald-500 text-5xl font-bold">
              My Portfolio Website
            </h2>
          </div>
           
        </div>
        <div className="flex justify-center">
  <img 
    src="myimage.jpeg"
    alt="Hello"
    className="mt-20 mb-20 w-80 h-80 rounded-full object-cover"
  />
</div>
      </section>
  )
}

export default Intorduction