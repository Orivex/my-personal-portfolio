import { useRef, useState } from 'react'
import './App.css'
import MainButton from './components/MainButton'
import { motion } from 'motion/react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import TypeWriter from 'typewriter-effect'
import Contact from './components/Contact';
import clickSound from "/assets/sounds/click.mp3"
const modules = import.meta.glob("/assets/sounds/songs/*.mp3", { eager: true });

let songs = Object.values(modules).map(path => new Audio(path.default));
let clickAudio = new Audio(clickSound);
let songAudio = new Audio();

let currentSong = -1;

function App() {

  const [isMusic, setIsMusic] = useState(false);

  const [selectedInfo, setSelectedInfo] = useState(0);
  const [imgSize, setImgSize] = useState(10);


  const onClickMainButton = (num) => {
    if(imgSize == 10)
      setImgSize(5);

    clickAudio.play();
    setSelectedInfo(num);
  }

  const toggleMusic = () => {

    if(isMusic) {
      setIsMusic(false);
      songAudio.pause();
    }
    else {

      if(currentSong == -1) {
        changeMusic();
      }

      setIsMusic(true);
      songAudio.play();
    }
  }

  const changeMusic = () => {
    songAudio.pause();
    songAudio.currentTime = 0;
    let r = Math.floor(Math.random() * songs.length);
    if(r == currentSong) {
      if(r == songs.length-1) {
        r = r - 1;
      }
      else {
        r = r + 1;
      }
    }

    currentSong = r;
    songAudio = songs[currentSong];
    songAudio.volume = 0.1;
    songAudio.loop = true;
    songAudio.play();
    
  }


  return (
    <>
      <div className='buttonBar'>
        <MainButton label={"Projects"} onClick={()=>{onClickMainButton(1)}}/>
        <MainButton label={"About me"} onClick={()=>onClickMainButton(2)}/>
        <MainButton label={"Contact"} onClick={()=>onClickMainButton(3)}/>
      </div>

      <div>

          {(selectedInfo == 0 || selectedInfo == 2) && (

            
          <div>
            <motion.img src='/assets/photo.jpeg' 
              animate={{width: `${imgSize}%`}}
              transition={{duration: 0.3}}
              style={{borderRadius: '50%',
               borderColor: 'rebeccapurple',
               borderStyle: 'solid'}} />

            <motion.h1 
            animate={{fontSize: imgSize == 5 ? "1.5rem": "3rem"}}
            transition={{duration: 0.3}}
            >
              <TypeWriter
                options={{
                  strings: "Abdlhamid Bilal",
                  autoStart: true,
                  loop: false,
                  cursor: "",
                }}
              />
            </motion.h1>

          </div>
          )}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {selectedInfo == 1 && (
              <motion.div
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.3, type: "tween"}}   
                >
                <Projects/> 
              </motion.div>
            )}
            {selectedInfo == 2 && (
              <motion.div
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1, type: "spring", stiffness: 75}}   
                >
                <AboutMe/>
              </motion.div>
            )}
            {selectedInfo == 3 && (
              <motion.div
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.3, type: "tween"}}   
                >
                <Contact/>
              </motion.div>
            )}
            </div>
      </div>
          
      <motion.button
      onClick={toggleMusic}
      className='songPlayButton'
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      >
        <img src={isMusic ? '/assets/pause.png': '/assets/play.png'} className='songPlayButtonImage'/>
      </motion.button>
          
      {isMusic && (
        <motion.button
        onClick={changeMusic}
        className='changeSongButton'
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9, rotate: 270}}
        >
          <img src={'/assets/change.png'} className='songPlayButtonImage'/>
        </motion.button>
      )}

      <motion.img
        animate={isMusic ? {rotate: 360}: {rotate: 0}}
        transition={isMusic ? {duration: 5, repeat: Infinity, ease: 'linear'}: {}}
      className='musicNote' src='/assets/music_note.png' />

    </>
  )
}

export default App


