import Feature from "../component/Feature"
import Footer from "../component/Footer"
import Header from "../component/Header"
import HeroSection from "../component/HeroSection"
import Navbar from "../component/Navbar"
import Posts from "../component/Posts"

const Blog = () => {
  return (
    <>
      <div className="blog-page">
        <Header />
        <Navbar />
        <HeroSection />
        <Feature />
        <Posts />
      </div>
        <Footer />
    </>
  )
}

export default Blog