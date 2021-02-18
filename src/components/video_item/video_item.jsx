import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => {
    const imgUrl = props.video.snippet.thumbnails.medium.url;
    const displayType = props.display === 'list' ? styles.list : styles.grid;
    return (
        <div className={`${styles.container} ${displayType}`} onClick={()=>{props.onVideoClick(props.video)}}>
            <div className={styles.box}>
                <img className={styles.thum} src={imgUrl} alt=""/>
                <div className={styles.text}>
                    <div className={styles.title}>{props.video.snippet.title}</div>
                    <div className={styles.channel_title}>{props.video.snippet.channelTitle}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;