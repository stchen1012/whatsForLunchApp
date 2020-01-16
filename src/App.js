import React from 'react';
import Main from './Main/main';
import MyForm from './Main/myForm';
import YelpResult from './Main/yelpResult';
import NavBar from './Navbar/Navbar'
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <h1> test app.js</h1>
        <Main />
        <MyForm />
        <YelpResult />

      </div>
    );
  }
}

export default App;
