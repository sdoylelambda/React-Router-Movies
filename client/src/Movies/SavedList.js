import React, { Component } from 'react';
import{ NavLink, Link } from 'react-router-dom';

class SavedList extends Component {
  constructor(props) {
    super(props);
  }

 

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        {/* <div className="home-button">Home</div> */}
          <button onClick={ routeToHome } className="home-button">
            Home
          </button>
        </div>
    );
  }
}

const routeToHome = event => {
  event.preventDefault();
  
  this.props.history.push("/movie-home");
};

export default SavedList;
