import back7 from "../assets/back7.jpg"
import { BsSearchHeart } from "react-icons/bs";

const Hero = () => {
  return (
      <section>
        <div style={{backgroundImage:`url(${back7})`}} className="w-full h-[400px] bg-no-repeat bg-center bg-cover object-fill ">
          <div className="w-full h-full bg-black top-0 left-0 bg-opacity-70">
            <div className="max-w-5xl mx-auto px-8 pt-24">
              <div className="relative text-white text-5xl text-center font-bold z-10"><div className="absolute w-[390px] h-6 inset-x-0 mx-auto -bottom-1 opacity-80 bg-lime-500 -z-10"></div>RISE MY HANDS</div>
              <h1 className="text-white text-3xl text-center font-medium mt-3">blogs no image</h1>
              <div className="relative flex justify-center mx-auto mt-8 items-center max-w-[35%] h-10 rounded-lg overflow-hidden">
                <input type="text" placeholder="Search blog here ..." className="absolute h-full w-full bg-gray-200  border-none outline-none pl-3 text-lg text-slate-600 font-semibold"/>
                <span className="absolute top-0 right-0 flex justify-center items-center text-black bg-lime-500 h-full w-10 cursor-pointer">
                  <BsSearchHeart size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero