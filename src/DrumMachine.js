import React from 'react';
import Header from './elements/header.js';
import DrumDisplay from './elements/drum-display.js';
import VolumeBar from './elements/volume-bar.js';

class DrumMachine extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div id="drum-machine" className='app-container'>
        <Header />
        <DrumDisplay />
        <VolumeBar />
      </div>
    );
  }
}

export default DrumMachine;
