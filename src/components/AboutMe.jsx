import { motion } from "motion/react";
import styles from './AboutMe.module.css'

function AboutMe() {
    return(
        <div className={styles.container}>
            <h3>Introduction</h3>
            <p>Hey! My name is Abdlhamid Bilal, 19 years old, and I just finished high school in Germany.
                I am a CS-enthusiast and love building projects like this.
            </p>
            <h3>University</h3>
            <p>
                In Octobre 2025 I will start studying Computer Science at the RWTH in Aachen, Germany.
            </p>
            <h3>Hobbies</h3>
            <p>
                I love doing sports, such as MMA 🥊 and swimming 🏊‍♂️
                But most of the time, I build projects like this!
                Check out my GitHub account:
            </p>
            <button 
            onClick={()=>window.open("https://github.com/Orivex")}
            style={{ 
                      background: "none", 
                      border: "none", 
                      outline: "none",
                      padding: 0, 
                      margin: 0,
                    }}>
                <img style={{borderRadius: '50%', width: 25, height: 25}} src="./src/assets/github.png" alt="icon"/>
            </button>
        </div>
    )
}

export default AboutMe;