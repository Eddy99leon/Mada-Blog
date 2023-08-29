import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <section className=" bg-lime-500">
        <div className="flex justify-between items-center max-w-5xl mx-auto py-3 px-8 text-black">
            <p className="text-center text-base font-bold">Coder with 🖤 by Eddy Léon.</p>
            <div className="flex items-center space-x-3">
              <a href="#!"><BsFacebook size={20} /></a>
              <a href="#!"><AiFillGithub size={24} /></a>
              <a href="#!"><AiFillTwitterCircle size={24} /></a>
            </div>
        </div>
    </section>
  )
}

export default Footer