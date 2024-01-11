import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  return (
    <ul>
      {options.map((option) => (
        <li key={option}>
          {" "}
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {capitalizeFirstLetter(option)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
