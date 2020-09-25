import React from 'react';
import Covid from './Covid'
import Corona from './covid.jpg'

function App() {
  return (
    <div className="App">
      <div style={{textAlign:"center"}}>
        <h1>COVID UPDATES</h1>
        <img src={Corona} alt="corona" style={{borderRadius:"50%"}}></img>
      </div>
        <Covid/>
    </div>
  );
}

export default App;
