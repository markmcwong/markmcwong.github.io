import "./App.css";

import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Routes from "./routes";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowRight, faChevronDown, faEnvelope, faGithub, faLinkedin);
library.add(faLinkedin);

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
