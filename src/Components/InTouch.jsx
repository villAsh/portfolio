import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function InTouch(){
    return(
        <div className="font-poppins">
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="text-xl md:text-3xl text-center text-light-fg mb-10 uppercase">
                Get In <span className="text-light-primary">touch</span>
            </motion.h1>
            <div className="p-10 text-6xl mt-5 flex flex-row justify-evenly">
                <motion.a  whileHover={{scale : 1.2}} href="https://www.linkedin.com/in/vilas-chauvhan-4609391aa"><AiFillLinkedin fill="#0288D1"/></motion.a>
                <motion.a  whileHover={{scale : 1.2}} href="https://github.com/villAsh"><AiFillGithub /></motion.a>
                <motion.a whileHover={{scale : 1.2}} href="mailto:chavhanvilas02@gmail.com"><AiFillMail fill="red" /></motion.a>
            </div>
        </div>
    );
}