import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';

import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import './App.css';
import StepEight from './pages/StepEight';
import StepFive from './pages/StepFive';
import StepFour from './pages/StepFour';
import StepNine from './pages/StepNine';
import StepSeven from './pages/StepSeven';
import StepSix from './pages/StepSix';
import StepTen from './pages/StepTen';
import StepThirteen from './pages/StepThirteen';
import StepTwelve from './pages/StepTwelve';
import StepEleven from './pages/StepEleven';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/stepone" component={StepOne} />
          <Route exact path="/steptwo" component={StepTwo} />
          <Route exact path="/stepthree" component={StepThree} />
          <Route exact path="/stepfour" component={StepFour} />
          <Route exact path="/stepfive" component={StepFive} />
          <Route exact path="/stepsix" component={StepSix} />
          <Route exact path="/stepseven" component={StepSeven} />
          <Route exact path="/stepeight" component={StepEight} />
          <Route exact path="/stepnine" component={StepNine} />
          <Route exact path="/stepten" component={StepTen} />
          <Route exact path="/stepeleven" component={StepEleven} />
          <Route exact path="/steptwelve" component={StepTwelve} />
          <Route exact path="/stepthirteen" component={StepThirteen} />
          <Redirect exact to="/stepone" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
