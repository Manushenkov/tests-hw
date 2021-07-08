import "./styles/App.sass";
import React from "react";

import { useState } from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Settings from "./Settings";
import Details from "./Details";
import Initial from "./Initial";

function AppUnrouted() {
  const [repoName, setRepoName] = useState();

  return (
    <div className="App">
      <Switch>
        <Route path="/settings">
          <Header title={"School CI server"} />
          <Settings />
        </Route>
        <Route exact path="/">
          <Initial repoName={repoName} setRepoName={setRepoName} />
        </Route>
        <Route exact path="/build/:number">
          <Details repoName={repoName} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default AppUnrouted;
