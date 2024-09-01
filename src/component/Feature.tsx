import { FeatureList } from "../utils/constants"

const Feature = () => {
  return (
    <div className="blog-feature">
      {
        FeatureList.map((list, index) => {
          return (
            <div key={index} className="blog-feature-box">
              <div className="blog-feature-content">
                <div><h3>{list.title}</h3></div>
                <div>
                  <h2>{list.postHead}</h2>
                  <span>{list.date}</span>
                </div>
                <div>
                  <p>This is wider card with supporting text<br /> below as a natural lead-in to additional<br /> content.</p>
                </div>
                <div>
                  <h4 className="common-sub-header">Continue reading</h4>
                </div>
              </div>
              <div className="blog-feature-thumbnail">Thumbnail</div>
            </div>
          )
        })

      }
    </div>
  )
}

export default Feature