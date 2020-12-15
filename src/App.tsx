import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';

import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import './App.css';
import StepFive from './pages/StepFive';
import StepFour from './pages/StepFour';
import StepSix from './pages/StepSix';
import StepThreeFourth from './pages/StepThreeFourth';
import StepFourSecond from './pages/StepFourSecond';
import StepFourThird from './pages/StepFourThird';
import StepFourFourth from './pages/StepFourFourth';
import StepThreeSecond from './pages/StepThreeSecond';
import StepThreeThird from './pages/StepThreeThird';
import StepTwoSecond from './pages/StepTwoSecond';
import StepFiveSecond from './pages/StepFiveSecond';
import Intro from './pages/Intro';
import StepFiveThird from './pages/StepFiveThird';
import StepSixSecond from './pages/StepSixSecond';
import StepSixThird from './pages/StepSixThird';
import StepFiveFourth from './pages/StepFiveFourth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/stepone" component={StepOne} />
          <Route exact path="/steptwo" component={StepTwo} />
          <Route exact path="/steptwosecond" component={StepTwoSecond} />
          <Route exact path="/stepthree" component={StepThree} />
          <Route exact path="/stepthreesecond" component={StepThreeSecond} />
          <Route exact path="/stepthreethird" component={StepThreeThird} />
          <Route exact path="/stepthreefourth" component={StepThreeFourth} />
          <Route exact path="/stepfour" component={StepFour} />
          <Route exact path="/stepfoursecond" component={StepFourSecond} />
          <Route exact path="/stepfourthird" component={StepFourThird} />
          <Route exact path="/stepfourfourth" component={StepFourFourth} />
          <Route exact path="/stepfive" component={StepFive} />
          <Route exact path="/stepfivesecond" component={StepFiveSecond} />
          <Route exact path="/stepfivethird" component={StepFiveThird} />
          <Route exact path="/stepfivefourth" component={StepFiveFourth} />
          <Route exact path="/stepsix" component={StepSix} />
          <Route exact path="/stepsixsecond" component={StepSixSecond} />
          <Route exact path="/stepsixthird" component={StepSixThird} />
          <Route exact path="/Intro" component={Intro} />
          <Redirect exact to="/intro" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
