import "./App.css";

import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowRight, faChevronDown);

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
