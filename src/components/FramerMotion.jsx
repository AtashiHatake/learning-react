import { motion } from "motion/react";

const CubeRotate = ()=> {
    const box = {
        width: 100,
        height: 100,
        borderRadius: 40,
        backgroundColor: 'blue',
        margin: 'auto'
    };

    return(
        <motion.div 
        style={box}
        animate={{
            rotate: 180,
            transition: { duration: 0.5 }
        }}
        />
    )
}

export default CubeRotate;