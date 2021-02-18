import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';
import  {useEffect, useState} from 'react';

const VideoList = ({video,onVideoClick,display}) => {
   
    return (
        <ul className={styles.list_box}>
            {video.map(video=> <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>)}
        </ul>
    );
};

export default VideoList;