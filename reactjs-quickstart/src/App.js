import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import PageNavbar from './components/PageNavbar';
import PostsListPage from './components/PostsListPage';

class App extends Component {
  render() {
    return (
      <div>
        <PageNavbar />
        <PostsListPage />
      </div>
    );
  }
}

export default App;
