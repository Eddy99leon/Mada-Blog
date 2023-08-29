import { MdAddReaction } from "react-icons/md";

const Blogs = () => {
  return (
    <section className="bg-gray-200">
      <div className="max-w-5xl px-4 mx-auto py-16">
        <h1 className="text-black text-3xl text-center font-medium mb-4 decoration-lime-500 underline underline-offset-8 decoration-wavy">Blogs</h1>
        <p className="text-center font-medium mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus officia nihil qui blanditiis, quod commodi eveniet accusamus cumque dolorum saepe!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 md:max-w-2xl lg:max-w-5xl mx-auto pt-10 px-4 ">

            <div className=" max-w-[300px] h-[300px] pt-6 px-5 bg-gray-100 shadow-lg rounded-md hover:bg-lime-200 transition-all">
              <h1 className=" font-bold mb-1"><span>✨</span>Lorem ipsum dolor sit amet.</h1>
              <p className="text-gray-500 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio?</p>
              <div className="flex items-center font-semibold mb-2"> <MdAddReaction className="mr-1" /> 2</div>
              <div className="flex mb-4 space-x-2">
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">history</div>
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">american</div>
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">crime</div>
              </div>
              <button className=" border outline-none text-sm font-semibold border-black px-3 py-1 rounded">Read More</button>
            </div> 

            <div className=" max-w-[300px] h-[300px] pt-6 px-5 bg-gray-100 shadow-lg rounded-md hover:bg-lime-200 transition-all">
              <h1 className=" font-bold mb-1"><span>✨</span>Lorem ipsum dolor sit amet.</h1>
              <p className="text-gray-500 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio?</p>
              <div className="flex items-center font-semibold mb-2"> <MdAddReaction className="mr-1" /> 2</div>
              <div className="flex mb-4 space-x-2">
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">history</div>
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">american</div>
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">crime</div>
              </div>
              <button className=" border outline-none text-sm font-semibold border-black px-3 py-1 rounded">Read More</button>
            </div> 
            
            <div className=" max-w-[300px] h-[300px] pt-6 px-5 bg-gray-100 shadow-lg rounded-md hover:bg-lime-200 transition-all">
              <h1 className=" font-bold mb-1"><span>✨</span>Lorem ipsum dolor sit amet.</h1>
              <p className="text-gray-500 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio?</p>
              <div className="flex items-center font-semibold mb-2"> <MdAddReaction className="mr-1" /> 2</div>
              <div className="flex mb-4 space-x-2">
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">history</div>
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">american</div>
                <div className="bg-lime-500 px-2 rounded text-sm font-semibold">crime</div>
              </div>
              <button className=" border outline-none text-sm font-semibold border-black px-3 py-1 rounded">Read More</button>
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default Blogs