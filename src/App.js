import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store';

class App extends Component {
  // store holds the entire state tree of the application using redux
  state = {
    counter: 0
  };

  doIncrement() {
    const c = this.counter += 1;
    this.state.setState({counter: c})
  }

  doDecrement() {
    const c = this.counter -= 1;
    this.state.setState({counter: c})
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        <Postform/>
        <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
