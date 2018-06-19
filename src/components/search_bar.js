import React , {Component } from 'react';



export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: " ",
    }
  }
  OninputCHange(term){
    this.setState({term});
    this.props.OnsearchTerm(term);
  }
    render(){
      return(
        <div className="search-bar">
          <input onChange={event => this.OninputCHange(event.target.value)} />
        </div>
      )
    }

}
