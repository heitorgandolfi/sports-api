import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/defaultTheme";

import { StandingTable } from "./components/StandingTable";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>olá</h1>
      <StandingTable />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
