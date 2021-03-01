import React from 'react';
import HomePage from './components/homepage'
import Field from './components/field'
import Clicky from './components/clicky'
import "./App.css";

function App() {
  const fname = 'Victoria';
  const study = 'UI/UX Designer';
  return (
    <div>
    <HomePage firstName={fname} />
    <Field studyCareer={study} />
   
    <Clicky />
    </div>
  );
}

export default App;
