import React from 'react';


let soundBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


class App extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                soundDisplay: "Sound Display"
            };
        }

    updateSound = soundDisplay => this.setState({ soundDisplay });

    render() {
        return (
        <div id="drum-machine" className='app-container'>
            <div className="header">
                <p className="header-p">Drum Machine</p>
            </div>
            
            <div className="control-container">  
                <div id="drum-pad" className='pad-container'>
                    {soundBank.map ((sound) => (
                    <DrumPad 
                      sound={sound} 
                      updateSound={ this.updateSound  } 
                      src={sound.url}
                      key={sound.id}
                      id={sound.id} />
                    ))}
                </div>
              
                <div className="display-bar" id="display" >
                    <p className="display-p">{this.state.soundDisplay}</p>
                </div></div>
            
        </div>
        )
    }
}


class DrumPad extends React.Component {
    
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.keyCode === this.props.sound.keyCode) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.updateSound(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.updateSound(this.props.id);
  };

  render (){ 
  return (
    
    <div onClick={this.handleClick} id={this.props.sound.keyCode} className="drum-pad">
      {this.props.sound.keyTrigger}
      <audio 
          id={this.props.sound.keyTrigger} 
          className="clip" 
          src={this.props.sound.url}
          ref={ref => (this.audio = ref)}>
          </audio>
      
    </div>
    )}
}


export default App;