import React from "react";
import DrumPad from "../components/drum-pad";


class DrumDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
    render () {
      
      return (
        <div id="display" className='pad-container' style={{backgroundColor: "lightblue"}}>
          <DrumPad />
        </div>
      )
    }
  };

  export default DrumDisplay
  