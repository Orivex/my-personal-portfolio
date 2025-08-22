import { useState } from 'react'
import styles from './Projects.module.css'
import { motion } from 'motion/react'
import TypeWriter from 'typewriter-effect'

function Projects() {

    const [projNumber, setProjNumber] = useState(0);

    const buttonComponent = (link, imgPath, text, pNumber) => {
        return(
            <motion.button className={styles.projectContainer} onClick={()=>{window.open(link)}}
            whileHover={{ scale: 1.2, rotate: 15 }}
            onHoverStart={()=>{setProjNumber(pNumber); console.log("Changed")}}
            >
            {imgPath != null ? (
                <img src={imgPath} />
            ): <p>{text}</p>}

            </motion.button>
        )
    }

    const previewBox = () => {

        const structure = (title, description, purpose, icons) => {
            return(
                <div>
                    <h2>{title}</h2>
                    <div style={{textAlign: 'left'}}>
                        <h3>Description</h3>
                        <TypeWriter
                        options={{
                            strings: description,
                            autoStart: true,
                            loop: false,
                            delay: 20,
                            cursor: ""
                        }}
                        />
                        <h3>Purpose</h3>
                        <TypeWriter
                        options={{
                            strings: purpose,
                            autoStart: true,
                            loop: false,
                            delay: 20,
                            cursor: ""
                        }}
                        />
                        <h3>Tech stack</h3>
                        {icons.map((icon, idx) => (
                            <motion.img key={idx} src={icon} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}}
                            style={{width: 70, height: 70}}
                            />
                        ))}
                    </div>
                </div>
            )
        }

        switch(projNumber) {
            case 1:
                return structure(
                        "Hype",
                        "Post polls and the hype",
                        "I wanted to make a real-world full-stack application. Backend, frontend and database",
                        ["./src/assets/github.png", "./src/assets/roby.png"]
                    );
            case 2:
                return structure(
                        "GraphFun",
                        "Build graphs and try the Dijkstra algorithm",
                        "Learning to use Javascript and the Phaser Engine",
                        ["./src/assets/github.png", "./src/assets/roby.png"]
                    );
            case 3:
                return structure(
                        "Quotator",
                        "Save and manage your favourite quotes, so you never forget them. You also get reminded of them!",
                        "Learn React Native to develop android app. A great starter for my 'Hype' app",
                        ["./src/assets/github.png", "./src/assets/roby.png"]
                    );
            case 4:
                return structure(
                        "Throw",
                        "Throw your character through the map and escape",
                        "I don't know. I just had this cool idea back then. It was fun to develop",
                        ["./src/assets/github.png", "./src/assets/roby.png"]
                    );
            case 5:
                return structure(
                        "Throw",
                        "Throw your character through the map and escape",
                        "I don't know. I just had this cool idea back then. It was fun to develop",
                        ["./src/assets/github.png", "./src/assets/roby.png"]
                    );
            default:
                return null
        }
    }


    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        
            <div className={styles.container}>
                <h3>My biggest projects</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://github.com/Orivex/Hype", "./src/assets/hype.png", null, 1)}
                    {buttonComponent("https://orivex.github.io/GraphFun/", "./src/assets/graphfun.png", null, 2)}
                    {buttonComponent("https://github.com/Orivex/Quotator", "./src/assets/quotator.png", null, 3)}
                </div>

                <h3>Some fun games I made back in the day</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://blacklight7.itch.io/throw", "./src/assets/throw.png", null, 4)}
                    {buttonComponent("https://blacklight7.itch.io/roby", "./src/assets/roby.png", null, 5)}
                    {buttonComponent("https://blacklight7.itch.io/you-see-me-rollin", "./src/assets/rollin.png", null, 6)}
                    {buttonComponent("https://blacklight7.itch.io/glowy", "./src/assets/glowy.png", null, 7)}
                    {buttonComponent("https://blacklight7.itch.io/bigger-and-bigger", "./src/assets/bigger.png")}
                    {buttonComponent("https://blacklight7.itch.io/icefire", "./src/assets/icefire.png")}
                </div>


                <h3>Learning stuff</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://github.com/Orivex/Machine-Learning", null, "Machine Learning")}
                    {buttonComponent("https://github.com/Orivex/Algorithms-And-Datastructures", null, "Algorithms and Datastructures")}
                    {buttonComponent("https://github.com/Orivex/CompetetiveProgramming", null, "Competetive Programming Arc (failed)")}
                </div>

                <h3>Projects that I made for Summer of Making</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://github.com/Orivex/Hype", "./src/assets/hype.png")}
                    {buttonComponent("https://github.com/Orivex/TextCompleter", null, "TextCompleter")}
                    {buttonComponent("https://github.com/Orivex/my-personal-portfolio", null, "my-personal-portfolio")}
                </div>
            </div>

        <div className={styles.projectPreview}>
            {previewBox()}
        </div>
        </div>
    )
}

export default Projects