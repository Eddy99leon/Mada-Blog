import back7 from "../assets/back7.jpg"
import CollapseItem from "../components/CollapseItem"

const Abouts = () => {
  return (
    <section>

        <div style={{backgroundImage:`url(${back7})`}} className="w-full h-[400px] bg-no-repeat bg-center bg-cover object-fill ">
          <div className="w-full h-full bg-black top-0 left-0 bg-opacity-70">
            <div className="max-w-5xl mx-auto px-8 pt-24">
              <div className="relative text-white text-5xl text-center px-2 font-bold z-10"><div className="absolute w-[200px] h-6 inset-x-0 mx-auto -bottom-1 opacity-80 bg-lime-500 -z-10"></div>ABOUTS</div>
              <h1 className="text-white text-3xl text-center font-medium mt-3">blogs no image <br />Lorem ipsum dolor sit amet.</h1>
            </div>
          </div>
        </div>
        
        <div className=" bg-gray-200">
          <div className="max-w-5xl mx-auto px-8 py-16">

            <div className="text-center">
              <h1 className="text-black mb-4 text-3xl font-medium decoration-lime-500 underline underline-offset-8 decoration-wavy">about us</h1>
              <p className="text-neutral-600 text-xl mt-3">
                Frequenty asked questions
              </p>
            </div>

            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">

              <CollapseItem 
                question={" What is Madablog platform?"}
                reponse={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestias incidunt sint dolorem voluptatem dolore eius magnam itaque odio dolor!"}
              />

              <CollapseItem 
                question={" How does Madablog work?"}
                reponse={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestias incidunt sint dolorem voluptatem dolore eius magnam itaque odio dolor!"}
              />

              <CollapseItem 
                question={" Can I try this platform for free?"}
                reponse={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestias incidunt sint dolorem voluptatem dolore eius magnam itaque odio dolor!"}
              />

              <CollapseItem 
                question={" How do I access to the documentation?"}
                reponse={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestias incidunt sint dolorem voluptatem dolore eius magnam itaque odio dolor!"}
              />

              <CollapseItem 
                question={" How do I contact support?"}
                reponse={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestias incidunt sint dolorem voluptatem dolore eius magnam itaque odio dolor!"}
              />

              <CollapseItem 
                question={" Do you offer any discounts or promotions?"}
                reponse={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestias incidunt sint dolorem voluptatem dolore eius magnam itaque odio dolor!"}
              />

              <CollapseItem 
                question={" How do we compare to other similar services?"}
                reponse={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestias incidunt sint dolorem voluptatem dolore eius magnam itaque odio dolor!"}
              />

            </div>
          </div>

        </div>
    </section>
  )
}

export default Abouts