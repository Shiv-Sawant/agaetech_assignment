import { useEffect } from "react"

interface IPostContents {
    datas: boolean
}

const PostContents = ({ datas }: IPostContents) => {
    const getLocalPosts = localStorage.getItem('posts')
    const parseData = getLocalPosts && JSON.parse(getLocalPosts) || []

    useEffect(() => {

    }, [datas])

    return (
        <>
            <div className="post-section-content">
                <div className="post-content-head">
                    <h1 className="post-content-head-title">Sample blog post</h1>
                    <p>Januvary 1, 2014 by<span className="common-sub-header">Mark</span></p>
                </div>
                <div className="post-content-body">
                    <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                    <p>
                        Cum sociis natoque penatibus et magnis <span className="common-sub-header">dis parturient montes</span>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                    </p>
                    <p>
                        Curabitur blandit tempus porttitor. <b>Nullam quis risus eget urna mollis</b> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit
                    </p>
                    <p>
                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla and consectetur.
                    </p>
                    <h1>Heading</h1>
                    <p>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <h1>Sub-heading</h1>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>Example code block</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                    <h1>Sub-heading</h1>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <ul>
                        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                        <li>Donec id elit non mi porta gravida at eget metus.</li>
                        <li>Nulla vitae elit libero, a pharetra augue.</li>
                    </ul>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                    <ol>
                        <li>Vestibulum id ligula porta felis euismod semper.</li>
                        <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                        <li>Maecenes sed diam eget risus varius blandit sit amet non magna.</li>
                    </ol>
                    <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis</p>
                </div>
            </div>

            <div className="post-section-content">
                <div className="post-content-head">
                    <h1 className="post-content-head-title">Another blog post</h1>
                    <p>December 23, 2012 by <span className="common-sub-header">Jacob</span></p>
                </div>
                <div className="post-content-body">
                    <p>
                        Cum sociis natoque penatibus et magnis <span className="common-sub-header">dis parturient montes</span>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                    </p>
                    <p>
                        Curabitur blandit tempus porttitor. <b>Nullam quis risus eget urna mollis</b> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit
                    </p>
                    <p>
                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla and consectetur.
                    </p>
                    <p>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                </div>
            </div>

            <div className="post-section-content">
                <div className="post-content-head">
                    <h1 className="post-content-head-title">New feature</h1>
                    <p>December 14, 2013 by <span className="common-sub-header">Chirs</span></p>
                </div>

                <div className="post-content-body">
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <ul>
                        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                        <li>Donec id elit non mi porta gravida at eget metus.</li>
                        <li>Nulla vitae elit libero, a pharetra augue.</li>
                    </ul>
                    <p>
                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla and consectetur.
                    </p>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                </div>

            </div>

            {
                parseData.length != 0 && parseData.map((data: any, index: any) => {
                    return (
                        <div className="post-section-content" key={index}>
                            <div className="post-content-head">
                                <h1 className="post-content-head-title">{data.PostTitle}</h1>
                                <p>December 14, 2013 by <span className="common-sub-header">{data.PostBy}</span></p>
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