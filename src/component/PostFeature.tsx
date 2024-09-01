import { Archives, Elsewhere } from '../utils/constants'

const PostFeature = () => {
    return (
        <>
            <div className="post-section-feautre-about">
                <div className="feature-head"><h1 className="common-post-header">About</h1></div>
                <div className="feature-body">
                    <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Anenean lecinia bibendum nulla sed consectetur</p>
                </div>
            </div>
            <div>
                <div ><h1 className="common-post-header">Archives</h1></div>
                <div>
                    {
                        Archives.map((arc, index) => {
                            return (
                                <p key={index} className="common-sub-header">{arc}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div ><h1 className="common-post-header">Elsewhere</h1></div>
                <div>
                    {
                        Elsewhere.map((arc, index) => {
                            return (
                                <p key={index} className="common-sub-header">{arc}</p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PostFeature