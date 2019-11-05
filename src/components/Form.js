import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    data: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/about/${this.state.data}`);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.data]: target.value });
  }

  render() {
    const { data } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="character name"value={data} onChange={this.handleChange} ></input>
        <button>Search</button>
      </form>
    );
  }
}
