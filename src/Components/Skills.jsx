import { motion } from "framer-motion";
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript, IoLogoReact, } from 'react-icons/io5'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiTailwindcss, SiDjango } from 'react-icons/si'
import { TbBrandCpp,TbBrandRedux, TbBrandNextjs, TbBrandReactNative} from 'react-icons/tb'
export default function Skills() {
    return (
        <div className="font-poppins pt-10 dark:bg-dark-bg">
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="text-xl md:text-3xl text-center text-light-fg dark:text-light-text mb-10 uppercase">
                My <span className="text-light-primary">Skills</span>
            </motion.h1>
            <motion.div
            initial={{x : -200}}
            animate={{x : 0}}
            transition={{duration : 2}}
            className=" text-8xl min-h-[80vh] sm:py-5 sm:px-10 grid gap-y-10 justify-items-center place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <AiFillHtml5 fill="#FF6D00" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <IoLogoCss3 fill="#0277BD" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <IoLogoJavascript fill="#FFD600" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <BsFillBootstrapFill fill="#673AB7" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <SiTailwindcss fill="#00ACC1" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <IoLogoReact fill="#80DEEA" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">

                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48" width="65px" height="65px">
                        <path fill="#0277BD"
                            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,
                    4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,
                    9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,
                    0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,
                    5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,
                    0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" />
                        <path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,
                    3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,
                    4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" /></svg>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <SiDjango fill="#004D40" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <AiFillGithub className="dark:text-light-text"/>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <TbBrandCpp className="dark:text-light-text" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <TbBrandRedux color="#7E57C2" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <TbBrandNextjs color="black" />
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, right: 0, bottom: 0, left: 0
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing" }}
                    className="hover:cursor-grab">
                    <TbBrandReactNative color="#80DEEA" />
                </motion.div>

            </motion.div>
        </div>
    );
}