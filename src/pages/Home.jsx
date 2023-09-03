import Hero from "../components/Hero"
import Blogs from "../components/Blogs"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <Blogs />
        <Footer />
    </section>
  )
}

export default Home