import PostContents from "./PostContents"
import PostFeature from "./PostFeature"

const Posts = ({data}) => {
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