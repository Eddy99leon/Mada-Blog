import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <section className=" bg-lime-500">
        <div className="flex justify-between flex-col sm:flex-row items-center max-w-5xl mx-auto py-3 px-8 text-black">
            <p className="text-center text-sm sm:text-base font-bold pb-2 sm:pb-0">
              Coder with 🖤 by Eddy Léon.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#!" className="text-xl"><BsFacebook /></a>
              <a href="#!" className="text-2xl"><AiFillGithub /></a>
              <a href="#!" className="text-2xl"><AiFillTwitterCircle /></a>
            </div>
        </div>
    </section>
  )
}

export default Footer