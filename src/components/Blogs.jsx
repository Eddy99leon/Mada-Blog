import React from 'react'
import BlogItem from "./BlogItem";

const Blogs = () => {
  return (
    <section className="bg-gray-200">
      <div className="max-w-5xl px-4 mx-auto py-16">
        <h1 className="text-black text-3xl text-center font-medium mb-4 decoration-lime-500 underline underline-offset-8 decoration-wavy">Blogs</h1>
        <p className="text-center font-medium mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus officia nihil qui blanditiis, quod commodi eveniet accusamus cumque dolorum saepe!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 md:max-w-2xl lg:max-w-5xl mx-auto pt-10 px-4 ">

            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            
        </div>
      </div>
    </section>
  )
}

export default Blogs