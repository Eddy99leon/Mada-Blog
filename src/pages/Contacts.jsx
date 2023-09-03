import back7 from "../assets/back7.jpg"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Contacts = () => {
  return (
    <section>
        <Navbar />
      
        <div style={{backgroundImage:`url(${back7})`}} className="w-full h-[400px] bg-no-repeat bg-center bg-cover object-fill ">
          <div className="w-full h-full bg-black top-0 left-0 bg-opacity-70">
            <div className="max-w-5xl mx-auto px-4 pt-24">
              <div className="relative text-white text-5xl text-center font-bold z-10"><div className="absolute w-[255px] h-6 inset-x-0 mx-auto -bottom-1 opacity-80 bg-lime-500 -z-10"></div>CONTACTS</div>
              <h1 className="text-white text-2xl md:text-3xl text-center font-medium mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> Lorem ipsum dolor sit amet.</h1>
            </div>
          </div>
        </div>
        

        <div className="w-full bg-gray-200">
            <div className="max-w-5xl mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="text-center md:text-start mb-6">
                    <h1 className="text-black mb-4 text-3xl font-medium decoration-lime-500 underline underline-offset-8 decoration-wavy">Contact us</h1>
                    <p className="max-w-[500px] mx-auto mb-6 text-gray-500 font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium, modi accusantium ipsum corporis quia asperiores
                      dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
                      autem omnis fugiat perspiciatis? Ad, veritatis.
                    </p>
                    <p className="mb-2 text-black font-bold">
                      Madagascar, 101 , Antananarivo
                    </p>
                    <p className="mb-2 text-black font-bold">
                      +291 38 517 03
                    </p>
                    <p className="mb-2 text-black font-bold">
                      madablog@gmail.com
                    </p>
                  </div>


                  <div className="">
                    <form className="text-center space-y-4">
                      <input 
                        type="text"
                        className="max-w-[400px] text-gray-600 bg-transparent text-base font-medium border-2 border-black w-full p-2 rounded-md"
                        id="exampleInput90" 
                        placeholder="Name" 
                      />
                      <input 
                        type="email"
                        className="max-w-[400px] text-gray-600 bg-transparent text-base font-medium border-2 border-black w-full p-2 rounded-md"
                        id="exampleInput91" 
                        placeholder="Email address" 
                      />
                      <textarea 
                        className="max-w-[400px] text-gray-600 bg-transparent text-base font-medium border-2 border-black w-full p-2 rounded-md"
                        rows="3" 
                        placeholder="Your message.." 
                      />
                      <div className="flex justify-center items-center">
                        <input
                          className=" h-5 w-5 bg-transparent rounded border-5 border-black outline-none accent-lime-500"
                          type="checkbox"
                        />
                        <label className="ml-3 font-semibold">
                          Send me a copy of this message
                        </label>
                      </div>
                      <button type="button" className="max-w-[400px] rounded bg-lime-500 w-full py-2 text-base font-bold uppercase leading-normal text-black ">
                        Send
                      </button>
                    </form>
                  </div>


                </div>
            </div>
        </div>

        <Footer />
    </section>
  )
}

export default Contacts