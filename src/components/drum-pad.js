import React from "react";




const DrumPad = ({sound}) => {

  const playSound = () => {
    const playAudio = document.getElementById(sound.keyTrigger);
    playAudio.currentTime = 0;
    playAudio.play();
  }
      return (
        <div onClick={playSound}>
          <audio id={sound.keyTrigger} src={sound.url}/>
         {sound.keyTrigger} 
         </div>
         )

}

  export default DrumPad;