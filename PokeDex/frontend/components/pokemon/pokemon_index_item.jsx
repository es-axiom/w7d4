import React from 'react';
import { withRouter } from 'react-router';

class PokemonIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let tar = e.currentTarget;
    window.location.hash = `/pokemon/${this.props.id}`;
  }
  render() {
    return(
      <li className="pokemon-index-item" onClick={this.handleClick}>
    <span>{this.props.id}</span>
    <img src={this.props.img_url}/>
    <span>{this.props.name}</span>
</li>
    );
  }
}


export default withRouter(PokemonIndexItem);
