import React from 'react';
import axios from 'axios';
import '../../styles.css';

export const Monalisa = ({props}) => {
  const screenId = props;
  // const screenId = "61e1532b4cdb8cfa375286da";
  const [index, setIndex] = React.useState(0);
  const delay = 1000;
  const timeoutRef = React.useRef(null);
  const [videos, setVideos] = React.useState([]);

  function resetTimeout() {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(async () => {
    await axios.get(`https://vblinds.herokuapp.com/api/screens/${screenId}/screenVideos`)
      .then((res) => {
        setVideos(res.data);
        console.log(res.data)
      }).then(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () => 
            setIndex((prevIndex) => 
              prevIndex === videos.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );
      })
    return () => {
      resetTimeout();
    };
  }, [
    index, 
    videos
  ]);

  return (
    <div>
      <div className="">
        <div className="slideshow">
          <div 
            className="slideshowSlider" 
            style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
            >
              {videos ? videos.map((video, index) => (
                <a key={video._id} href={`https://vblinds.herokuapp.com/video/${video._id}`}>
                  <img 
                  className="slide"
                  key={index}
                  src={video.thumbnail}
                  alt={video.name}
                  >
                  </img>
                </a>
              )) : (
              <h3>Monalisa By Vinciis</h3>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
