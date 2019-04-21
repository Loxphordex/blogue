// Useful Stuff
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

// Page Elements 
import Header from '../Header/Header'
import Entries from '../Entries/Entries'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mainEntries: [],
    }
  }

  populateEntries = (data) => {
    this.setState({
      mainEntries: data
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/' render={() => <Entries 
          mainEntries={this.state.mainEntries}
          populateEntries={this.populateEntries} />}
         />
      </div>
    );
  }
}

export default App;