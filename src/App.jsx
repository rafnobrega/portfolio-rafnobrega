import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/Skills"
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle />
      <Intro />
      <About />
      {/* <Skills /> */}
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
