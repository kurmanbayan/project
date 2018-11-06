import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NavBar from './Main/NavBar';
import Main from './Main/Main'
import Results from './Main/Results'

class App extends Component {
  render() {
    return (
			<Router>
        <div>
          <NavBar />
          <div className="container">
    			  <Link to="/" />

            <Route exact path="/" component={Main} />
            <Route path="/results" component={Results} />
          </div>
        </div>
			</Router>
    );
  }
}

export default App;
