import React from 'react';
import "./App.css"
import Header from '../Components/Header/Header';
import HomePage from '../Pages/HomePage/HomePage';

function App(props) {
  return (
    <div className=' App-div '>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
