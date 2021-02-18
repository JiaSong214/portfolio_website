import React, { useEffect } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "../Routes/Home";
import NetflixClone from "../Routes/NetflixClone";
import JavascriptProject from "../Routes/JavascriptProject";
import ViolinStore from "../Routes/ViolinStore";

const RoutesPath = ({ location }) => {
  useEffect(() => {
    // if(location.pathname !== '/') {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 301);
    // }
  });

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={300}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/NetflixClone" component={NetflixClone} />
          <Route path="/JavascriptProject" component={JavascriptProject} />
          <Route path="/ViolinStore" component={ViolinStore} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(RoutesPath);
