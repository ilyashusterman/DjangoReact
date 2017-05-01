import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import EntitiesTable from './tables/EntitiesTable';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
  //PRODUCTION url='/djreact/manage_objects/'
  // DEVELOPMENT url='/manage_objects.json'
  render() {
    return (
      <div className='App'>
        <Dashboard />
          <EntitiesTable url='/djreact/manage_objects/' title='entities'/>
      </div>
    );
  }
}

export default App;
