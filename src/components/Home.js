import React, { Component } from 'react';
import Character from './Character';
import getCharacter from '../services/api-call';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  newCharacter() {
    return getCharacter()
      .then(data => this.setState({ data: data[0] }));
  }
  componentDidMount() {
    this.newCharacter();
  }

  handleClick() {
    this.newCharacter();
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <h1></h1>
        <Character character={data}/>
        <button onClick={this.handleClick}>New Character</button>
      </>
    );
  }
}