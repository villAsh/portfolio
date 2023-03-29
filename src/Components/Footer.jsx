import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";


export default function Footer(){
    return(
        <div className="h-[25vh] flex items-center justify-center font-poppins dark:bg-dark-bg">
            <motion.h1 className="flex items-center sm:text-5xl dark:text-light-text">Made With <AiFillHeart fill="#FF1744" className="mx-3 text-[#FF1744]"/> by <span className="text-light-primary ml-3"> Vilas</span></motion.h1>
        </div>
    );
}