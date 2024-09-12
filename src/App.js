import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import CityBuilder from './components/CityBuilder';
import EcoChallenge from './components/EcoChallenge';

function App() {
  useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to GreenStep</h1>
      <CityBuilder />
      <EcoChallenge />
    </div>
  );
}

export default App;