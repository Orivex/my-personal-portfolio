import styles from './Contact.module.css';
import { motion } from 'motion/react';


function Contact() {

    const buttonComponent = (link, imgPath) => {
        return (
            <motion.button className={styles.contactButton} onClick={()=>window.open(link)}
            whileHover={{scale: 1.1}}
            >
                <img src={imgPath} />
            </motion.button>
        )
    }

    return(
        <>
            <h2 style={{color: 'rebeccapurple'}}>Online presence</h2>
            <div className={styles.container}>
                {buttonComponent("https://www.linkedin.com/in/abdlhamid-bilal-3869772a0/", '/assets/linkedin.png')}
                {buttonComponent("https://discord.com/users/763796222921277460", '/assets/discord.png')}
                {buttonComponent("https://github.com/Orivex", '/assets/github.png')}
                {buttonComponent("https://www.youtube.com/@InformatiKater-42", '/assets/youtube.png')}
            </div>
        </>
    )
}

export default Contact