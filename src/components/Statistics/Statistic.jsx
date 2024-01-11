import { Box, Title, Rating } from "./Statistic.styled";
export const Statistic = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Rating>Good: {good}</Rating>
      <Rating>Neutral: {neutral}</Rating>
      <Rating>Bad: {bad}</Rating>
      <Rating>Total: {total}</Rating>
      <Rating>Positive feedback: {positivePercentage}%</Rating>
    </Box>
  );
};
