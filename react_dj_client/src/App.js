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
          <EntitiesTable url='/entities.json' title='entities'/>
      </div>
    );
  }
}

export default App;
