import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton'
import { motion } from 'motion/react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import TypeWriter from 'typewriter-effect'
import Contact from './components/Contact';

function App() {

  const [selectedInfo, setSelectedInfo] = useState(0);
  const [imgSize, setImgSize] = useState(10);

  const onClickMainButton = (num) => {
    if(imgSize == 10)
      setImgSize(5)

    setSelectedInfo(num)
  }

  return (
    <>
      <div className='buttonBar'>
        <MainButton label={"Projects"} onClick={()=>onClickMainButton(1)}/>
        <MainButton label={"About me"} onClick={()=>onClickMainButton(2)}/>
        <MainButton label={"Contact"} onClick={()=>onClickMainButton(3)}/>
      </div>

      <div>

          {(selectedInfo == 0 || selectedInfo == 2) && (

            
          <div>
            <motion.img src='./src/assets/photo.jpeg' 
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
                transition={{duration: 1, type: "spring", stiffness: 75}}   
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
                transition={{duration: 0.5, type: "tween"}}   
                >
                <Contact/>
              </motion.div>
            )}
            </div>
      </div>
    </>
  )
}

export default App


