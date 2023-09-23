import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/defaultTheme";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomePage />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
