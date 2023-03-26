import { motion } from 'framer-motion';
import avatar from '../Assets/avatar.jfif'
import { AiFillRightCircle } from 'react-icons/ai'
export default function About() {
    return (
        <div className=" font-poppins">
            <motion.h1 
            initial={{x : -500}} 
            animate={{x : 0}} 
            transition={{duration : 0.5}} 
            className="text-xl md:text-3xl text-center text-light-fg mb-10">About <span className="text-light-primary">Me</span></motion.h1>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-around pt-10'>
                <motion.img
                initial={{x : -500}}
                animate={{x : 0}}
                transition={{duration : 1}}
                src={avatar} alt="avatar" className='rounded-full' />

                <motion.div
                initial={{x : 500}}
                animate={{x : 0}}
                transition={{duration : 1}}

                >
                    <p className='text-base sm:text-xl sm:mt-0 mt-10 mx-10 text-light-fg text-justify '>
                        Hi Everyone, I am Vilas Chavhan from Ahmedabad, Gujarat.I am a <span className='text-light-primary'>React Frontend Developer </span>
                        who is eager to learn New Technologies.I am a <span className='text-light-primary'>Bacholers Of Computer Application</span> Final Year student from <span className='text-light-primary'>Lokmanya College of Computer Application</span>(Gujarat University).
                    </p>
                    <div className='flex flex-col mt-5'>
                        <h1 className='text-light-fg text-lg sm:text-xl px-10'>My Other Interest Apart from Coding...</h1>
                        <div className='px-10 mt-5 space-y-3'>
                            <h1 className='text-xl text-light-primary'><AiFillRightCircle className='inline text-light-fg' /> Video Games</h1>
                            <h1 className='text-xl text-light-primary'><AiFillRightCircle className='inline text-light-fg' /> Cricket</h1>
                            <h1 className='text-xl text-light-primary'><AiFillRightCircle className='inline text-light-fg' /> Marvel</h1>
                            <h1 className='text-xl text-light-primary'><AiFillRightCircle className='inline text-light-fg' /> Fitness</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}