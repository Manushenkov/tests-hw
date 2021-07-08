import "./styles/App.sass";
import React from 'react';

import { BrowserRouter as Router} from "react-router-dom";

import AppUnrouted from "./AppUnrouted"

function App() {
  return (
    <Router>
      <AppUnrouted />
    </Router>
  );
}

export default App;
