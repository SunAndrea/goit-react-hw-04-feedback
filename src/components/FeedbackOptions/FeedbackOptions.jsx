import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <button onClick={onGood} key={nanoid()} type="button">
        good
      </button>
      <button onClick={onNeutral} key={nanoid()} type="button">
        neutral
      </button>
      <button onClick={onBad} key={nanoid()} type="button">
        bad
      </button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
