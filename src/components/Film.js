import React, {Component, Fragment} from 'react';

class Film extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <a href={this.props.url}><li>{this.props.name}</li></a>
    )
  }
}

export default Film;
