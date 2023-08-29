import back7 from "../assets/back7.jpg"

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

              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span><span className=" text-lime-500 font-bold">*</span> What is Madablog platform?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="text-lime-600" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Qui molestias incidunt sint dolorem voluptatem dolore eius magnam itaque odio dolor!
                  </p>
                </details>
              </div>

              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span><span className=" text-lime-500 font-bold">*</span> How does Madablog work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="text-lime-600" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Delectus deserunt id eaque sunt quidem saepe nisi odio amet quos et.
                  </p>
                </details>
              </div>

              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span><span className=" text-lime-500 font-bold">*</span> Can I try this platform for free?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="text-lime-600" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Doloribus nam distinctio quaerat ratione assumenda sint, cumque itaque aliquid veniam aut!
                  </p>
                </details>
              </div>

              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span><span className=" text-lime-500 font-bold">*</span> How do I access to the documentation?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="text-lime-600" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Laudantium vel mollitia nemo ex ab rem laboriosam, error animi odit impedit?
                  </p>
                </details>
              </div>

              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span><span className=" text-lime-500 font-bold">*</span> How do I contact support?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="text-lime-600" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Assumenda veritatis odio culpa excepturi iusto, obcaecati sit consectetur voluptate cupiditate ipsam?
                  </p>
                </details>
              </div>

              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span><span className=" text-lime-500 font-bold">*</span> Do you offer any discounts or promotions?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="text-lime-600" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Repudiandae veritatis unde nam sequi accusamus itaque vero deserunt explicabo quo recusandae?
                  </p>
                </details>
              </div>

              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span><span className=" text-lime-500 font-bold">*</span> How do we compare to other similar services?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="text-lime-600" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Rerum voluptates quas officia minus delectus aliquam distinctio quos cupiditate ducimus at?
                  </p>
                </details>
              </div>

            </div>
          </div>

        </div>
    </section>
  )
}

export default Abouts