import { motion } from "framer-motion";
export default function Timeline(){
    return(
        <div className="font-poppins">
            <motion.h1 
            initial={{x : -500}} 
            animate={{x : 0}} 
            transition={{duration : 0.5}} 
            className="text-xl md:text-3xl text-center text-light-fg mb-10">My <span className="text-light-primary">Timeline</span></motion.h1>
        </div>
    );
}