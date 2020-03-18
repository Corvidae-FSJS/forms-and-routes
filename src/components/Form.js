import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { handleChange, handleSubmit, name } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="character name" value={name} onChange={handleChange}></input>
        <button>Search</button>
      </form>
    );
  }
}