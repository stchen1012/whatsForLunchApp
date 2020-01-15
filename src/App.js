import React from 'react';
import Main from './Main/main';
import MyForm from './Main/myForm';
import YelpResult from './Main/yelpResult';
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
