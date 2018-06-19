import React , {Component } from 'react';
import VideosListItem from "./video_list_item";



const VideosList = (props) => {

  let ImportVideo =  props.propsvideos.map((videos) => {
      return <VideosListItem propsVideoSelected={props.propsVideoSelected} key={videos.etag} propsvideos={videos} />
    })
    return(
      <ul className=" col-md-4 list-group">
      {ImportVideo}
      </ul>
    )
}
export default VideosList;
