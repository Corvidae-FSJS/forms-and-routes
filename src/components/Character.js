import React from 'react';
import PropTypes from 'prop-types';
import getCharacter from '../services/api-call';

const Character = ({ character }) => {
  return (
    <div>
      <img src={character.photoUrl} />
      <h2>{character.name}</h2>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;