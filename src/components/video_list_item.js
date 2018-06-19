import React from 'react';


const VideosListItem = ({propsvideos,propsVideoSelected}) => {
  var imgUrl = propsvideos.snippet.thumbnails.default.url;
  return(
    <li onClick={() => propsVideoSelected(propsvideos)} className="list-group-item">
    <div className="list-media">
      <div  className="media-left">
        <img className="media-object" src={imgUrl} />
      </div>
        <div className="media-body">
          <div className="media-heading">{propsvideos.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideosListItem;
