import Feature from "../component/Feature"
import Footer from "../component/Footer"
import Header from "../component/Header"
import HeroSection from "../component/HeroSection"
import Navbar from "../component/Navbar"
import Posts from "../component/Posts"

const Blog = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <Feature />
      <Posts />
      <Footer/>
    </>
  )
}

export default Blog