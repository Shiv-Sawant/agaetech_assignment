import { useEffect } from "react"
import { defaultPosts } from "../utils/constants"

interface IPostContents {
    datas: boolean
}

const PostContents = ({ datas }: IPostContents) => {
    const getLocalPosts = localStorage.getItem('posts')
    const parseData = getLocalPosts && JSON.parse(getLocalPosts) || []
    useEffect(() => {
        const element = document.querySelectorAll('#common-sub-header')
        if (element) {
            element.forEach(ele => {
            ele.style.color = 'rgba(24, 133, 255, 255)'
                
            });
        }
    }, [datas])

    return (
        <>
            {
                defaultPosts.map((posts) => {
                    return (
                        <div className="post-section-content">
                            <div className="post-content-head">
                                <h1 className="post-content-head-title">{posts.title}</h1>
                                <p> {posts.date} <span className="common-sub-header"> {posts.by} </span></p>
                            </div>
                            <div className="post-content-body">
                                {/* {posts.content[0]} */}
                                {posts.content.map((data, index) => {
                                    return (
                                        <div key={index} dangerouslySetInnerHTML={{ __html: data }} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
            {
                parseData.length != 0 && parseData.map((data: any, index: any) => {
                    return (
                        <div className="post-section-content" key={index}>
                            <div className="post-content-head">
                                <h1 className="post-content-head-title">{data.PostTitle}</h1>
                                <p>{data.PostDate} by <span className="common-sub-header">{data.PostBy}</span></p>
                            </div>
                            <div className="post-content-body">
                                <p>
                                    {data.PostContent}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

            <div className="post-section-buttons">
                <button>Older</button>
                <button>Newer</button>
            </div>
        </>
    )
}

export default PostContents