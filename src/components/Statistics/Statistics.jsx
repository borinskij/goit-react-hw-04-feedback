import PropTypes from 'prop-types';

export const Statistics = ({ state }) => {
  const { good, neutral, bad } = state;

  let total = 0;
  function countTotalFeedback() {
    total = good + neutral + bad;
    return total;
  }
  countTotalFeedback(good, neutral, bad);

  let count = 0;
  function countPositiveFeedbackPercentage() {
    count = (good / total) * 100;
    return count.toFixed(2);
  }
  countPositiveFeedbackPercentage();
  if (!total) {
    return <h3>'There is no Feedback'</h3>;
  }
  return (
    <>
      <ul>
        <li>
          <span>Good</span>:{state.good}
        </li>
        <li>
          <span>Neutral</span>: {state.neutral}
        </li>
        <li>
          <span>Bad</span>: {state.bad}
        </li>
        <li>
          <span>Total</span>: {total}
        </li>
        <li>
          <span>Positive feedback</span>: {count} %
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
