import React , {Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';


// import file
import YtSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideosDetails from "./components/video_detail";
import VideosList from "./components/video_list";

const API_KEY = "AIzaSyBCOppN4Gu0E_UyaM6m9z5xuCa518GpfDA";
// Create a new component.  This component should produce
// some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedvideos :null,
    }
    this.OnsearchTerm("Maroon5");
  }
  OnsearchTerm(term){
    YtSearch({key:API_KEY,term:term},(Ytvideo) => {
      this.setState({
      videos:Ytvideo,
      selectedvideos:Ytvideo[0]
      });
    })
  }
  render(){
    const videoSearch = _.debounce((term) => {this.OnsearchTerm(term)},300);
    return(
      <div>
      <SearchBar OnsearchTerm={videoSearch} />
      <div className="row">
      <VideosDetails propsvideo={this.state.selectedvideos} />
      <VideosList propsVideoSelected={(selectedvideos) => this.setState({selectedvideos})} propsvideos={this.state.videos} />
      </div>
      </div>
    )
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
