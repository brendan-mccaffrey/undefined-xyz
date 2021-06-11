import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navbar/NavigationBar';
import { Jumbotron } from './components/Jumbotron'
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { Team } from './components/Team';
import { Landing } from './components/Landing';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      landing: true
    }
  }

  componentDidMount() {
    // document.addEventListener("click", this.setState({landing: false}));
    setTimeout(() => {
      this.setState({landing: false});
    }, 5000); // 1000ms = 1 second
  }

  render() {

    if (this.state.landing) {
      return (
        <React.Fragment>
          <Landing/>
        </React.Fragment>
      )
    }


    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
          <Jumbotron/>
          <Portfolio/>
          <Team/>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <Footer/>
      </React.Fragment>
    );
  }
}





export default App;
