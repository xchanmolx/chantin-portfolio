import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Project from './containers/Project/Project';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>          
          <Switch>
            <Route path="/project" component={Project} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
