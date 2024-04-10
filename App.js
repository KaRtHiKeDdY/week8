// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
