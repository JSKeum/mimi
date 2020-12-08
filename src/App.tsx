import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';

import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/stepone" component={StepOne} />
        <Route exact path="/steptwo" component={StepTwo} />
        <Route exact path="/stepthree" component={StepThree} />
        <Redirect exact to="/stepone" />
      </Switch>
    </Router>
  );
}

export default App;
