// src/routes/index.js
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Bar from "../components/Bar";
import MainPage from "../containers";

const Routes = () => (
  <BrowserRouter>
    <Bar />
    <Switch>
      <Route path="/" element={<MainPage />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
