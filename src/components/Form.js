import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    handleChange: PropTypes.object.isRequired,
    handleSubmit: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { handleChange, handleSubmit, name } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="character name" value={name} onChange={this.handleChange} ></input>
        <button>Search</button>
      </form>
    );
  }
}
