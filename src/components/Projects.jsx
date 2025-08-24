import { useState } from 'react'
import styles from './Projects.module.css'
import { motion } from 'motion/react'
import TypeWriter from 'typewriter-effect'

function Projects() {

    let onHoverAudio = new Audio("./src/assets/sounds/click4.mp3");
    let onClickAudio = new Audio("./src/assets/sounds/click3.mp3");

    const [projName, setProjName] = useState(null);

    const buttonComponent = (link, imgPath, text, pName) => {
        if(text != null) {
            pName = text;
        } 
        return(
            <motion.button className={styles.projectContainer} onClick={()=>{window.open(link); onClickAudio.play()}}
            whileHover={{ scale: 1.2, rotate: 15 }}
            onHoverStart={()=>{setProjName(pName); onHoverAudio.play()}}
            onHoverEnd={()=>{setProjName(null)}}
            >
            {imgPath != null ? (
                <img src={imgPath} />
            ): <p>{text}</p>}

            </motion.button>
        )
    }

    const previewBox = () => {

        const structure = (description, purpose, icons) => {
            return(
                <div>
                    <h2>{projName}</h2>
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
                            <motion.img key={icon+projName} src={icon}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.5, delay: idx*0.3}}
                            style={{width: 70, height: 70}}
                            />
                        ))}
                    </div>
                </div>
            )
        }

        switch(projName) {
            case "Hype":
                return structure(
                        "Post polls and the hype.",
                        "I wanted to make a real-world full-stack application. Backend, frontend and database.",
                        ["./src/assets/tech_icons/React.png", "./src/assets/tech_icons/Android.png", "./src/assets/tech_icons/Firebase.png", "./src/assets/tech_icons/Expo.png"]
                    );
            case "GraphFun":
                return structure(
                        "Build graphs and try the Dijkstra algorithm.",
                        "Learning to use Javascript and the Phaser Engine.",
                        ["./src/assets/tech_icons/HTML5.png", "./src/assets/tech_icons/CSS3.png", "./src/assets/tech_icons/Javascript.png", "./src/assets/tech_icons/Phaser.png"]
                    );
            case "Quotator":
                return structure(
                        "Save and manage your favourite quotes, so you never forget them. You also get reminded of them!",
                        "Learn React Native to develop android app. A great starter for my 'Hype' app.",
                        ["./src/assets/tech_icons/React.png", "./src/assets/tech_icons/Android.png", "./src/assets/tech_icons/Expo.png"]
                    );
            case "Throw":
                return structure(
                        "Throw your character through the map and escape.",
                        "I don't know. I just had this cool idea back then. It was fun to develop.",
                        ["./src/assets/tech_icons/Unity.png", "./src/assets/tech_icons/CSharp.png", "./src/assets/tech_icons/Krita.png"]
                    );
            case "Roby":
                return structure(
                        "You play as a robot to solve cool interactive puzzles. Command line included!",
                        "I submitted this project for the German games competition 'GamesTalente' in 2022. I actually got in the Top 50 with this.",
                        ["./src/assets/tech_icons/Unity.png", "./src/assets/tech_icons/CSharp.png", "./src/assets/tech_icons/Krita.png"]
                    );
            case "You see me rollin'": 
                return structure(
                        "You see me rollin', they hatin'.... Cool tycoon game.",
                        "I don't know. I just had this cool idea back then. It was fun to develop.",
                        ["./src/assets/tech_icons/Unity.png", "./src/assets/tech_icons/CSharp.png", "./src/assets/tech_icons/Krita.png"]
                    );
            case "Glowy": 
                return structure(
                        "Top-Down 2D shooter. You have to protect your heart. Cool perks and powers.",
                        "I don't know. I just had this cool idea back then. It was fun to develop.",
                        ["./src/assets/tech_icons/Unity.png", "./src/assets/tech_icons/CSharp.png", "./src/assets/tech_icons/Krita.png"]
                    );
            case "Bigger and bigger": 
                return structure(
                        "You play as as snowball, who has to dodge the trees.",
                        "Made in one week for the Weekly Game Jam.",
                        ["./src/assets/tech_icons/Unity.png", "./src/assets/tech_icons/CSharp.png", "./src/assets/tech_icons/Blender.png"]
                    );
            case "IceFire": 
                return structure(
                        "2D Jumper with obstacles. I love the flower designs.",
                        "I don't know. I just had this cool idea back then. It was fun to develop.",
                        ["./src/assets/tech_icons/Unity.png", "./src/assets/tech_icons/CSharp.png", "./src/assets/tech_icons/Krita.png"]
                    );
            case "Machine Learning": 
                return structure(
                        "I started learning core concepts of Machine Learning at the begining of 2025. It's actually very interesting.",
                        "Prepare myself for the next world.",
                        ["./src/assets/tech_icons/Python.png", "./src/assets/tech_icons/Pandas.png", "./src/assets/tech_icons/Numpy.png", "./src/assets/tech_icons/TensorFlow.png", "./src/assets/tech_icons/PyTorch.png", "./src/assets/tech_icons/Matplotlib.png", "./src/assets/tech_icons/scikit-learn.png", "./src/assets/tech_icons/Kaggle.png"]
                    );
            case "Algorithms and Datastructures":
                return structure(
                        "I learned about maaany concepts. Graph theory, Dynamic programming, Greedy algorithms, .... This will definetly give me a good start in university.",
                        "Prepare myself for the German CS-competition BWINF (Topic: Theoretical CS / Algorithms and Datastructures).",
                        ["./src/assets/tech_icons/Java.png", "./src/assets/tech_icons/CPlusPlus.png"]
                    );
            case "Competetive Programming":
                return structure(
                        "Grinding CP problems on CSES and USACO Guide. Didn't get far, unfortunately. Too many sweats lol. And very hard, indeed.",
                        "Prepare myself for the German CS-competition BWINF (Topic: Theoretical CS / Algorithms and Datastructures).",
                        ["./src/assets/tech_icons/Java.png", "./src/assets/tech_icons/CPlusPlus.png"]
                    );
            case "TextCompleter":
                return structure(
                        "Autocomplete repetitive texts like emails, names and addresses",
                        "Project for Summer of Making. Also solving my own annoying problem.",
                        ["./src/assets/tech_icons/Python.png"]
                    );
            case "my-personal-portfolio":
                return structure(
                        "My personal portfolio. Nothing more and nothing else.",
                        "Get some more shells for Summer of Making. I didn't have a portfolio. So, why not?",
                        ["./src/assets/tech_icons/HTML5.png", "./src/assets/tech_icons/CSS3.png",  "./src/assets/tech_icons/Javascript.png", "./src/assets/tech_icons/React.png", "./src/assets/tech_icons/ViteJs.png"]
                    );
            default:
                return null
        }
    }


    return(
        <>
        
            <div className={styles.container}>
                <h3>My biggest projects</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://github.com/Orivex/Hype", "./src/assets/hype.png", null, "Hype")}
                    {buttonComponent("https://orivex.github.io/GraphFun/", "./src/assets/graphfun.png", null, "GraphFun")}
                    {buttonComponent("https://github.com/Orivex/Quotator", "./src/assets/quotator.png", null, "Quotator")}
                </div>

                <h3>Some fun games I made back in the day</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://blacklight7.itch.io/throw", "./src/assets/throw.png", null, "Throw")}
                    {buttonComponent("https://blacklight7.itch.io/roby", "./src/assets/roby.png", null, "Roby")}
                    {buttonComponent("https://blacklight7.itch.io/you-see-me-rollin", "./src/assets/rollin.png", null, "You see me rollin'")}
                    {buttonComponent("https://blacklight7.itch.io/glowy", "./src/assets/glowy.png", null, "Glowy")}
                    {buttonComponent("https://blacklight7.itch.io/bigger-and-bigger", "./src/assets/bigger.png", null, "Bigger and bigger")}
                    {buttonComponent("https://blacklight7.itch.io/icefire", "./src/assets/icefire.png", null, "IceFire")}
                </div>


                <h3>Learning stuff</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://github.com/Orivex/Machine-Learning", null, "Machine Learning")}
                    {buttonComponent("https://github.com/Orivex/Algorithms-And-Datastructures", null, "Algorithms and Datastructures")}
                    {buttonComponent("https://github.com/Orivex/CompetetiveProgramming", null, "Competetive Programming")}
                </div>

                <h3>Projects that I made for Summer of Making</h3>
                <div className={styles.projectsContainer} >
                    {buttonComponent("https://github.com/Orivex/Hype", "./src/assets/hype.png", null, "Hype")}
                    {buttonComponent("https://github.com/Orivex/TextCompleter", null, "TextCompleter")}
                    {buttonComponent("https://github.com/Orivex/my-personal-portfolio", null, "my-personal-portfolio")}
                </div>
            </div>

        {projName != null && (
            <motion.div className={styles.projectPreview}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            layout={false}
            >
                {previewBox()}
            </motion.div>
        )}

        </>
    )
}

export default Projects