import logo from './logo.svg';
import './App.css';
import SigninComponent from './components/SignIn';
import SignupComponent from './components/SignUp';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <SigninComponent />
    </div>
  );
}

export default App;
