import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./theme/GlobalStyle";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Template from "./components/Template";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Template />
      </ThemeProvider>
    </>
  );
}

export default App;
