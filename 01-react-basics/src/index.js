import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FunctionalComponent from "./Jsx/FunctionalComponent";
import ContainerComponent from "./Jsx/ContainerComponent";
import UseEffectHookDemo from "./Hooks/UseEffectHookDemo";
import UseStateHookDemo from "./Hooks/UseStateHookDemo";
import LifeCycleDemo from "./LifeCycle/LifeCycleDemo";
import Parent from "./PropsDemo/Parent";
import StateParent from "./StateDemo/StateParent";
import Courses from "./Courses/Courses";

const routing = (
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/container/101">Container</Link>
          </li>
          <li>
            <Link to="/functional/iphone">Functional</Link>
          </li>
          <li>
            <Link to="/effecthook">useEffect</Link>
          </li>
          <li>
            <Link to="/statehook?page_no=99">useState</Link>
          </li>
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/state">State</Link>
          </li>
          <li><Link to="/courses">Courses</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/container/:id" component={ContainerComponent} />
        <Route path="/functional/:name" component={FunctionalComponent} />
        <Route path="/effecthook" component={UseEffectHookDemo} />
        <Route path="/statehook" component={UseStateHookDemo} />
        <Route path="/lifecycle" component={LifeCycleDemo} />
        <Route path="/props" component={Parent} />
        <Route path="/state" component={StateParent} />
        <Route path = "/courses" component={Courses}/>
        <Route render={() => <div>404 - Not Found</div>} />
      </Switch>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
