import { useState } from "react"
import CreatePost from "../component/CreatePost"
import Feature from "../component/Feature"
import Footer from "../component/Footer"
import Header from "../component/Header"
import HeroSection from "../component/HeroSection"
import Navbar from "../component/Navbar"
import Posts from "../component/Posts"

const Blog = () => {
  const [isCreated, setIsCreated] = useState<boolean>(false)

  const handleChildData = (data) => {
    setIsCreated(data)
  }

  return (
    <>
      <div className="blog-page">
        <Header />
        <Navbar />
        <HeroSection />
        <Feature />
        <Posts data={isCreated} />
        <CreatePost handle={handleChildData} />
      </div>
      <Footer />
    </>
  )
}

export default Blog