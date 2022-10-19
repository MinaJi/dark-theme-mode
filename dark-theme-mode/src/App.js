import "./App.css";
import { GlobalStyle } from "./theme/GlobalStyle";
import Header from "./components/Header";
import Template from "./components/Template";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/themeProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Template />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
