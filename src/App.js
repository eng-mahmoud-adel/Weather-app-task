import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import HomePage from './components/Pages/HomePage';
import Form from './components/Form/Form';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/weather" component={Form}/>
      </Switch>
    </div>
  );
}

export default App;
