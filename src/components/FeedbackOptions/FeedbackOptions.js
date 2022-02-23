import React from 'react';
import PropTypes from 'prop-types';
import { Buttons, Button } from './FeedbackOptions.styles';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Buttons>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
          PropTypes.string
      )
  .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;