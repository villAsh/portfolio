import { motion } from 'framer-motion';
import avatar from '../Assets/avatar.jfif'
import { AiFillRightCircle } from 'react-icons/ai'
export default function About() {
    return (
        <div className=" font-poppins sm:mt-0 dark:bg-dark-bg">
            <motion.h1 
            initial={{scale : 0}} 
            animate={{scale : 1}} 
            transition={{duration : 1}} 
            className="text-xl md:text-3xl text-center text-light-fg dark:text-light-text mb-10 uppercase">About <span className="text-light-primary">Me</span></motion.h1>
            <div className='h-screen grid grid-cols-1 sm:grid-cols-3 place-content-center '>
                <motion.img
                initial={{scale : 0}}
                animate={{scale : 1}}
                transition={{duration : 1}}
                src={avatar} alt="avatar" className='rounded-full' />

                <motion.div
                initial={{scale : 0}}
                animate={{scale : 1}}
                transition={{duration : 1}}
                className="col-span-2"
                >
                    <p className='text-base sm:text-xl sm:mt-0 mt-10 text-light-fg dark:text-light-text text-justify md:mr-5'>
                        Hi Everyone, I am Vilas Chavhan from Ahmedabad, Gujarat.I am a <span className='text-light-primary'>React Frontend Developer </span>
                        who is eager to learn New Technologies.I am a <span className='text-light-primary'>Bacholers Of Computer Application</span> Final Year student from <span className='text-light-primary'>Lokmanya College of Computer Application</span>(Gujarat University).
                    </p>
                    <div className='flex flex-col mt-5'>
                        <h1 className='text-light-fg dark:text-light-text text-lg sm:text-xl px-10'>My Other Interest Apart from Coding...</h1>
                        <div className='px-10 mt-5 mb-10 space-y-3 text-center sm:text-left'>
                            <h1 className='text-xl text-light-primary'><AiFillRightCircle className='inline text-light-fg dark:text-light-text' /> Video Games</h1>
                            <h1 className='text-xl text-light-primary'><AiFillRightCircle className='inline text-light-fg dark:text-light-text' /> Cricket</h1>
                            <h1 className='text-xl text-light-primary'><AiFillRightCircle className='inline text-light-fg dark:text-light-text' /> Marvel</h1>
                            <h1 className='text-xl text-light-primary'><AiFillRightCircle className='inline text-light-fg dark:text-light-text' /> Fitness</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}