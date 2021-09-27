import { ThemeProvider } from "styled-components";
import GlobalStyles from "../global.styles";

function theme() {
  return {
    breakpoints: ["640px", "768px", "1024px", "1280px"],
    colors: {
      white: "#FFFFFF",
      black: "#000000;",
      purple: "#683D83",
      gray: "#F2F2F2",
      background: "#000;",
      // background: "#E5E5E5;",
    },
  };
}

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
