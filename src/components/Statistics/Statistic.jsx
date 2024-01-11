import { Box, Title, Rating } from "./Statistic.styled";
export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box>
      <Title>Statistics</Title>
      <Rating>{good}</Rating>
      <Rating>{neutral}</Rating>
      <Rating>{bad}</Rating>
      <Rating>Total: {total}</Rating>
      <Rating>Positive feedback: {positivePercentage}</Rating>
    </Box>
  );
};
