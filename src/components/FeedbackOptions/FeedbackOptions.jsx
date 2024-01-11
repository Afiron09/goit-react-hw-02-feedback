import PropTypes from "prop-types";

import { Box, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      {options.map((item) => (
        <Button key={item} onClick={() => onLeaveFeedback(item)}>
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
