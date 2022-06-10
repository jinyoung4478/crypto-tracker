import Router from "./Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { darkAtom } from './atoms';

function App() {
  const isDarkMode = useRecoilValue(darkAtom);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;