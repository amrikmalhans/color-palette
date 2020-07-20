import React from 'react';
import Palette from './palette'
import SeedColors from './seedColors'

function App() {
  return (
    <div className="App">
      <Palette {...SeedColors[4]} />
    </div>
  );
}

export default App;
