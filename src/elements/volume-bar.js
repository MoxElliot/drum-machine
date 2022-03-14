import React from "react";
import VolumeSlider from "../components/volume-slider";

class VolumeBar extends React.Component {
    render () {
      return (
        <div className="volume-bar" style={{backgroundColor: "pink"}}>
          volume bar
          <VolumeSlider />
        </div>
      )
    }
  };

  export default VolumeBar;