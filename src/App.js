import React from 'react';
import Main from './main';
import MyForm from './myForm';
import YelpResult from './yelpResult';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1> test app.js</h1>
        <Main />
        <MyForm />
        <YelpResult />

      </div>
    );
  }
}

export default App;
