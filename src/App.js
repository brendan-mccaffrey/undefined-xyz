import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navbar/NavigationBar';
import { Jumbotron } from './components/Jumbotron'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
          <Jumbotron/>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
