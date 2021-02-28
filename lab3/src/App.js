import React from 'react';
import HomePage from './components/homepage'
import Field from './components/field'
import Hobbies from './components/hobby'
import Clicky from './components/clicky'
import "./App.css";

function App() {
  const fname = 'Victoria';
  const study = 'UI/UX Designer';
  const fun = 'video games, paint, and do yoga';
  return (
    <div>
    <HomePage firstName={fname} />
    <Field studyCareer={study} />
    <Hobbies funHobby={fun} />
   
    <Clicky />
    </div>
  );
}

export default App;
