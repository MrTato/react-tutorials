import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import PageNavbar from './components/PageNavbar';
import PostsListPage from './components/PostsListPage';
import HelpPage from './components/HelpPage';
import PostEditPage from './components/PostEditPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <PageNavbar />
            <Route path="/help" component={HelpPage} />
            <Route path="/EditPost/:postId" component={PostEditPage} />
            <Route path="/" exact={true} component={PostsListPage} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
