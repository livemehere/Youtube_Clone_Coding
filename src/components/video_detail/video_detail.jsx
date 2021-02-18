import React from 'react';
import styles from './video_detail.module.css'

const Video_detail = ({video}) => {

    return (
        <section className={styles.detail}>
            <iframe
                className={styles.video}
                type="text/html"
                width='100%'
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen="allowfullscreen">
             </iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <p>{video.snippet.description}</p>
        </section>
    );
}

export default Video_detail;