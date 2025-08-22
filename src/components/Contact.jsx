import styles from './Contact.module.css'

function Contact() {
    return(
        <>
            <h2 style={{color: 'rebeccapurple'}}>Online presence</h2>
            <div className={styles.container}>
                <button className={styles.contactButton} onClick={()=>window.open("https://discord.com/users/763796222921277460")}>
                    <img src='./src/assets/discord.png' />
                </button>
                <button className={styles.contactButton} onClick={()=>window.open("https://www.linkedin.com/in/abdlhamid-bilal-3869772a0/")}>
                    <img src='./src/assets/linkedin.png' />
                </button>
                <button className={styles.contactButton} onClick={()=>window.open("https://github.com/Orivex")}>
                    <img src='./src/assets/github.png' />
                </button>
                <button className={styles.contactButton} onClick={()=>window.open("https://www.youtube.com/@InformatiKater-42")}>
                    <img src='./src/assets/youtube.png' />
                </button>
            </div>
        </>
    )
}

export default Contact