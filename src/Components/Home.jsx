import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
    AiFillGithub,
    AiOutlineMail,
    AiFillLinkedin,
    AiFillFilePdf,
    AiFillPhone
} from 'react-icons/ai'
export default function Home() {
    const links = [
        {
            id: 1,
            name: 'github',
            icon: <AiFillGithub className="dark:text-light-text text-dark-bg"/>,
            link: 'https://github.com/villAsh'
        },
        {
            id: 2,
            name: 'mail',
            icon: <AiOutlineMail fill="#CA3737"/>,
            link: 'mailto:chavhanvilas02@gmail.com'
        },
        {
            id: 3,
            name: 'linkedIn',
            icon: <AiFillLinkedin fill="#0288D1"/>,
            link: 'https://www.linkedin.com/in/vilas-chauvhan-4609391aa'
        },
        {
            id: 4,
            name: 'resume',
            icon: <AiFillFilePdf fill="#FF5722"/>,
            link: 'https://drive.google.com/file/d/1JvKRrfCS5DSDI-PUnt6vPDSgR6-jgp9t/view?usp=share_link',
        },
        {
            id: 5,
            name: "call",
            icon: <AiFillPhone fill="#2196F3"/>,
            link: 'tel:9724752946'
        }
    ]
    return (
        <motion.div initial={{scale : 0}} animate={{scale : 1}} transition={{duration : 1}} className=" h-screen flex flex-col items-center justify-center font-poppins dark:bg-dark-bg">
            <h1 className="text-4xl md:text-7xl text-light-fg dark:text-light-text my-5 text-center">Hi , I am <span className="text-light-primary">Vilas Chavhan</span></h1>
            <h1 className="text-3xl md:text-5xl text-light-fg dark:text-light-text my-5 text-center">
                <Typewriter
                    options={{
                        strings: ['A Frontend Developer', 'A Web Developer', 'A Fitness Enthusiast', 'A Hardcore Gamer'],
                        autoStart: true,
                        loop: true,
                        delay: 110,
                        pauseFor : 1000,
                    }}
                />
            </h1>
            <p className="text-left text-xl text-light-fg dark:text-light-text sm:w-[70vw]">
                A self Taught Frontend Developer Who loves building <span className="text-light-primary">Web Apps</span> and <span className="text-light-primary">Solving Problems</span>.
                During my College journey i have Learnt various <span className="text-light-primary">Tools</span> and <span className="text-light-primary">Technologies</span>.
            </p>
            <ul className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-5 my-5  text-3xl">
                {links.map((item) => <li className={`relative group sm:hover:cursor-pointer`} key={item.id}>
                    <a href={`${item.link}`} className="transition-all" target="_blank" rel="noreferrer">{item.icon}</a>
                    {/* <span className="transition-all">{item.icon}</span> */}
                    <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-light-primary transition-all sm:group-hover:w-full"></span>
                </li>
                )}
            </ul>
        </motion.div>
    );
}