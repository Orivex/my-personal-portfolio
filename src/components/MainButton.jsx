import './MainButton.css'
import { motion } from 'motion/react'

function MainButton({label, onClick}) {
    return (
        <div>
            <motion.button
            className="mainButton"
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