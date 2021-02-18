
import  {useEffect, useState} from 'react';
import Search_bar from './components/search_bar/search_bar';
import Video_detail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import styles from './App.module.css';

const App = ({youtube})=>{
  const [videos,setVideos] = useState([]);
  const [text,setSearch] = useState('');
  const [selected,setSelected] = useState(null);


  const selectedVideo = (video) =>{
    setSelected(video);
  }

  const search = e =>{
    e.preventDefault();
    youtube.search(text).then(videos => setVideos(videos));
    setSelected(null);
  }

  useEffect(()=>{
    youtube.mostPopular().then(videos => setVideos(videos));
  },[])

      
  
  
  const handleChange=(e)=>{
    setSearch(e.target.value);
  }


  return (
    <div className={styles.app}>
    <Search_bar search={search} text={text} onChange={handleChange}/>
    <section className={styles.content}>
      {selected && <div className={styles.detail}>
        <Video_detail video={selected}/>
      </div>}
      <div className={styles.list}>
        <VideoList video={videos} onVideoClick={selectedVideo} display={selected ? 'list':'grid'}/>  
      </div>
    </section>
    </div>
  );

  }
export default App;




