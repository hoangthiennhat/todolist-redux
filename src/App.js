
import React, { Component } from 'react';
import './App.scss';
// import { firebaseConnect } from './firebaseConnect.js';
import Tables from './Components/Tables';
import Edit from './Components/Add';
import Search from './Components/Search';
class App extends Component {

  render() {
    // console.log(firebaseConnect)
    return (
      <div className='jumbotron px-5'>
        <h1 className='text-center text-success pb-5 border-bottom border-info mb-5'>TO DO LIST</h1>
        <Search />
        <div className='row'>
          <Tables />
          <Edit />
        </div>
      </div>
      
    );
  }
}

export default App;
