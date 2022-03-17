import React from 'react';
const bankOne = [
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
]

class App extends React.Component {
 
  render () {
    return (
      <div id="drum-machine" className='app-container'>
        <div className="header" style={{backgroundColor: "green"}}>
            header
        </div>
        <DrumDisplay />
      </div>
    );
  }
}

const DrumDisplay = () => {
 
  return (
    <div className='control-container'>
        <div id="display" className='pad-container'>
          {bankOne.map ((sound) => (
          <DrumPad  sound={sound} className="drum-pad"/>
          )
          )}
        </div>
      
      <div className="display-bar">
        <p className="display" >
          Place Holder for Sound Display
        </p>
      </div>
    </div>)
}

const DrumPad = ({ sound }) => {
  console.log(sound);
  const handleKeyDown = (e) => {
    if (e.keyCode === sound.keyCode) {
      playSound();
    };
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown',handleKeyDown)
      }
    })

  const playSound = () => {
    const playAudio = document.getElementById(sound.keyTrigger);
    
    playAudio.currentTime = 0;
    playAudio.play();
  }

  return (
    <div onClick={playSound} id={sound.keyCode} class="drum-pad">
      <audio id={sound.keyTrigger} className="clip" src={sound.url}/>
      {sound.keyTrigger}   
    </div>)
}

export default App;
