import { IoSearchOutline } from "react-icons/io5"

const Header = () => {
  return (
    <div className="blog-header">
      <div><p>Subscribe</p></div>
      <div><h1>Large</h1></div>
      <div>
        <span><IoSearchOutline /></span>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Header