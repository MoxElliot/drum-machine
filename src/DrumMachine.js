import React from 'react';
import Header from './elements/header.js';
import DrumDisplay from './elements/drum-display.js';
import VolumeSlider from './elements/volume-slider.js';

class DrumMachine extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div id="drum-machine">
        <Header />
        <DrumDisplay />
        <VolumeSlider />
      </div>
    );
  }
}

export default DrumMachine;
