import React from "react";
import DrumPad from "../components/drum-pad";

class DrumDisplay extends React.Component {
    render () {
      return (
        <div id="display" className='pad-container' style={{backgroundColor: "lightblue"}}>
            drum display
            <DrumPad />
        </div>
      )
    }
  };

  export default DrumDisplay
  