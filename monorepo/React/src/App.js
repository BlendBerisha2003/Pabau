import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import images from './images/thanks.png';
import './App.css';

const Step1 = () => {
  return (
    <div className='links'>
      <h1>Step 1/2</h1>
      <ul>
        <li>
          <Link to="/step2/option1">Anti Wrinkle Treatment  <span>➔</span></Link>
        </li>
        <li>
          <Link to="/step2/option2">Dermal Fillers  <span>➔</span></Link>
        </li>
        <li>
          <Link to="/step2/option3">Secret RF <span>➔</span></Link>
        </li>
        <li>
          <Link to="/step2/option4">Profhilo <span>➔</span></Link>
        </li>
        
      </ul>
    </div>
  );
};

const Step2 = ({ match }) => {
  const [currentStep, setCurrentStep] = useState('2/2');
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      setCurrentStep('2/2');
    });

    return () => {
      unlisten();
    };
  }, [history]);

  const options = {
    option1: 'Anti Wrinkle Treatment',
    option2: 'Dermal Fillers',
    option3: 'Secret RF',
    option4: 'Profhilo',
  };

  const goBack = () => {
    setCurrentStep('1/2');
    history.push('/');
  };

  return (
    <div>
      <h1>Step {currentStep}</h1>
      <button onClick={goBack}>Back</button>
      <h2>Selected Option: {options[match.params.option]}</h2>
      <img src={images} alt="thank you!" />
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <div class="head">
        <header>
          <h1>Choose Service</h1>
        </header>
<div className='routes'>
        <Route exact path="/" component={Step1} />
        <Route path="/step2/:option" component={Step2} />
        </div>
        <footer>
          <h1>Call +23123123  </h1>
        </footer>
      </div>
    </Router>
  );
};

export default App;
