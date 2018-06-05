import React, { Component, Fragment } from 'react'
import Footer from './Components/Layouts/Footer'
import Header from './Components/Layouts/Header'
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
