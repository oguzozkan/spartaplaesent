import "./App.css";
import Home from "./Components/Home/Home";
import "../src/Css/home.css";
import "../src/Css/card.css";

import "../src/Css/ContactForm.css";
import "../src/Css/loading.css";
import "../src/Css/navbar.css";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </>
  );
}

export default App;
