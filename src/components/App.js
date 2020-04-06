import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import List from './List';
import Detail from './Detail';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/list/:name" component={List}></Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;