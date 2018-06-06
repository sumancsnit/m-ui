import React, { Component, Fragment } from 'react'
import {Header, Footer} from './Components/Layouts'
import Exercise from './Components/Exercises'



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
          
          <Exercise />
          
        <Footer />
      </Fragment>
    );
  }
}

export default App;
