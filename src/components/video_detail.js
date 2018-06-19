import React from 'react';


const VideosDetails = ({propsvideo}) => {
  if(!propsvideo){
    return( <div>Loading gan ... </div>)
  }
const videoTag = propsvideo.id.videoId;
const url = `https://www.youtube.com/embed/${videoTag}`;
return(
  <div className="col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
    </div>
        <div className="details">
            <div>{propsvideo.snippet.title}</div>
            <div>{propsvideo.snippet.description}</div>
        </div>
    </div>

)


}

export default VideosDetails;
