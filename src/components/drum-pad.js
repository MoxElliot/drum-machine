import React from "react";

const DrumPad = ({ sound }) => {

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
    <div onClick={playSound} className="drum-pad" tabIndex={sound.keyTrigger} onKeyDown={playSound}>
      <audio id={sound.keyTrigger} src={sound.url}/>
      {sound.keyTrigger} 
      </div>
      )

}

  export default DrumPad;