import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import '../../styles.css';
import { useNft } from './useNft';

import { getMediaType, triggerPort } from "./utils";
import Iframe from 'react-iframe'

// interface Props {
//   nft: Record<string, any>;
// }

export const NftMediaContainer = ({ nft }) => {
  const contentType = getMediaType(nft?.contentType);
  const arweaveUrl = `https://arweave.net/${nft?.id}`;

  const IframeContainer = () => (
    <Iframe url={arweaveUrl} onLoad={() => triggerPort(nft?.id)} />
  );

  const ImageContainer = () => (
    <img 
      src={arweaveUrl} 
      alt={arweaveUrl} 
      onLoad={() => triggerPort(nft?.id)} 
      width="100%"
      className="popCard"/>
    );
  const VideoContainer = () => (
    <video 
      controls
      controlsList="nodownload"
      onLoadedData={() => triggerPort(nft?.id)}
      width="100%"
      className="popCard"
      >
      <source src={arweaveUrl} />
    </video>
  );

  const renderContainer = () => {
    switch (contentType) {
      case "image":
        return <ImageContainer />;
      case "video":
        return <VideoContainer />;
      case "iframe":
        return <IframeContainer />;
      default:
        return <></>;
    }
  };
  return (
    <div >
      {renderContainer()}
    </div>
  );
};

const queryClient = new QueryClient();


export const Monalisa = ({screen}) => {
  // const txId = props.match.params.txId;
  const txId = "P4efd1dfbjUz8sgEv_kTQwDnawtVpaeUXgMVt3vNk_c";

  const {data: nft, isLoading, isError} = useNft({id: txId})

  const screenId = screen;
  // const screenId = "61e1532b4cdb8cfa375286da";
  // const screenId = "61e10b9fe679b4afaf09b3a9";
  const [index, setIndex] = React.useState(0);
  const delay = 5000;
  const timeoutRef = React.useRef(null);
  const [videos, setVideos] = React.useState([]);

  function resetTimeout() {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response  = await window.fetch(`https://vblinds.herokuapp.com/api/screens/${screenId}/screenVideos`)
        const data = await response.json();
        setVideos(data)
        console.log(data)
        resetTimeout()
        timeoutRef.current = setTimeout(() => {
          setIndex(prevIndex => (prevIndex === (videos.length - 1 || videos.length) ? 0 : prevIndex + 1))
        }, delay)
      } catch (r) {
        console.error(r)
      }
    }
    fetch()
  }, [index])

  return (
    <QueryClientProvider client={queryClient}>

    <div>
      <div className="monalisa_slideshow">
        <div 
          className="monalisa_slideshowSlider" 
          style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
          >
            {videos.map((video) => (
              <a key={video._id} href={`https://vblinds.herokuapp.com/video/${video._id}`} target="_blank" rel="noopener noreferrer">
                {/* <img 
                className="monalisa_slide"
                key={index}
                src={video.thumbnail}
                alt={video.name}
                >
                </img> */}
                kjlkkl
                <NftMediaContainer nft={nft}/>
              </a>
            ))}
        </div>
      </div>
    </div>
    </QueryClientProvider>

  )
}