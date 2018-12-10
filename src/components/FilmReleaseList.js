import React, {Component} from 'react';
import Film from './Film.js'

class FilmReleaseList extends Component {
  render(){

    const filmNodes = this.props.data.map((film) => {
      return <Film key={film.id} name={film.name} url={film.url}/>
    });

    return(
      <ul className="film-list">
        {filmNodes}
      </ul>
    )
  }
}

export default FilmReleaseList
