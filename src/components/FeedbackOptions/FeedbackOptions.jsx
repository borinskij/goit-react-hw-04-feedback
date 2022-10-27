import PropTypes from 'prop-types';

export const FeedbackOptions = ({ hendelClick, options }) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
    >
      {options.map(element => (
        <button
          key={element}
          type="button"
          className="btn btn-primary"
          name={element}
          onClick={hendelClick}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  hendelClick: PropTypes.func.isRequired,
};
