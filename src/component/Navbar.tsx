import { NavbarList } from "../utils/constants"

const Navbar = () => {
  return (
    <div className="blog-navbar">
      {
        NavbarList.map((list, index) => {
          return (
            <div key={index}><a href="#">{list}</a></div>
          )
        })
      }
    </div>
  )
}

export default Navbar