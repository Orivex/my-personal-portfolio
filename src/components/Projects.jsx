import styles from './Projects.module.css'

function Projects() {
    return(
        <div className={styles.container}>
            <h3>My biggest projects</h3>
            <div className={styles.projectsContainer} >
                <button className={styles.projectContainer} onClick={()=>{window.open("https://github.com/Orivex/Hype")}}>
                    <img src="./src/assets/hype.png" />
                </button>
                <button className={styles.projectContainer} onClick={()=>{window.open("https://orivex.github.io/GraphFun/")}}>
                    <img src="./src/assets/graphfun.png" />
                </button>
                <button className={styles.projectContainer} onClick={()=>{window.open("https://github.com/Orivex/Quotator")}}>
                    <img src="./src/assets/quotator.png" />
                </button>
            </div>

            
            <h3>Some fun games I made back in the day</h3>
            <div className={styles.projectsContainer} >
                <button className={styles.projectContainer} onClick={()=>{window.open("https://blacklight7.itch.io/throw")}}>
                    <img src="./src/assets/throw.png" />
                </button>
                <button className={styles.projectContainer} onClick={()=>{window.open("https://blacklight7.itch.io/roby")}}>
                    <img src="./src/assets/roby.png" />
                </button>
                <button className={styles.projectContainer} onClick={()=>{window.open("https://blacklight7.itch.io/you-see-me-rollin")}}>
                    <img src="./src/assets/rollin.png" />
                </button>
            </div>

            
            <h3>Learning stuff</h3>
            <div className={styles.projectsContainer} >
                <button className={styles.projectContainer} onClick={()=>{window.open("https://github.com/Orivex/Machine-Learning")}}>
                    <p>Machine Learning</p>
                </button>
                <button className={styles.projectContainer} onClick={()=>{window.open("https://github.com/Orivex/Algorithms-And-Datastructures")}}>
                    <p>Algorithms and Datastructures</p>
                </button>
                <button className={styles.projectContainer} onClick={()=>{window.open("https://github.com/Orivex/CompetetiveProgramming")}}>
                    <p>Competetive Programming Arc (failed)</p>
                </button>
            </div>
        </div>
    )
}

export default Projects