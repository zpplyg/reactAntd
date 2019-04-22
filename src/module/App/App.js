import React, { Component } from 'react';
import './App.less';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Main from '../Main/main'
import '../../config/GlobalStyle/style.less'
class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Switch>
              <Route path='/main' component={Main}/>
              <Redirect from="/" to='/main'/>
          </Switch>
      </div>
    );
  }
}

export default App;
