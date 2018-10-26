import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Nav from './component/Nav/Nav';


class App extends Component {
  render() {
    console.log(window.location.href)
    const {href} = window.location;
    return (
      <div className="App">

        <Nav pathname={href}/>
        {routes}

      </div>
    );
  }
}

export default App;
