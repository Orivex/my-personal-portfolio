import { motion } from 'motion/react'
import styles from './MainButton.module.css'

function MainButton({label, onClick}) {
    return (
        <div>
            <motion.button
            className={styles.mainButton}
            onClick={onClick}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 1}}
            >
                {label}
            </motion.button>
        </div>
    )
}

export default MainButton