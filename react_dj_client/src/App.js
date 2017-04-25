import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import EntitiesTable from './tables/EntitiesTable';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Dashboard />
          <EntitiesTable url='/djreact/entities' title='entities'/>
        <p className='App-intro'>
          To get started, fedit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
