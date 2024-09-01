import PostContents from "./PostContents"
import PostFeature from "./PostFeature"

interface IPosts {
  data: boolean
}

const Posts = ({ data }: IPosts) => {
  return (
    <div className="post-section">
      <div className="post-section-box">
        <div className="common-post-header post-section-buttons"><h2>From the Firehose</h2></div>
        <div className="post-section-list">
          <PostContents datas={data} />
        </div>
      </div>

      <div className="post-section-feature">
        <PostFeature />
      </div>
    </div>
  )
}

export default Posts