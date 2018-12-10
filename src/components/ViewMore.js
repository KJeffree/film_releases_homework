import React, {Component} from 'react';

class ViewMore extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="view-more">
      <a href={this.props.url}>View More Upcoming Releases >></a>
      </div>
    )
  }
}

export default ViewMore;
