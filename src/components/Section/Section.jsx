import { Box, Title } from "./Section.styled";
export const Section = ({ title, children }) => {
  <Box>
    <Title>{title}</Title>
    {children}
  </Box>;
};
