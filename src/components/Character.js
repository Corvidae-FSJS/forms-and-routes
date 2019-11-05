import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  return (
    <div>
      {character}
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;