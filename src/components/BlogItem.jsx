import React from 'react'
import { MdAddReaction } from "react-icons/md";

const BlogItem = () => {
  return (
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
  )
}

export default BlogItem