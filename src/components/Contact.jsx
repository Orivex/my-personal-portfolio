import styles from './Contact.module.css'

function Contact() {
    return(
        <div className={styles.container}>
            <button className={styles.contactButton}>
                <img src='./src/assets/discord.png' />
            </button>
            <button className={styles.contactButton}>
                <img src='./src/assets/linkedin.png' />
            </button>
        </div>
    )
}

export default Contact