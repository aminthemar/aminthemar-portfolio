import React from 'react'

const LazyVideo = ({ video_src, custom_class }) => {
    return (
        <video autoPlay muted loop className={custom_class}>
            <source src={video_src} type="video/mp4" />
        </video>
    )
}

export default LazyVideo